import Address from 'shared/types/address';
import Company from 'shared/types/company';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export default User;
