import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { DummyUsers } from 'shared/utils';

const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get = jest.fn().mockResolvedValue({ data: {} });


afterEach(() => {
  mockedAxios.get.mockClear();
});

function apiCall() {
  mockedAxios.get.mockResolvedValueOnce({
    data: DummyUsers
  });
};

test('Should render the app with list of users', async () => {
  const url = `/users`;

  apiCall();

  await waitFor(() =>
    render(<App />)
  );

  for(const user of DummyUsers) {
    const username = screen.getByText(new RegExp(user.name));
    const email = screen.getByText(new RegExp(user.email));
    const phone = screen.getByText(new RegExp(user.phone ));
    const website = screen.getByText(new RegExp(user.website));

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(website).toBeInTheDocument();
  }

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith(url);
});
