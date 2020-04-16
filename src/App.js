import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Contexts
import { ProductContext, CartContext } from './context';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart

	};

	return (
		<div className="App">
			<CartContext.Provider cart={cart}>
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<ProductContext.Provider products={products}>
						<Products products={products} addItem={addItem} />
					</ProductContext.Provider>
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
