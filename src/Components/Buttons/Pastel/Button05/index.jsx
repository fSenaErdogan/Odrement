import "./style.css"

const PButton5 = ({ children }) => {

    return (
        <button className="button5 relative overflow-hidden transition-all transform
                bg-lime-200 focus: px-5 py-2 border-2 border-lime-500 rounded-full text-md">
            {children}
        </button>
    )
}

export default PButton5