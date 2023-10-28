import "./style.css"

const PButton12 = ({ children }) => {

    return (
        <button className="button12 relative overflow-hidden transform
                bg-indigo-200 px-5 py-2 rounded-full text-md">
                    {children}
                </button>
    )
}

export default PButton12