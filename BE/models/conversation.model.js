import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [{
        // User Schema와 관계 연결.
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "message",
        default: []
    }]
}, {timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;