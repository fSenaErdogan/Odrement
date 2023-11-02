import "./style.scss"

const PButton18 = ({ children }) => {

    return (
        <div className="button18">
            <div className="bar" />
            <button className=" 
        bg-zinc-300 px-5 py-2 rounded-full text-md">
                {children}
            </button>
        </div>
    )
}

export default PButton18