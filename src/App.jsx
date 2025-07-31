import { useState } from 'react'
import './App.css'
// import books from '../books.js'
import Header from './component/Header'
import Tabs from './component/Tabs'
import Main from './component/Main'
import Title from './component/Title'
import SideNav from './component/SideNav'
import CharMain from './component/CharMain'




function App() {
  const [tab, setTab] = useState("Books")
  const [character, setselectedcharacter] = useState("Harry James Potter")
  const [handleside, setHandleside] = useState(false)
  const [pages, setPages] = useState(true)

  const toggleSide = ()=> {
    setHandleside(prev => !prev);
  }

 
 
  return (
    <>
    
     <Header setHandleside = {setHandleside} toggleSide ={toggleSide}/>
     <div className=' lg:w-[80%] m-auto xl:w-[70%]'>
       <div className='flex justify-end my-7'>
          <Tabs
            tab ={tab}
            setTab ={setTab}
            setPages = {setPages}
          />
       </div>
       <Title tab={tab} />
       {pages && <Main/>}

       
      {!pages && <CharMain character = {character} setselectedcharacter = {setselectedcharacter}/>}
       <SideNav character={character} setselectedcharacter ={setselectedcharacter} setTab= {setTab} handleside = {handleside} setHandleside = {setHandleside} toggleSide = {toggleSide} setPages = {setPages} />
       
     </div>
    </>
  )
}

export default App
