import Products from "./Products"

const HomeBody = () => {
  return (
    <div className="mt-[40px]">
      <div className="flex">
        <div className="w-3/4">fsdfsfsfsfs</div>
        <div className="w-1/4">
        <Products title={"Trending Products.."} slidesPerView={2} />
        </div>
      </div>
    </div>
  )
}

export default HomeBody
