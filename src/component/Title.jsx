import React from 'react'

export default function Title(props) {
    const {tab} =props
  return (
    <div>
       <div>
            <h1 className='ml-3 text-[1.5rem] font-[700] text-blue-950'>
                {tab === "Books" ? "Books Overview" : "Character Overview"}
            </h1>
       </div>
       <hr className='mx-3' />
    </div>
  )
}
