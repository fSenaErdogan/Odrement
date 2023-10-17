import { useState } from "react"
import AppContainer from "./Components/AppContainer"
import Tab from "./Components/Tab"
import Buttons from "./Components/Buttons"

function App() {

  const [topics, setTopics] = useState([
    {
      id: "1",
      name: "Buttons",
      content: <Buttons />,
      disabled: true
    },
    {
      id: "2",
      name: "Input Fields",
      content: "Buraya Input Alanları Gelecek",
      disabled: false
    },
    {
      id: "3",
      name: "Form Elements",
      subItems: [
        {
          id: "1",
          name: "Buttonlar"
        },
        {
          id: "2",
          name: "Etiket (Label)"
        },{
          id: "3",
          name: "Onay kutusu"
        },
        {
          id: "4",
          name: "Gönder düğmesi"
        }
      ],
      content: "Buraya Form Elemanları Gelecek",
      disabled: true
    },
    {
      id: "4",
      name: "Notifications",
      content: "Buraya Bildirimler Gelecek",
      disabled: true
    }
  ])

  return (
    <>
      <AppContainer className="">
        <Tab topics={topics} defaultTab={0} />
      </AppContainer>
    </>
  )
}


export default App
