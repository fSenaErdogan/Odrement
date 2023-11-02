

const Button = ({ topic, index, activeToggle, activeTab, firstDisabledBtn, count }) => {
    return (
        <>
        {/* masaustu */}
        <button key={index} onClick={() => topic.disabled !== false && activeToggle(index)}
            className={`menubutton hidden md:block pt-2 pb-1 px-4 rounded-t-3xl transition-all duration-500 min-w-fit
            
            ${topic.disabled === false ?
                    "bg-gray-300 text-black/50 lg:flex -me-5 border-x-black/10 border-x"
                    :
                    activeTab === index ?
                        " bg-orange-300 "
                        :
                        " bg-orange-200/90"
                } 
            
                ${index === 0 ? " ms-6" : index === count ? "me-1 ms-3" : "ms-3"}
            ${firstDisabledBtn === index && "ms-auto "}
            `}>
            {topic.name}
        </button>



        {/* mobil */}
        <button key={index} onClick={() => topic.disabled !== false && activeToggle(index)}
            className={`menubutton block md:hidden p-1 px-4 rounded-3xl transition-all duration-500 min-w-fit
            
            ${topic.disabled === false ?
                    "bg-gray-300 text-black/50 border-x-black/10 border-x"
                    :
                    activeTab === index ?
                        " bg-orange-300 "
                        :
                        " bg-orange-200/90"
                } 
            
            ${index === 0 ? " ms-6" : index === count ? "me-6 ms-3" : "ms-3"}
            `}>
            {topic.name}
        </button>
        
        </>
    )
}

export default Button