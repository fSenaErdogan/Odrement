import "./style.scss"

const PButton19 = ({ children }) => {

    return (
        <div className="button19">
            <div className="bar " />
            <button className="bg-slate-300 px-5 py-2 rounded-full text-md">
                {children}
            </button>
        </div>

    )
}

export default PButton19