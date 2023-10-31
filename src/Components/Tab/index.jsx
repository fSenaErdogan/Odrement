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
            <div className="tab-container">
                <div className="tab-buttons  flex me-10 ">
                    {
                        topics.map((topic, index) => (
                            <Button topic={topic} index={index} activeTab={activeTab} activeToggle={activeToggle} firstDisabledBtn={firstDisabledBtn} />
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