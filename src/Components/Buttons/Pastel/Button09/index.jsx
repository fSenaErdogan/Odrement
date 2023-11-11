
const PButton9 = ({ children }) => {

    return (
        <button className="px-5 py-2 transition-all duration-500 delay-300 hover:-translate-y-1 hover:shadow-md rounded-full text-md
        hover:bg-cyan-500/50 bg-cyan-200 bg-gradient-to-r focus:from-green-600/30 focus:via-transparent focus:to-green-600/30">
            {children}
        </button>
    )
}

export default PButton9