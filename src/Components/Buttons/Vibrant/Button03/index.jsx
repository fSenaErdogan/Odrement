
const VButton3 = ({ children }) => {

    return (
        <button className=" group relative bg-amber-400 px-5 py-2 rounded-full text-md 
                            transition-all delay-100 duration-700">
            {children}
            <span className="absolute z-20 w-3 h-3 bottom-7 right-0 bg-green-600 border-black/20 rounded-full border border-white
                             transition-all duration-700 animate-pulse" />

            <span className="absolute z-10 w-3 h-3 bottom-7 right-0 rounded-full bg-green-50 
                             transition-all delay-500 duration-700 " />
        </button>
    )
}

export default VButton3