import User from "../schema/user.js";
import crudRepositories from "./crudRepository.js";

const UserRepository={
    ...crudRepositories(User),
    getUserByEmail: async (email) => {
        return await User.findOne({email});
    },
    getUserByName: async (username) => {
        return await User.findOne({username});
    }


};
export default UserRepository;  //export the UserRepository object




// function UserRepository(){
//     crudRepositories.call(this, User);
// }
// export default new UserRepository();




// const crudMethods =crudRepositories(User);
// export default crudMethods;
// export const getUserEmail = async (email)=>{
//     try {
//         const user = await User.findOne({ email });
//         return user;
//      } catch(error) {
//          console.log(error);
//      }
// };

// export const getUserByName =async (name)=>{
//     try {
//         const user = await User.findOne({  username:name });
//         return user;
//      } catch(error) {
//          console.log(error);
//      }
// };

// export const createUser =async(user)=>{
//     try {
//         const newUser = await User.create(user);
//         return newUser;
//      } catch(error) {
//          console.log(error);
//      }
// };
// export const getUsers =async()=>{
//     try {
//         const users = await User.find({});
//         return users;
//      } catch(error) {
//          console.log(error);
//      }
// };

// export const getUserById = async(id)=>{
//     try {
//         const user = await User.findById(id);
//         return user;
//      } catch(error) {
//          console.log(error);
//      }
// };
// export const deleteUser =async(id)=>{
//     try {
//         const user = await User.findByIdAndDelete(id);
//         return user;
//      } catch(error) {
//          console.log(error);
//      }
// };
// export const updateUser =async (id,userData)=>{
//     try {
//         const user = await User.findByIdAndUpdate(id, userData, {new: true});
//         return user;
//      } catch(error) {
//          console.log(error);
//     }
     
// };


