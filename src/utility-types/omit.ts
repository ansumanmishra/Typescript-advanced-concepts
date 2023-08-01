interface UserValues {
  id: number;
  name: string;
  email: string;
}

// Omit<Type, Keys>
// Omits any property
const TempUser: Omit<UserValues, 'id'> = {
  name: 'James',
  email: 'james@google.com',
};

// Omits multiple properties
const TempUser1: Omit<UserValues, 'id' | 'email'> = {
  name: 'Jones',
};

// Can create a separate type and use it
type NewUser = Omit<UserValues, 'id'>;

const newUser: NewUser = {
  name: 'James',
  email: 'james@gmail.com',
};
