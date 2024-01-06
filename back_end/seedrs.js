
import dotenv from 'dotenv'
import connectDB from './config/db.js';

import Order from './models/orderModul.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';

import Users from './data/users.js';
import products from './data/JustProductDB.js';

dotenv.config()
connectDB()
const importData = async () => {
    try{
        await Order.deleteMany()    
        await Product.deleteMany()    
        await User.deleteMany()
        const createdUser = await User.insertMany(Users)
        const adminUser = createdUser[0]._id    
        const sampleProducts = products.map((pro)=>{
            return{...pro,user:adminUser}
        })
        await Product.insertMany(sampleProducts)
        console.log("data imported");
    }catch (error){
        console.error(`The Error happened when importing data to the Database : ${error}`)
    }
}

const destroyData = async () =>{
    try{
        await Order.deleteMany()    
        await Product.deleteMany()    
        await User.deleteMany()
        console.log('database has been cleared'.red);
    }catch(error) {
        console.error(`Error Happened When Deleting Data From The Database : ${error}`);
    }
}
if(process.argv[2]==='-d'){
    destroyData();
}else{
    importData();
}