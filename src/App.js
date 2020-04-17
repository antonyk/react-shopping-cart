import React, { useState } from 'react';
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
		setCart([...cart,item])

	};

	const removeItem = item => {
		setCart(cart.filter(i => {
			return i.id === item.id ? false : true;
		}))
	}

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<ProductContext.Provider value={{products, addItem}}>
					<Products />
				</ProductContext.Provider>
			</Route>

			<Route path="/cart">
				<CartContext.Provider value={{cart, removeItem}}>
					<ShoppingCart />
				</CartContext.Provider>
			</Route>
		</div>
	);
}

export default App;
