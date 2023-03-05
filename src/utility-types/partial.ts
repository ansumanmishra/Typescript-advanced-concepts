interface User {
  id: number;
  name: string;
  email: string;
}

// Partial of User properties
const updateUser: Partial<User> = {
  name: 'James',
};
