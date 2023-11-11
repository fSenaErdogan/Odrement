import "./style.css"

const PButton2 = ({ children }) => {

    return (
        <button className={`button2 group relative overflow-hidden transition-all duration-500 delay-100 transform 
                            w-28 h-10 rounded-full text-md border-2 bg-orange-100 border-orange-200 `}>
            <p className="group-focus:font-medium group-focus:text-orange-700/80 group-focus:scale-105">
                {children}
            </p>
        </button>
    )
}

export default PButton2