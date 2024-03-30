import Products from "./Products"
const newArrew = [
    'https://rb.gy/kejx8a',
    'https://rb.gy/kejx8a',
    'https://rb.gy/kejx8a',
    'https://rb.gy/kejx8a',
    'https://rb.gy/kejx8a',
    'https://rb.gy/kejx8a',
]


const HomeBody = () => {
    return (
        <div className="mt-[40px]">
            <div className="flex">
                <div className="w-1/4 ml-10">
                    <Products title={"Trending Products.."} slidesPerView={2} />
                    <Products title={"Trending Products.."} slidesPerView={2} />

                </div>
                <div className="w-3/4">
                    <div className="grid grid-cols-4 grid-rows-[auto] gap-4">
                       {newArrew.map((ele,index)=><ItemUnint key={index} url={ele}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default HomeBody

const ItemUnint=({url,key})=>{
return(
    <div key={key} style={{position:'relative'}}>
    <div style={{position:'absolute', width:'50px', height:'30px',padding:'2px 4px', backgroundColor:'red', zIndex:'150', marginLeft:'38px'}}>NEW</div>
    <img className="w-[300px] h-[300px] object-contain" src={url} alt={key} />
    </div>
)
}

