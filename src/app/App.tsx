import { ActionProgress } from 'app/action-progress'
import { Counter } from 'app/counter'
import { UserForm } from 'app/user-form'
import { UserList } from 'app/user-list'
import { store } from 'lib/store/store'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

// tslint:disable jsx-boolean-value

export const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/user/list'>User list</Link></li>
          <li><Link to='/user/add'>Add user</Link></li>
        </ul>
        <ActionProgress />
        <Route exact path='/' component={Counter} />
        <Route path='/user/list' component={UserList} />
        <Route path='/user/add' component={UserForm} />
      </div>
    </Router>
  </Provider>
)
