import "./style.scss"

const PButton20 = ({ children }) => {

    return (
        <div className="button20">
            <div className="bar" />
            <button className="bg-stone-400 px-5 py-2 rounded-full text-md">
                {children}
            </button>
        </div>

    )
}

export default PButton20