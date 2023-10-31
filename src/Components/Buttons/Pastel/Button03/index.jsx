
const PButton3 = ({ children }) => {

    return (
        <button className={`translate-x-0 hover:translate-y-1 transition-all duration-700 
        px-5 py-2 rounded-full text-md bg-amber-200 hover:bg-amber-300 `}>
            {children}
        </button>
    )
}

export default PButton3