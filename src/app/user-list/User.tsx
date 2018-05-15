import { IUser } from 'lib/user'
import * as React from 'react'

interface IUserComponentProps {
  readonly user: IUser
}

export const User: React.SFC<IUserComponentProps> = ({ user }) => (
  <span>{user.firstName} {user.lastName}</span>
)
