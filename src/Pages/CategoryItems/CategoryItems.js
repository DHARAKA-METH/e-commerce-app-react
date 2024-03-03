import { useSelector } from "react-redux"
// import { CategorySelector } from "../../Store/ReduxSlice/CategorySlice"



const CategoryItems = () => {
  const category =useSelector(store=>store.category)
  console.log(category)
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      CategoryItems
    </div>
  )
}

export default CategoryItems
