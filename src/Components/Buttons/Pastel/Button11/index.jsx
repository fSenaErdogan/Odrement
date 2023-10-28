import "./style.css"

const PButton11 = ({ children }) => {

    return (
        <button className="button11 relative overflow-hidden transition-all transform
                 bg-blue-200 px-5 py-2 rounded-full text-md">
            {children}
        </button>
    )
}

export default PButton11