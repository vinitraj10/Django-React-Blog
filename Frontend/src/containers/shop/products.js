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
				    <Link className="btn btn-primary" to={`/view_product/${product.id}`}>View</Link>
				  </div>
				</div>
			</div>
		);
	}
	render() {
		const {products} = this.props;
		return (
			<div className="columns">
				{products.map(this.renderProduct.bind(this))}
			</div>
		);
	}
}

export default Products;