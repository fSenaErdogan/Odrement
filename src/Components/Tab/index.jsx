import { useState } from "react"
import Button from "./Button"
import Content from "./Content"

const Tab = ({ topics, defaultTab = 0 }) => {

    const [activeTab, setActiveTab] = useState(defaultTab)

    const activeToggle = (index) => {
        setActiveTab(index)
    }

    const firstDisabledBtn = topics.findIndex(topic => topic.disabled === false);
    
    return (
        <>
            <div className="tab-container overflow-y-auto overflow-hidden">
                <div className="tab-buttons overflow-auto md:overflow-hidden no-scrollbar flex mb-3 md:mb-0 md:me-9 ">
                    {
                        topics.map((topic, index) => (
                            <Button topic={topic} count={topics.length-1} index={index} activeTab={activeTab} activeToggle={activeToggle} firstDisabledBtn={firstDisabledBtn} />
                        ))
                    }
                </div>
                <div className="tab-contents">
                    {
                        topics.map((topic, index) => (
                            <Content topic={topic} index={index} activeTab={activeTab} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Tab