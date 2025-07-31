import React from 'react'
import characterData from '../../characters'
import RandomCard from './RandomCard';

export default function CharMain(props) {
    const {character, setselectedcharacter} = props
    const matchedCharacter = characterData.find(
  (char) => char.fullName === character
);


const {image,more,info,fullName,interpretedBy,birthdate} = matchedCharacter


  return (
    <div className='
            mt-12
            w-[90%]
            m-auto
            mb-6
        '>
        <div  className='md:flex md:gap-7'>
            <div className='mb-6 md:w-[40%] md:mb-0'>
                <img src={image} alt={fullName} className='w-[100%] block max-w-[450px] sm:m-auto md:m-0 md:w-[100%]'  />
            </div>
            <div className='md:w-[60%] border-amber-700'>
                <h1 className='text-blue-950 font-bold text-[2.2rem] mb-2 md:text-[2.6rem] '>
                    {fullName}
                </h1>
                <h2 className='text-orange-500 font-bold text-lg mb-3'>Actor Name : <span className='text-blue-950'>{interpretedBy}</span></h2>
                <p className='text-blue-950 font-semibold text-[1.3rem] mb-1'>Character Highlights:</p>
                <p className=' text-gray-500  md:mb-auto  md:text-[0.85rem] lg:text-[0.94rem] xl:text-[1.3rem] custom ' >{info}</p>
                <small className='block mb-4 text-red-700 text-[1.1rem] mt-3 xl:text-2xl'>birthdate: <span>{birthdate}</span></small>
                <a href={more} className='text-blue-700 underline xl:text-xl'>Show more -</a>
            </div>
            
        </div>
        <RandomCard setselectedcharacter = {setselectedcharacter}/>
    </div>
  )
}
