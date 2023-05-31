import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ reducer })
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

export default store