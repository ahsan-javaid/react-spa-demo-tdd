import { render } from '@testing-library/react';
import List from './index';
import { DummyUsers } from 'shared/utils';


test('Should render list of users', () => {

  const { getByText } = render(<List users={DummyUsers} />);

  for(const user of DummyUsers) {
    const username = getByText(new RegExp(user.name));
    const email = getByText(new RegExp(user.email));
    const phone = getByText(new RegExp(user.phone ));
    const website = getByText(new RegExp(user.website));

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(website).toBeInTheDocument();
  }
});
