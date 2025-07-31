import React from 'react'
import characterData from '../../characters'

export default function RandomCard(props) {
        const randomNumbers = Array.from({ length: 11 }, () => Math.floor(Math.random() * 24));
        const uniqueNumbers = [...new Set(randomNumbers)];

       const {setselectedcharacter} = props
     

  return (
    <div className='py-5 flex flex-wrap gap-2'>
    {uniqueNumbers.map((idx, i) => {
      return (
        <button
          key={idx}
          className='p-3 shadow-md/30 mr-3 font-sans font-bold text-gray-800 text-[0.8rem] md:text-[0.95rem]'
          onClick={e => {
            setselectedcharacter(e.target.innerText);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}   
        >
          {characterData[idx].fullName}
        </button>
      );
    })}
  </div>
  )
}
// className='p-2 shadow-md/30 mr-3'; className='py-3'