import { IconButton, Rating, colors } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { CategorySelector } from "../../Store/ReduxSlice/CategorySlice"

const categoryItemArr = [
  {
    imgUrl: "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
    title: "Category Title1",
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
    title: "Category Title2",
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
    title: "Category Title3",
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
    title: "Category Title4",
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/71nscszW68L._AC_SL1001_.jpg",
    title: "Category Title5",
  },
];

const CategoryItems = () => {
  const { CategoryId } = useParams();
  const category = useSelector((store) => store.category);
  const [CategoryTitle] = category.filter((ele) => ele.id === CategoryId);

  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1 className="ml-3 font-bold text-lg mt-2 mb-3 ">
        {CategoryTitle.title}
      </h1>
      <div className="w-full grid grid-cols-2 grid-rows-[auto] gap-3">
        {categoryItemArr.map(({ imgUrl, title }, index) => (
          <CategoryItemArrUnit key={index} imageurl={imgUrl} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

const CategoryItemArrUnit = ({ imageurl, title }) => (
  <IconButton
    sx={{
      color: "gray",
      padding: "5px",
      "&:hover": {
        color: "gray",
      
      },
    }}
  >
    <div style={{ boxShadow: "rgba(0,0,0,0.24)0px 3px 8px", padding: "10px" }}>
      <img src={imageurl} alt={title} className="w-full object-contain" />
      <h3>{title}</h3>
      <h5 className="font-bold">LKR 1000</h5>
      <Rating name="size-small" defaultValue={3} size="small" readOnly />
    </div>
  </IconButton>
);
