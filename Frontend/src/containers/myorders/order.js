import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Products extends Component {
	renderProduct(product){
		return(
			<div className="column col-6"  key={product.id}>
				<div className="card">
				  <div className="card-header">
				    <h4 className="card-subtitle">{product.title}</h4>
				  </div>
				  <div className="card-body">
				    {product.cost}
				  </div>
				  <div className="card-footer">
				    <Link className="btn btn-primary" to={`submit/rating/${product.id}`}>Rate Now</Link>
				  </div>
				</div>
			</div>
		);
	}
	render() {
		const {products} = this.props;
		console.log(products.length)
		if(products.length > 0){
			return (
				<div className="columns">
					{products.map(this.renderProduct.bind(this))}
				</div>
			);
		}
		return (
			<div>
				<h4>You Dont have any orders Yet please buy something from store</h4>
			</div>
		);
	}
}

export default Products;