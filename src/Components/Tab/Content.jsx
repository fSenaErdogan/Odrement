
import Tab from "./index"

const Content = ({ topic, index, activeTab, children, color = "bg-orange-300", }) => {
    return (
        <div key={index} className={` rounded-xl p-3 ${color}
        ${activeTab !== index && "hidden"}`} >
            {topic.content}
            {topic.subItems && <Tab topics={topic.subItems} defaultTab={0} />}
        </div>
    )
}

export default Content