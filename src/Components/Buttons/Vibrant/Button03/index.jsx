
const VButton3 = ({ children }) => {

    return (
        <button className=" group relative bg-amber-400 px-5 py-2 rounded-full text-md transition-all delay-100 duration-700">
            {children}
            <span className="bg-green-600 transition-all duration-700 border-black/20 border z-20
            absolute w-3 h-3 bottom-8 right-2 rounded-full group-hover:animate-pulse" />
            <span className="bg-green-100 opacity-0 group-hover:opacity-100 transition-all delay-500 duration-700 z-10
            absolute w-3 h-3 bottom-8 right-2 rounded-full" />
        </button>
    )
}

export default VButton3