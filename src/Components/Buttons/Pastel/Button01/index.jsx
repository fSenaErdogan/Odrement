import {BsFillPatchCheckFill} from "react-icons/bs"
const PButton1 = ({ children }) => {

    return (
        <button className={`group relative px-5 py-2 rounded-full text-md border-4
                            bg-red-200 border-red-300 
                            hover:bg-red-300 hover:border-red-200 
                            transition-all duration-700 `}>
                                <span className="absolute -top-1 -right-1 text-transparent group-focus:text-red-500 transition-all duration-500">
                               <BsFillPatchCheckFill size={17}/>
                                </span>
            {children}
        </button>
    )
}

export default PButton1