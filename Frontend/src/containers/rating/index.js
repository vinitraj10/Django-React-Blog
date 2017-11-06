import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAllRatings} from '../../actions';
import Loading from "../../components/loading";
import Err from "../../components/error";
import Rating from './rating';

class Ratings extends Component {
	componentDidMount(){
		this.props.getAllRatings();
	}
	render() {
		const {isFetching,isFetched,products} = this.props.myratings;
		console.log(products);
		return (
			<div>
				{isFetching?(<Loading/>):(isFetched?(<Rating products={products}/>):(<Err/>))}
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		myratings:state.myratings
	}
}
export default connect(mapStateToProps,{getAllRatings})(Ratings);