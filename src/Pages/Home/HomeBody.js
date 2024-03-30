import { Link } from "react-router-dom"
import Products from "./Products"
import { useEffect, useState } from "react"
import GetDataFromSubCollection from "../../Utils/DataFetch/GetDataFromSubCollection"
import Loader2 from "../../components/Loading/Loader2/Loader2"



const HomeBody = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        GetDataFromSubCollection('Category', 'Category5', 'Category5', setData)
    }, [])
    //console.log('data...', data)

    return (
        <div className="mt-[40px]">
            <div className="flex">
                <div className="w-1/4  ml-10">
                    <Products title={"Trending Products.."} slidesPerView={2} />
                    <Products title={"Trending Products.."} slidesPerView={2} />

                </div>
                <div className="w-3/4">
                    <div className="grid grid-cols-4 grid-rows-[auto] gap-4">
                        {data.length === 0 && <Loader2 />}
                        {data.map(({ categoryId, img }, index) => <Link key={index} to={`category/Category5/${categoryId}`}><ItemUnint key={index} url={img} /></Link>)}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default HomeBody

const ItemUnint = ({ url, index }) => {
    return (
        <div className="hover:scale-110 cursor-pointer" key={index} style={{ position: 'relative', }} >
            <div style={{ position: 'absolute', left: '0', fontSize: '15px', width: '60px', height: '25px', padding: '2px 4px', backgroundColor: 'red', zIndex: '150', marginLeft: '38px', marginTop: '10px' }}>NEW</div>
            <img className="w-[300px] h-[300px] object-contain" src={url} alt={index} />
        </div>
    )
}

