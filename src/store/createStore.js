import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          composeWithDevTools(applyMiddleware(...middlewares))
        )
      : composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(reducers, enhancer);
};
