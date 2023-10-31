
import Tab from "./index"

const Content = ({ topic, index, activeTab, children, color = "orange-500", opacity = "50" }) => {
    return (
        <div key={index} className={` rounded-xl p-3 bg-${color}/${opacity}
        ${activeTab !== index && "hidden"}`} >
            {topic.content}
            {topic.subItems && <Tab topics={topic.subItems} defaultTab={0} />}
        </div>
    )
}

export default Content