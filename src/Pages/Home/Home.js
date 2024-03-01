import Ads from './Ads'
import Products from './Products'

const Home = () => {
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <Ads/>
      <Products title={'Trending Products..'}/>
    </div>
  )
}

export default Home
