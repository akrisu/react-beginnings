import { Button } from 'app/ui/Button'
import { List } from 'immutable'
import { IState } from 'lib/store'
import { IUser } from 'lib/user'
import { UserAction } from 'lib/user/actions'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { isFetchingUsers, selectUsers } from '../../lib/user/selectors'
import { Preloader } from '../ui/Preloader'
import { User } from './User'

interface IUserListStateProps {
  readonly isFetching: boolean
  readonly users: List<IUser>
}

interface IUserListDispatchProps {
  readonly fetch: () => void
}

type IUserListProps = IUserListDispatchProps & IUserListStateProps

const UserListComponent: React.SFC<IUserListProps> = ({ fetch, users, isFetching }) => (
  <>
    UserList
    <Button onClick={fetch} text='fetch' />
    {users.map(user => <User key={user.id} user={user} />)}
    {isFetching && <Preloader />}
  </>
)

const mapStateToProps = (state: IState): IUserListStateProps => ({
  isFetching: isFetchingUsers(state),
  users: selectUsers(state).toList(),
})

const mapDispatchToProps = (dispatch: Dispatch<UserAction>): IUserListDispatchProps => ({
  fetch: () => { dispatch(UserAction.fetchUsers()) },
})

export const UserList = connect(mapStateToProps, mapDispatchToProps)(UserListComponent)
