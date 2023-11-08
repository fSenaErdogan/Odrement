import { FiAlertTriangle } from "react-icons/fi"

const VButton1 = ({ children }) => {

    return (
        <>
            <button className="button1 group flex justify-center items-center transition-all duration-500 delay-500 transform
             hover:bg-red-700 bg-red-400 w-28 h-10 rounded-lg text-md text-white">
                <span className="text text-center p-1 group-hover:text-transparent 
                    transition-all duration-500 delay-500 ">
                    {children}
                </span>
                <span className="icon p-1 border-l group-hover:border-l-0 group-hover:-translate-x-9
                    transition-all duration-500 delay-500">
                    <FiAlertTriangle />
                </span>
            </button>
        </>

    )
}

export default VButton1