export class UserService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMerried: boolean;
    email: string;
  }[] = [
    { id: 1, name: 'A', age: 20, gender: 'Male', isMerried: false, email: 'A@A.com' },
    { id: 2, name: 'B', age: 21, gender: 'Female', isMerried: false , email: 'B@B.com'},
    { id: 3, name: 'C', age: 22, gender: 'Male', isMerried: false, email: 'C@C.com' },
    { id: 4, name: 'D', age: 23, gender: 'Female', isMerried: false, email: 'D@D.com' },
    { id: 5, name: 'E', age: 24, gender: 'Male', isMerried: false, email: 'E@E.com' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMerried: boolean;
    email: string;
  }) {
    this.users.push(user);
  }
}
