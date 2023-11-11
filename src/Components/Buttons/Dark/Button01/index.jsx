
const DButton1 = ({ children }) => {

    return (
        <button className="relative group bg-red-800 text-white/90 px-5 py-2 rounded-full text-md">
            {children}
            <span className="bg-fuchsia-200 absolute w-3 h-3 z-20 bottom-7 right-1 rounded-full border border-red-800 
            transition-all delay-500 duration-700
            group-hover:z-10 group-hover:w-2 group-hover:h-2" />
            <span className=" bg-green-200 absolute w-1 h-1 z-10 bottom-8 right-2 rounded-full border border-red-800 
            transition-all delay-500 duration-700
            group-hover:z-20 group-hover:w-3 group-hover:h-3" />
        </button>
    )
}

export default DButton1