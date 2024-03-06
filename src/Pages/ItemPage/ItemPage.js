import { useRef } from "react"

const itemImageArr=[
  'https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg',
  'https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg',
  'https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg',
  'https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg',
]

const ItemPage = () => {
  const mainImageRef=useRef()
  const subImageRef=useRef([])
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1 className="text-lg font-bold px-3 mb-7">Item Title</h1>
      <img src="" alt="" />
    </div>
  )
}

export default ItemPage
