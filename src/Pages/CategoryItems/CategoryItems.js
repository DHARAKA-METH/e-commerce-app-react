import { ListItemButton, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import GetDataFromSubCollection from "../../Utils/DataFetch/GetDataFromSubCollection";
import Loading from "../../components/Loading/Loading";
// import { CategorySelector } from "../../Store/ReduxSlice/CategorySlice"

const CategoryItems = () => {
  const { CategoryId } = useParams();
  const category = useSelector((store) => store.category);
  const [CategoryTitle] = category.filter((ele) => ele.id === CategoryId);
  const [categoryItemsData, setCategoryItemsData] = useState([]);
  const[Function2,setFunction2]=useState([])
  useEffect(() => {
    GetDataFromSubCollection(
      "Category",
      CategoryId,
      CategoryId,
      setCategoryItemsData,
      setFunction2
    );
  }, []);
  if (categoryItemsData.length === 0) {
    return <Loading />;
  }
  console.log("categoryItemsData..........", categoryItemsData);
  console.log("setFunction2Data..........", Function2);

  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll lg:p-24">
      <h1 className="ml-3 font-bold text-lg mt-2 mb-3 ">
        {CategoryTitle.title}
      </h1>
      <div className="w-full grid grid-rows-[auto] gap-6 p-8 sm:grid sm:grid-cols-1 md:grid md:grid-cols-3 md:p-12 lg:grid lg:grid-cols-5 ">
        {categoryItemsData.map(({ img, title, rating }, index) => (
          <CategoryItemArrUnit
            key={index}
            imageurl={img}
            title={title}
            rating={rating}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

const CategoryItemArrUnit = ({ imageurl, title, rating }) => (
  <Link to={':itemId'}>
  <ListItemButton>
    <div style={{ boxShadow: "rgba(0,0,0,0.24)0px 3px 8px", padding: "10px" }}>
      <img src={imageurl} alt={title} className="w-full object-contain" />
      <h3>{title}</h3>
      <h5 className="font-bold">LKR 1000</h5>
      <Rating name="size-small" defaultValue={rating} size="small" readOnly />
    </div>
  </ListItemButton>
  </Link>
);
