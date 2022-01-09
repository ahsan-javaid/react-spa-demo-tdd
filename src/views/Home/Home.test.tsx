import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './index';
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
}

test('Should show loading state to wait for api response', async () => {
  apiCall();

 const { getByText } = render(<Home />);

 await waitFor(() =>  expect(getByText(/loading.../i)).toBeInTheDocument());
});

test('Should render users on home page', async () => {
  const url = `/users`;

  apiCall();

  await waitFor(() =>
    render(<Home />)
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
