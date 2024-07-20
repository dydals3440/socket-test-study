import {useAuthContext} from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation.js";
import {formatTime} from "../../utils/formatTime.js";

const Message = ({message}) => {
    const {authUser} = useAuthContext();

    const {selectedConversation} = useConversation();

    const messageFromMe = message.senderId === authUser._id;

    const chatClassName = messageFromMe ? "chat-end" : "chat-start"

    const profilePic = messageFromMe
        ? authUser.profilePic
        : selectedConversation?.profilePic;

    const msgBgColor = messageFromMe ? 'bg-green-500' : ''

    const formattedTime = formatTime(message.createdAt);

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img
                        src={profilePic}
                        alt='user-image'/>
                </div>
            </div>
            <div className={`chat-bubble text-white ${msgBgColor}`}>
                {message.message}
            </div>

            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-950'>
                {formattedTime}
            </div>
        </div>
    );
};

export default Message;