import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'Email is unique'],
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email'
        ]
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[8,'Password must be at least 8 characters long']
    },
    username:{
        type:String,
        required:[true,'Username is required'],
        unique:[true,'Username is already exists'],
        match:[
            /^[a-zA-Z0-9]+$/,
            'Username must be alphanumeric'
        ]

        // minlength:[4,'Username must be at least 4 characters long'],
        // maxlength:[16,'Username must be less than or equal to 16 characters long']
    },
    avatar:{
        type:String,
       // default:'default.jpg'
    }

},{timestamps:true});
userSchema.pre('save', function saveUser(next){
    const user=this;
    user.avatar=`https://robohash.org/${user.username}`;
    next();
});
const User=mongoose.model("User",userSchema);
export default User;