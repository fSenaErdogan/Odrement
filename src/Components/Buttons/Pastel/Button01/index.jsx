
const PButton1 = ({ children }) => {

    return (
        <button className="hover:border-red-200 hover:bg-red-300 transition-all duration-700
                bg-red-200 px-5 py-2 rounded-full text-md border-4 border-red-300">
            {children}
        </button>
    )
}

export default PButton1