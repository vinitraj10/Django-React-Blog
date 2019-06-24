import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBlogs } from '../actions';

// contianers
import Posts from './posts';
// dumb components
import Loading from '../components/loading';
import Err from '../components/error';

class Blogs extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }

  render() {
    const { isFetching } = this.props.blogs;
    const { isFetched } = this.props.blogs;
    return (
      <div className="container">
        {isFetching ? (
          <Loading />
        ) : isFetched ? (
          <Posts posts={this.props.blogs.posts} />
        ) : (
          <Err />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogs: state.blogs,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBlogs }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
