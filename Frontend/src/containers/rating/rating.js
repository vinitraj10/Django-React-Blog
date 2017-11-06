import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Products extends Component {
	renderProduct(product){
		return(
			<div className="column col-6"  key={product.id}>
				<div className="card">
				  <div className="card-header">
				    <h4 className="card-title">{product.product}</h4>
				  </div>
				  <div className="card-body">
				    {product.value}
				  </div>
				  <div className="card-footer">
				    <Link className="btn btn-primary" to={`/edit/rating/${product.id}`}>Edit</Link>
				  </div>
				</div>
			</div>
		);
	}
	render() {
		const {products} = this.props;
		length = products.length;
		//console.log(length)
		if(length>0){
			return (
				<div className="columns">
						{products.map(this.renderProduct.bind(this))}
				</div>
			)
		}
		return (
			<div className="centered">
				<h2>You have not rated any products</h2>
			</div>
		)
	}
}

export default Products;

	