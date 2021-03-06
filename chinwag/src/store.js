import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index'

// import comments from './data/comments'
// import posts from './data/posts'

// 1. create object for default data
const defaultState = {
   'poop': 'it smells poopy'
   // posts,
   // comments
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
