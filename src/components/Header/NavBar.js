import { useEffect, useState } from "react"
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection"
import Loader2 from "../Loading/Loader2/Loader2"


const NavBar = () => {

    const [categoryData, setCategoryData] = useState([])
    useEffect((() => {
        GetDataFromCollection('Category', setCategoryData)
    }), [])

    return (
        <div className="w-[300px] h-[500px] bg-gray-200 sm:ml-[-15px] lg:ml-[-30px] " style={{

            borderRadius: '25px',
            position: "absolute",
            marginTop: '25px'


        }}>
            <div className="flex flex-col ml-[20px] mt-[30px] p-2 gap-6 ">


                {categoryData.length === 0 && <Loader2 />}

                {categoryData.map(({ img, CategoryTitle, categoryId }, index) => <a key={index} href={`/category/${categoryId}`}><h3 className="font-mono text-lg hover:font-bold cursor-pointer">{CategoryTitle}</h3></a>)}


            </div>

        </div>
    )
}

export default NavBar
