import mongoose from "mongoose";
const messageSchema =new mongoose.Schema({
    body:{
        type:String,
        required: [true,'Message Body Required']
    },
    image:{
        type:String,
    },
    channelId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
        required: [true,'Channel Id Required']
        
    },
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,'User Id Required']
    },
    workspaceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
        required: [true,'Workspace Id Required']
    },
});
const Message= mongoose.model('Message', messageSchema);
export default Message;