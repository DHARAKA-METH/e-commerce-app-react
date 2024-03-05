import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { CategorySelector } from "../../Store/ReduxSlice/CategorySlice"



const CategoryItems = () => {
  const {CategoryId}=useParams();
  const category =useSelector(store=>store.category)
  const [CategoryTitle]=category.filter(ele=>ele.id===CategoryId)
  console.log('Category title',CategoryTitle)
  console.log(category)
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1 className="ml-3 font-bold text-lg mt-2 mb-3 ">
      {CategoryTitle.title}
      </h1>
    </div>
  )
}

export default CategoryItems
