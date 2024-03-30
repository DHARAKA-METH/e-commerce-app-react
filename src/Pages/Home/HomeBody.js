import { Link } from "react-router-dom"
import Products from "./Products"
const newArrew = [

    'https://rb.gy/302mre',
    'https://rb.gy/kejx8a',
    'https://rb.gy/igp38g',
    'https://cdn.shopify.com/s/files/1/0981/8178/files/color-bottom-white-utility-shirt-outfit.jpg?5301657845199332337',
    'https://cdn.shopify.com/s/files/1/0981/8178/files/pattern-on-top-outfit-navy-pindot-shirt.jpg?5781743328389535709',
    'https://www.batchmens.com/cdn/shop/products/Essential-Jersey-Shirt-Burgundy2_540x.jpg?v=1677776558',
    'https://www.batchmens.com/cdn/shop/files/T-ShirtShirtForestGreen2_540x.jpg?v=1699042687',
    'https://www.batchmens.com/cdn/shop/files/AuthorLSMedBlueDenim_540x.jpg?v=1707333825'
]


const HomeBody = () => {
    return (
        <div className="mt-[40px]">
            <div className="flex">
                <div className="w-1/4  ml-10">
                    <Products title={"Trending Products.."} slidesPerView={2} />
                    <Products title={"Trending Products.."} slidesPerView={2} />

                </div>
                <div className="w-3/4">
                    <div className="grid grid-cols-4 grid-rows-[auto] gap-4">
                        {newArrew.map((ele, index) => <Link key={index} to={`category/Category5/${index}`}><ItemUnint key={index} url={ele} /></Link>)}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default HomeBody

const ItemUnint = ({ url, key }) => {
    return (
        <div className="hover:scale-110 cursor-pointer" key={key} style={{ position: 'relative', }} >
            <div style={{ position: 'absolute', left: '0', fontSize: '15px', width: '60px', height: '25px', padding: '2px 4px', backgroundColor: 'red', zIndex: '150', marginLeft: '38px', marginTop: '10px' }}>NEW</div>
            <img className="w-[300px] h-[300px] object-contain" src={url} alt={key} />
        </div>
    )
}

