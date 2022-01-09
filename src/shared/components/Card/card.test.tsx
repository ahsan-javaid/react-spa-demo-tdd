import { render } from '@testing-library/react';
import Card from './index';
import { getAvatar } from 'shared/api/user';

test('Should render card with user props', () => {
  const user = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  };

  const { getByText, getByAltText } = render(<Card user={user} />);

  const username = getByText(new RegExp(user.name));
  const email = getByText(new RegExp(user.email));
  const phone = getByText(new RegExp(user.phone));
  const website = getByText(new RegExp(user.website));
  const avatar = getByAltText(new RegExp('user_avatar'));

  expect(username).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
  expect(website).toBeInTheDocument();
  expect(avatar).toHaveAttribute('src', getAvatar(user.username));
});
