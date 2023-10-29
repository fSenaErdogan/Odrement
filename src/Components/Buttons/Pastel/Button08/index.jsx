import "./style.css"

const PButton8 = ({ children }) => {

    return (
        <button className="button8 relative overflow-hidden border border-teal-500/50
                transition-all duration-500 hover:drop-shadow-xl
                bg-teal-300 px-5 py-2 rounded-full text-md">
            {children}
        </button>
    )
}

export default PButton8