import Ads from './Ads'
import Products from './Products'

const Home = () => {
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <Ads/>
      <Products title={'Trending Products..'} slidesPerView={2}/>
      <Products title={'Computer, Office & Education..'} slidesPerView={3}/>
      <Products title={'Home & Garden..'} slidesPerView={4}/>

    </div>
  )
}

export default Home
