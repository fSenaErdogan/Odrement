import "./styles.scss"

const VButton8 = ({ children }) => {
    return (
        <button className="button8 group relative w-28 h-10 z-20 text-md flex items-center justify-center rounded-lg">
            <span className="text w-full h-full z-30 border border-teal-600 rounded-lg text-teal-700 flex items-center justify-center">
                {children}
            </span>
            <span className="background absolute w-full h-full z-10 rounded-md bg-gradient-to-tr from-teal-400 to-teal-600
            transition-all duration-300 delay-75" />
        </button>
    )
}

export default VButton8