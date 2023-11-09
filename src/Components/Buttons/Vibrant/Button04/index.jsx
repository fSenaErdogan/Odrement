
const VButton4 = ({ children }) => {

    return (
        <button className="relative group bg-yellow-400 px-5 py-2 rounded-full text-md ">
            {children}
            <span className="bg-red-600 transition-all delay-500 duration-700 z-20 group-hover:z-10
             absolute w-3 h-3 group-hover:w-2 group-hover:h-2 bottom-7 right-1 rounded-full" />
             <span className="bg-blue-600 transition-all delay-500 duration-700 z-10 group-hover:z-20
             absolute w-1 h-1 group-hover:w-3 group-hover:h-3 bottom-8 right-2 rounded-full" />
        </button>
    )
}

export default VButton4