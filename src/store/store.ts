import { applyMiddleware, createStore, compose } from 'redux';
import { logger } from './middleware/logger';
import { thunk } from './middleware/thunk';
import tickerReducer from './tickers';

const middlewareEnhancer = applyMiddleware(logger, thunk);

export default function configureStore() {
    return createStore(tickerReducer, compose(middlewareEnhancer));
}
