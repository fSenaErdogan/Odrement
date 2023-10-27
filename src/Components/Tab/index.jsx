import { useState } from "react"
import Button from "./Button"
import Content from "./Content"

const Tab = ({ topics, defaultTab = 0 }) => {

    const [activeTab, setActiveTab] = useState(defaultTab)

    const activeToggle = (index) => {
        setActiveTab(index)
    }

    return (
        <>
            <div className="tab-container">
                <div className="tab-buttons">
                {
                    topics.map((topic, index) => (
                        <Button topic={topic} index={index} activeTab={activeTab} activeToggle={activeToggle} />
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