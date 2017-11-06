import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../actions';
import Loading from '../../components/loading';
import Err from '../../components/error';
import Products from './products';

class Shop extends Component {
	componentDidMount(){
		this.props.getProducts();
	}
	render() {
		const {isFetched,isFetching,products} = this.props.shop;
		return (
			<div className="container">
				{isFetching?(<Loading/>):(isFetched?(<Products products={products}/>):(<Err/>))}	
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		shop:state.shop
	}
}
export default connect(mapStateToProps,{getProducts})(Shop);