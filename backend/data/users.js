import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Tyree Doe',
    email: 'tyree@example.com',
    password: bcrypt.hashSync('123456', 10),
    },
  {
    name: 'Courtney Doe',
    email: 'courtney@example.com',
    password: bcrypt.hashSync('123456', 10),
    },
]

export default users