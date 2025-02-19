import mongoose from "mongoose";
const workSpaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Workspace Name Required'],
        unique: [true,'Workspace Name already exists']

    },
    description: {
        type: String,
        required: [true,'Workspace Description Required']
    },
    members: [{
        memberId :{
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User',
             
        },
        role : {
            type: String,
            enum: ['admin','owner','member'],
            default : 'member',
        }
        }
    ],
    joinCode:{
        type: String,
        required: [true,'Join Code Required']
    },
    channels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
    }],
});

const Workspace = mongoose.model('Workspace', workSpaceSchema);
export default Workspace;