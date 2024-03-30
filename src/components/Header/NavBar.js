import { useEffect, useState } from "react"
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection"

const NavBar = () => {

    const [categoryData,setCategoryData]=useState([])
    useEffect((()=>{
      GetDataFromCollection('Category',setCategoryData)
    }),[])


  return (
   <div className="w-[300px] h-[500px] bg-gray-200 " style={{
    
borderRadius:'25px',
 position: "absolute",
 marginTop:'25px'
 
   }}>
   <div className="flex flex-col ml-[30px] mt-[30px] p-2 gap-6 ">
   {categoryData.map((ele,index)=><h3 key={index} className="font-mono text-lg hover:font-bold cursor-pointer">{ele.CategoryTitle}</h3>)}
    

   </div>

    </div>
  )
}

export default NavBar
