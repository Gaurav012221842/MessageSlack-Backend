import mongoose from "mongoose";
const channelSchema =new  mongoose.Schema({
    name: {
        type: String,
        required: [true,'Channel Name Required']
    },
   
},{timestamps:true});
const channel= mongoose.model('Channel', channelSchema);
export default channel;