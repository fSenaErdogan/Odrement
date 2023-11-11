import "./style.scss"

const VButton4 = ({ children }) => {
    return (
        <button className="button4 relative bg-yellow-400 px-5 py-2 rounded-full text-md ">
            {children}
            <span className="red-span " />
            <span className="blue-span " />
        </button>
    )
}

export default VButton4