import "./style.css"

const PButton10 = ({ children }) => {

    return (
        <button className="button10 group relative overflow-hidden transition-all transform hover:bg-sky-200 focus:bg-sky-200
                 bg-red-200 px-5 h-[45px] rounded-full text-md flex items-center gap-2">
            <span className=" icon flex flex-col w-fit gap-2  group-focus:translate-y-[-33px] ">
                <span>
                    :)
                </span>
                <span>
                    ;)
                </span>
            </span>
            <span>
                {children}
            </span>
        </button>
    )
}

export default PButton10