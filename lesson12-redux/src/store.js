import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
