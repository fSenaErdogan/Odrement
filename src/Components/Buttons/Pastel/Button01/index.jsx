
const PButton1 = ({ children }) => {

    return (
        <button className={`bg-red-200 border-red-300 hover:bg-red-300 hover:border-red-200
        transition-all duration-700 px-5 py-2 rounded-full text-md border-4`}>
            {children}
        </button>
    )
}

export default PButton1