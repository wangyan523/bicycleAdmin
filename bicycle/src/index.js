import React from 'react';
import ReactDOM from 'react-dom';
// import Admin from './Admin';
// import Router from './router/routerDemo1'
// import TodoList from './page/todolist/TodoList'
// import StopWatch from './page/stopwatch/StopWatch'
// import RandomJoke from './page/joke/RandomJoke'
// import WithComponent from './page/withComponent/WithComponent'
// import Context from './page/context/ContextTheme'
import TodoList2 from './page/todolist2/TodoList'
// import TabsPage from './page/tabs/TabsPage'
import { Provider } from 'react-redux'
import store from './page/todolist2/store'

const App = (
  <Provider store={store}>
    <TodoList2 />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
