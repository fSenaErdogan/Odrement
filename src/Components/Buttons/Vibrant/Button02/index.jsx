import { PiOrangeSlice } from "react-icons/pi"

const VButton2 = ({ children }) => {

    return (
        <button className="group bg-orange-400 w-28 h-10 rounded-full text-md flex items-center justify-center text-white overflow-hidden">
            <span className=" bg-white rounded-full w-2 h-32 -translate-x-3 opacity-0 flex items-center justify-center group-hover:w-6 group-hover:opacity-100  group-hover:h-6  group-hover:translate-x-2
            transition-all duration-500 delay-100">
                <PiOrangeSlice className="rotate-45 text-orange-600  opacity-0 group-hover:opacity-100 " />
            </span>
            <span className="text-center pe-3 whitespace-pre group-hover:text-sm group-hover:ms-auto">
                {children}
            </span>
        </button>

    )
}

export default VButton2