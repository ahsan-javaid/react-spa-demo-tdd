import React from 'react';
import { Row, Col } from 'antd';
import Card from 'shared/components/Card';
import User from 'shared/types/user';

type ListProps = {
  users: User[];
};

const List = (props: ListProps) => {
  const { users } = props;

  return (
    <Row>
      {users.map((user: User) => (
        <Col xs={24} sm={12} md={12} lg={8} xl={6} key={user.id}>
          <Card user={user}></Card>
        </Col>
      ))}
    </Row>
  )
}

export default List;
