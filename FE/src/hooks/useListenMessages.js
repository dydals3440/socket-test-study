import {useSocketContext} from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import {useEffect} from "react";
import notificationSound from '../assets/sounds/kakaoTalkSound.mp3'

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    console.log(messages);

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        })

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
}

export default useListenMessages;