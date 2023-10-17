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
            <div>
                {
                    topics.map((topic, index) => (
                        <Button topic={topic} index={index} activeTab={activeTab} activeToggle={activeToggle} />
                    ))
                }
                {
                    topics.map((topic, index) => (
                        <Content topic={topic} index={index} activeTab={activeTab} />
                    ))
                }
            </div>
        </>
    )
}

export default Tab