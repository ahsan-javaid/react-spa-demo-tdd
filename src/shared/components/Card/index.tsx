import React from 'react';
import { Card, Typography, Space } from 'antd';
import { EditOutlined, DeleteOutlined, HeartOutlined, GlobalOutlined } from '@ant-design/icons';
import { useCardStyles } from 'shared/hooks/useStyles';
import {
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import User from 'shared/types/user';
import { getAvatar } from 'shared/api/user';

const { Meta } = Card;
const { Text } = Typography;

type CardProps = {
  user: User;
};

const CardItem = (props: CardProps) => {
  const { user } = props;
  const styles = useCardStyles();

  return (<Card
    style={styles.card}
    cover={
      <img
        alt='user_avatar'
        style={styles.avatar}
        src={getAvatar(user.username)}
      />
    }
    actions={[
      <HeartOutlined key="like" style={styles.heart} />,
      <EditOutlined key="edit" />,
      <DeleteOutlined key="delete" />,
    ]}
  >
    <Meta
      style={styles.meta}
      avatar=''
      title={user.name}
      description=''
    />
    <Space direction='vertical'>
      <Text><MailOutlined /> {user.email}</Text>
      <Text><PhoneOutlined /> {user.phone}</Text>
      <Text><GlobalOutlined /> {user.website}</Text>
    </Space>
  </Card>)
};

export default CardItem;
