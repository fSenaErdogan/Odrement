import "./style.css"


const PButton4 = ({ children }) => {
    return (
        <button className="button4 relative overflow-hidden transition-all transform
bg-yellow-300 px-5 py-2 rounded-full text-md">
            {children}
        </button>
    )
}

export default PButton4