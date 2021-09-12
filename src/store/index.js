import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);

let test = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {rate: 3.9, count: 120},
};
