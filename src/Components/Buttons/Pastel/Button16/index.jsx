import "./style.css"

const PButton16 = ({ children }) => {

    return (
        <button className="button16 relative overflow-hidden transform
         border-pink-500/50 border-2 bg-pink-200 
        px-5 py-2 rounded-full text-md text-pink-800/70">
            {children}
        </button>
    )
}

export default PButton16