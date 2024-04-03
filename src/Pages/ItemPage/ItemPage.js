import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getDataFromDocument from "../../Utils/DataFetch/getDataFromDocument";
import Loader2 from "../../components/Loading/Loader2/Loader2";
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/ReduxSlice/ShoppingCart";
const ItemPage = () => {
  const QtyInputRef=useRef()
  const dispath=useDispatch()

  const addtocartdHandleClick=()=>{
  
    dispath(addItem({
      imgLink: data.img3,
      Qty:Number(QtyInputRef.current.value),
       

    }))

  }

  const MainImageRef = useRef()
  const subImageRef = useRef([])
  const currentLocation = useParams()
  const [data, setData] = useState([])
  const imgArr = []
  imgArr.push(data.img, data.img1, data.img2, data.img3)
  useEffect(() => {
    //getDataFromDocument('Category/Category1/Category1','Category1_item1',setData)
    getDataFromDocument(`Category/${currentLocation.CategoryId}/${currentLocation.CategoryId}`, currentLocation.itemId, setData)
  }, [])

  const imageHandleClick = (src, index) => {
    MainImageRef.current.src = src
    subImageRef.current[index].style.border = '2px solid gold'

    for (let i = 0; i < imgArr.length; i++) {
      if (i !== index) {
        subImageRef.current[i].style.border = 'none'
      }
    }

  }
  if (data.length === 0) {
    return <Loader2 />
  }

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full mt-[100px] flex h-screen overflow-y-scroll">
        <div className="flex flex-col  ml-[200px] ">
          <div className="w-[500px] h-[500px] object-contain rounded-xl cursor-pointer overflow-hidden">
            <img ref={MainImageRef} className="transition-transform hover:scale-150" src={data.img3} alt="" />
          </div>

          <div className="flex mt-8 ml-[-50px]  ">
            {imgArr?.map((ele, index) => <div key={index} onClick={() => imageHandleClick(ele, index)} className="cursor-pointer ml-2 p-4 w-[125px] h-[125px] overflow-hidden"><img ref={(currRef) => { subImageRef.current[index] = currRef }} src={ele} alt="" /></div>)}

          </div>

        </div>
        <div className="ml-[100px]">
          <div >
            <h2 className=" " style={{
              fontSize: '40px ',
              fontFamily: 'inherit'
            }}>{data.description}</h2>
          </div>
          <div className="mt-5">
            <h2> <span className="font-semibold" style={{ fontSize: '25px', }}>LKR</span> <span className="font-bold" style={{ fontSize: '40px' }}>{Number(data.price)}.00</span></h2>
          </div>
          <div className="mt-5 flex flex-row">
            <div>
              <h4 className="mt-10 text-xl font-semibold">Size:</h4>
            </div>
            <div style={{ marginLeft: '40px' }}>
              <select style={{ width: '500px', height: '50px', padding: '10px 20px', marginTop: '30px', fontSize: '15px', fontWeight: 'bold', backgroundColor: 'whitesmoke', borderRadius: '10px' }}
                name="size" id="size">
                <option value="SMALL">SMALL</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LARGE">LARGE</option>
                <option value="XLARGE">X-LARGE</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex flex-row">
            <div>
              <h4 className="mt-10 text-xl font-semibold">Qty:</h4>
            </div>
            <div style={{ marginLeft: '40px' }}>
              <input ref={QtyInputRef} type="number" defaultValue={1} style={{ width: '100px', height: '50px', padding: '10px 20px', marginTop: '30px', fontSize: '15px', fontWeight: 'bold', backgroundColor: 'whitesmoke', borderRadius: '10px' }}
                name="qty" id="size"/>
            </div>
          </div>

          <div className="w-[300px] h-[60px] mt-10 flex justify-center items-center bg-blue-700 hover:bg-black text-white rounded-3xl cursor-pointer">
            <button onClick={()=>addtocartdHandleClick()} className="text-white text-2xl font-bold font-mono" >Add to Cart</button>
          </div>

        </div>
      </div>
    </div>

  );

};

export default ItemPage;



