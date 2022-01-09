import React, { useEffect, useState } from 'react';
import { getUsers } from 'shared/api/user';
import User from 'shared/types/user';
import List from 'shared/components/List';

export const Home = () => {
  const [ users, setUsers ] = useState<User[]>([]);

  const init = async () => {
    const users: User[] = await getUsers();
    setUsers(users);
  }

  useEffect(  () => {
    init();
  }, []);

  if (users.length === 0) {
    return (<>loading...</>);
  }

  return (<List users={users}/>);
}
