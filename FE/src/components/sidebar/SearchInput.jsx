import {IoSearchSharp} from 'react-icons/io5'
import {useState} from "react";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) {
            return;
        }

        const conversation = conversations.find((conversation) =>
            conversation.username.toLowerCase().includes(search.toLowerCase())
        )

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('')
        } else {
            toast.error("입력하신 이름의 유저는 존재하지 않습니다.")
        }

    }

    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='유저를 검색해주세요!'
                className='input input-bordered rounded-full'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none'/>
            </button>
        </form>
    );
};

export default SearchInput;