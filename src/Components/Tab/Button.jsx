

const Button = ({ topic, index, activeToggle, activeTab, firstDisabledBtn }) => {
    return (
        <button key={index} onClick={() => topic.disabled !== false && activeToggle(index)}
            className={`pt-2 pb-1 px-4 rounded-t-3xl transition-all duration-500
            ${topic.disabled === false ? "bg-gray-300 text-black/40 -me-5 border-x-black/10 border" : activeTab === index ? " bg-orange-500/50 " : " bg-orange-500/30"} 
            ${index === 0 ? " ms-6" : "ms-3"}
            ${firstDisabledBtn === index && " ms-auto"}
            `}>
            {topic.name}
        </button>
    )
}

export default Button