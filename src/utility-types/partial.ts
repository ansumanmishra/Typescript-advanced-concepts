interface UserDetails {
  id: number;
  name: string;
  email: string;
}

// Partial of User properties
const updateUser: Partial<UserDetails> = {
  name: 'James',
};
