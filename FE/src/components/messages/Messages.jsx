import Message from "./Message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import {useEffect, useRef} from 'react'
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
    const {messages, loading} = useGetMessages();

    useListenMessages();

    // 이걸 함으로서, 채팅 칠 떄, 계속 스크롤 아래로 유지 가능.
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({
                behavior: "smooth",
            })
        })
    }, [messages]);
    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length === 0 && (
                <p className='text-center'>
                    메세지를 전송하여, 채팅을 시작하세요!
                </p>
            )}
            {!loading && messages.length > 0 && messages.map((message, index) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message}/>
                </div>
            ))}

        </div>
    );
};

export default Messages;