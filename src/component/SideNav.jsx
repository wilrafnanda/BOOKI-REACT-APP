import React from 'react'
import characterData from '../../characters.js'

export default function SideNav(props) {
  // here im getting each and every name found in the character data arrey of objects
  const namesData = characterData.map(name => name.fullName)
  
  const {character, setselectedcharacter,toggleSide,setHandleside,handleside,setTab, setPages} = props
  return (
   
      <div 
      className=
        { ` fixed
          top-0
          left-0
          bottom-0
          right-[35%]
           bg-black/20
          backdrop-blur-lg
          overflow-auto
          transition-all duration-500
          ${handleside ?'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-full pointer-events-none' }
          
          md:right-[75%]
          
          
          `}
          
      >
        {
          namesData.map((charName, index)=>{
            return <li  key={index} className={`list-none py-3 px-3 hover:bg-amber-500 font-bold border-b-1  text-white ${charName ===character ? "bg-orange-400 ": " "}`} onClick={()=>{setselectedcharacter(charName); setTab('Characters'); toggleSide(); setPages(false) }}> {charName}</li>
          })
        }
        

      </div>
    
  )
}
