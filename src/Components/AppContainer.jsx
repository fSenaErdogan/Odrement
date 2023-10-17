


const AppContainer = ({ children, className }) => {
    return (
        <div className={`mx-auto p-3 my-4 w-[95%] ${className}`}>
            {children}
        </div>
    )
}

export default AppContainer