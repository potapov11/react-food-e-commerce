import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './Redux/store.js';
import { Provider } from 'react-redux';

console.log(store, 'store');

import App from './App.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: '404',
				element: <NotFound />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
