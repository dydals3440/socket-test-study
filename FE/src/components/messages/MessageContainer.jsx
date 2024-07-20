import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import useConversation from "../../zustand/useConversation.js";
import {useEffect} from "react";
import {TiMessages} from 'react-icons/ti'

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    console.log(selectedConversation);

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? (
                <NoChatSelected/>
            ) : (<>
                {/* Header */}
                <div className='bg-slate-500 px-4 py-2 mb-2'>
                    <span className='label-text'>To: </span>
                    <span className='text-gray-900 font-bold'>
                        {selectedConversation?.username}
                    </span>
                </div>
                <Messages/>
                <MessageInput/>

            </>)}

        </div>
    );
};

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div
                className="px-4 text-center sm:text-lg ms:text-xl text-slate-800 font-semibold flex flex-col items-center gap-2">
                <p>반갑습니다.</p>

                <p>채팅을 할려면, 유저를 클릭해주세요!</p>

                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}

export default MessageContainer;