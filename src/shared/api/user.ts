import http from './http';
import User from 'shared/types/user';
import { AVATAR_URL } from 'shared/constants/config';

export const getUsers = (): Promise<Array<User>> => {
  return http.get<Array<User>>('/users').then(res => res.data);
};

export const getAvatar = (username: string): string => {
  return `${AVATAR_URL}/${username}.svg`;
}
