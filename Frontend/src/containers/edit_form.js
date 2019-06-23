import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { renderInput } from '../utils/redux-form-fields';
import { editPost } from '../actions';

class EditForm extends Component {
  componentDidMount() {
    const { data } = this.props.data;
    this.props.initialize({
      title: data.title,
      content: data.content,
    });
  }

  formSubmit(formValue) {
    const { data } = this.props.data;
    // console.log(data.id);
    this.props.editPost(formValue, data.id, () => {
      this.props.history.push(`/view_post/${data.id}`);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { data } = this.props.data;
    // console.log(this.props);
    return (
      <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
        <Field
          component={renderInput}
          label="Title"
          type="text"
          name="title"
        />
        <Field
          component={renderInput}
          label="Content"
          type="text"
          name="content"
        />
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Save</button>
          <Link to={`/view_post/${data.id}`} className="btn btn-default"> Cancel</Link>
        </div>
      </form>
    );
  }
}

EditForm = withRouter(EditForm);
EditForm = reduxForm({
  form: 'EditForm',
  fields: ['title', 'content'],
})(EditForm);


export default connect(null, { editPost })(EditForm);
