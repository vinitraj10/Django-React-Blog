import React,{Component} from 'react';
import {getMyOrders} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Loading from "../../components/loading";
import Err from "../../components/error";
import Order from './order';

class Myorders extends Component {
	componentDidMount(){
		this.props.getMyOrders();
	}
	render(){
		const {isFetched,isFetching,product} = this.props.myorders;
		return (
			<div className="container">
				{isFetching?(<Loading/>):(isFetched?(<Order products={product}/>):(<Err/>))}	
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		myorders:state.myorders
	}
}

export default connect(mapStateToProps,{getMyOrders})(Myorders);