import React from 'react'
import { useNavigate} from 'react-router-dom';

export default function Tabs(props) {
 const pages = ["Books", "Characters"];
 const {tab,setTab, setPages} = props
 const navigate = useNavigate()
  return (
    <div>
       {
        
    pages.map((item, index)=>{ 
        return (<button key={index} className={`
                    px-5 py-2
                    mr-3 fw-bold
                    text-[0.9rem] 
                    text-black
                    shadow-md
                    rounded-lg
                    cursor-pointer
                    transition duration-300 ease-in-out
                    font-black
                    ${item === tab ? "bg-orange-400  text-white ": "" }
                    `
                    }
                         onClick={()=>{
                        setTab(item);
                        if(item === "Books"){
                           setPages(true)
                        }else{
                           setPages(false)
                        }
                        
                     }}
                    >
                    {item}
                </button>)
  })
       }

      
      
    </div>
  )
}
// ${tab ===setTab ? "bg-orange-400  text-white ": "" }