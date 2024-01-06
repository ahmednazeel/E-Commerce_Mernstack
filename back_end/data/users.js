// const bcrypt = require("bcryptjs/dist/bcrypt");
import bcrypt from 'bcryptjs'
const Users = [
    {
        name:"ahmed nazeel",
        email:"ahmednazeel705@gmail.com",
        password:bcrypt.hashSync('5555',10),
        isAdmin:true 
    },    {
        name:"abo el dahab",
        email:"abouElDahab@gmail.com",
        password:bcrypt.hashSync('5555',10),
    },
    {
        name:"ali saied",
        email:"aliSaied@gmail.com",
        password:bcrypt.hashSync('5555',10),
    }
]
export default Users;