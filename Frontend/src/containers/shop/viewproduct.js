import React,{Component} from 'react';
import {viewProduct} from '../../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Loading from '../../components/loading';
import Err from '../../components/error';
import Product from './product';

class ViewProduct extends Component {
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.viewProduct(id);
	}
	render(){
		const {isFetching,isFetched,item} = this.props.product;
		return (
			<div className="container">
				{isFetching?(<Loading/>):(isFetched?(<Product product={item}/>):(<Err/>))}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		product:state.product
	}
}

ViewProduct = withRouter(ViewProduct);

export default connect(mapStateToProps,{viewProduct})(ViewProduct)