import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {buyProduct} from '../../actions';
import {connect} from 'react-redux';
import Avg from './avg';

class Product extends Component {
	buy(){
		const {id} = this.props.product;
		this.props.buyProduct(id,()=>{
			this.props.history.push('/myorders')
		})
	}
	render(){
		const {product} = this.props;
		return(
			<div className="column col-12">
				<div className="card">
				  <div className="card-header">
				  	<h3 className="card-title">{product.title}</h3>
				    <h4 className="card-subtitle">{product.cost}</h4>
				  </div>
				  <div className="card-body">
				    {product.description}
				    <hr/>
				    <Avg id={product.id}/>
				  </div>
				  <div className="card-footer">
				    <a className="btn btn-primary" onClick={this.buy.bind(this)}>Buy Now</a>
				  </div>
				</div>
			</div>
		);
	}
}
Product = withRouter(Product);
export default connect(null,{buyProduct})(Product);