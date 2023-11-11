import { FaBookmark } from "react-icons/fa6"

const DButton18 = ({ children }) => {

    return (
        <button className="group flex items-center justify-center w-32 h-10 overflow-hidden
                    transition-all duration-300 delay-200 transform
                    bg-zinc-800 text-white/90 rounded-full text-md ">
            <span class="icon w-7 h-7 flex items-center justify-center group-hover:w-28 -translate-x-2 group-hover:translate-x-0
                  from-blue-500 to-purple-500 bg-gradient-to-bl rounded-full 
                    transition-all duration-300 delay-200">
                <FaBookmark size={15} />
            </span>
            <span class="text w-16 group-hover:w-0 group-hover:translate-x-2 text-blue-300 whitespace-pre
                    transition-all duration-300 delay-200">
                {children}
            </span >
        </button>
    )
}

export default DButton18