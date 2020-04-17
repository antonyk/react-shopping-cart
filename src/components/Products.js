import React, { useContext } from 'react';

// Context
import { ProductContext } from '../context'

// Components
import Product from './Product';

const Products = () => {
	const productsContext = useContext(ProductContext);

	return (
		<div className="products-container">
			{productsContext.products && productsContext.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={productsContext.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
