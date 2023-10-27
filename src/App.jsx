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
      disabled: true
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
      disabled: false
    },
    {
      id: "5",
      name: "Cards",
      content: "Buraya Kartlar Gelecek",
      disabled: false
    },
    {
      id: "6",
      name: "Accordion",
      content: "Buraya Akordeonlar Gelecek",
      disabled: false
    },
    {
      id: "7",
      name: "Navigation Bar ",
      content: "Buraya Navigasyon Çubukları Gelecek",
      disabled: false
    },
    {
      id: "8",
      name: "Pagination",
      content: "Buraya Sayfalandırma Gelecek",
      disabled: false
    },
    {
      id: "9",
      name: "Popup",
      content: "Buraya Popup lar Gelecek",
      disabled: false
    },
    {
      id: "10",
      name: "Star Rating",
      content: "Buraya Star Ratingler Gelecek",
      disabled: false
    },
    {
      id: "11",
      name: "Link Button",
      content: "Buraya Sosyal medya paylaşım düğmeleri Gelecek",
      disabled: false
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
