import { Number } from 'common/nominal-types'
import { Map } from 'immutable'

// tslint:disable no-any

export type UserID = Number<IUser>
export interface IUser {
  readonly id: UserID
  readonly firstName: string
  readonly lastName: string
  readonly avatar?: string
}

export type ICreateUserDTO = Pick<IUser, 'firstName' | 'lastName'>

export const fromAPI = (data: any): IUser => ({
  avatar: data.avatar,
  firstName: data.first_name,
  id: data.id,
  lastName: data.last_name,
})

export const fromCreatedUserDTO = (data: any): IUser => ({
  firstName: data.firstName,
  id: data.id,
  lastName: data.lastName,
})

// tslint:disable-next-line no-any
export const fromAPIArray = ({ data }: { readonly data: any[] }): Map<UserID, IUser> =>
  Map(data
    .map(fromAPI)
    .map(user => [user.id, user] as [UserID, IUser]))
