import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversations.js";
import useConversation from "../../zustand/useConversation.js";

const Conversations = () => {


    const {loading, conversations} = useGetConversations()
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => {
                return <Conversation
                    conversation={conversation}
                    key={conversation._id}
                    lastIndex={idx === conversations.length - 1}
                />;
            })}
            {loading ? (
                <span className='loading loading-spinner'></span>
            ) : null
            }
        </div>
    );
};

export default Conversations;