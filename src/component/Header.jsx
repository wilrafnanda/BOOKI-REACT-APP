import React from 'react'

export default function Header(props) {
  const {setHandleside,toggleSide} = props
  return (
    <div>
      <nav className='
        flex
        justify-between
        justify-items-center
        py-4
        px-3
        shadow-xl
        lg:w-[80%] m-auto xl:w-[70%]
     '>
        <img src="Logo.png" alt="Booki log" className='w-30 cursor-pointer' />
        <img src="Menu.svg" alt="Closs btn"  className='w-10 cursor-pointer' onClick={() => toggleSide()}/>
      </nav>
    </div>
  )
}
