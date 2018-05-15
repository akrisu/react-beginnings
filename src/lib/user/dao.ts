import { api } from 'common/ajax'
import { Map } from 'immutable'
import { Observable } from 'rxjs/Observable'
import { map, tap } from 'rxjs/operators'

import { fromAPIArray, fromCreatedUserDTO, ICreateUserDTO, IUser, UserID } from './dto'

export const getUsers = (): Observable<Map<UserID, IUser>> => (
  api.get('https://reqres.in/api/users?page=2')
    .pipe(
      map(fromAPIArray)))

export const createUser = (user: ICreateUserDTO): Observable<IUser> => (
  api.post('https://reqres.in/api/users', user)
    .pipe(
      map(({ response }) => response),
      map(fromCreatedUserDTO)))
