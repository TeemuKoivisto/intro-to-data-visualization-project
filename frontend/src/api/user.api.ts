import { IUser, ILoginCredentials, ILoginResponse } from '../types/user'

import {
  get,
  post
} from './methods'

export const login = (credentials: ILoginCredentials) =>
  post<ILoginResponse>('login', credentials)

export const getUsers = () =>
  get<{users: IUser[]}>('users')
