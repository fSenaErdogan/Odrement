import "./style.scss"

const PButton18 = ({ children }) => {

    return (
        <div className="button18">
            <div className="bar" />
            <button className="text-red-600 hover:text-green-600 border-2 border-red-500 hover:border-green-500 transition-all duration-700 bg-zinc-300 px-5 py-2 rounded-full text-md">
                {children}
            </button>
        </div>
    )
}

export default PButton18