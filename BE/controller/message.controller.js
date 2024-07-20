import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res, next) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        // 미들웨어 통해 받을 수 있음.
        const senderId = req.user.id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        // 메시지를 보내야함.
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            // id를 보내주면, id로 메시지랑 ref되있기에 해당 아이디로 메시지 찾을 수 있음.
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([
            conversation.save(),
            newMessage.save()
        ])

        //  socket io functionality

        res.status(201).json(newMessage);
    } catch (error) {
        next(error);
    }
}

export const getMessage = async (req, res, next) => {
    try {
        const {id: userToMessage} = req.params
        const senderId = req.user.id

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToMessage]},
        }).populate("messages")

        if (!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages

        res.status(200).json(messages)
    } catch (error) {
        next(error)
    }
}