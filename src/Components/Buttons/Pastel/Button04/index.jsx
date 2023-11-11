import "./style.css"

const PButton4 = ({ children }) => {


    return (
        <button className={`button4 relative overflow-hidden transition-all duration-500 transform 
        px-5 py-2 rounded-full text-md bg-yellow-300 focus:scale-105`}>
            {children}
        </button>
    )
}

export default PButton4