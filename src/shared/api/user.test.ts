import axios, { AxiosResponse } from 'axios';
import { DummyUsers } from 'shared/utils';
import { getUsers } from 'shared/api/user';

const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get = jest.fn().mockResolvedValue({ data: {} });

test('Get list of users from api', async () => {

  const mockedResponse: AxiosResponse = {
    data: DummyUsers,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };

  mockedAxios.get.mockResolvedValueOnce(mockedResponse);
  expect(axios.get).not.toHaveBeenCalled();

  const data = await getUsers();

  expect(axios.get).toHaveBeenCalled();
  expect(data).toEqual(DummyUsers);
});
