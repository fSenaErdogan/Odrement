import {GiCompass} from "react-icons/gi"

const VButton7 = ({ children }) => {

    return (
        <button className="group bg-emerald-400 focus:bg-emerald-50 border border-transparent focus:border-emerald-500  w-28 h-10 rounded-full text-md overflow-hidden flex items-center justify-center gap-2 ">
            <span className="bg-white group-focus:bg-emerald-500 border rounded-full w-6 h-6 flex items-center justify-center ">
                <GiCompass className="rotate-45 text-emerald-500 group-focus:text-emerald-50 group-hover:-rotate-90 transition-all duration-700" />
            </span>
            <span className=" whitespace-pre text-sm  text-white group-focus:text-emerald-500">
                {children}
            </span>
        </button>
    )
}

export default VButton7