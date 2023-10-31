import "./style.css"

const PButton2 = ({ children }) => {

    return (
        <button className={`button2 relative overflow-hidden transition-all transform 
         px-5 py-2 rounded-full text-md border-2 bg-orange-100 border-orange-200`}>
            {children}
        </button>
    )
}

export default PButton2