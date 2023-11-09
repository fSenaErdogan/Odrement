
const VButton5 = ({ children }) => {

    return (
        <button className="relative group bg-lime-400 px-5 py-2 rounded-full text-md">
            {children}
            <span className="bg-transparent group-hover:bg-stone-600 transition-all delay-500 duration-700
             absolute w-2 h-2 bottom-8 right-3 rounded-full group-hover:animate-bounce" />
             
        </button>

    )
}

export default VButton5