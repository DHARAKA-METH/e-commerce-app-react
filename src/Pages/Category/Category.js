import { IconButton } from "@mui/material";

const Category = () => {
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <div
        className="w-full flex flex-col "
        style={{
          boxShadow: "rgba(0,0,0,0.24)0px 3px 8px",
          padding: "20px",
          borderRadius: "25px",
        }}
      >
        <div><h2 className="text-lg font-bold mb-3 ">Main Categories..</h2></div>
        <div  className="w-full grid sm:grid-cols-1 lg:grid-cols-3 grid-rows-[auto] gap-5">
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
        </div>
      </div>
    </div>
  );
};

export default Category;
const CategoryItems = () => (
    <IconButton style={{
      boxShadow: "rgba(0,0,0,0.2)0px 3px 8px",
      padding: "20px",
      borderRadius: "25px",
    }} sx={{color:"black"}}>
  <div className="w-ful p-1  flex flex-col items-center">
    <img 
    className="rounded-lg "
      src="https://www.evetech.co.za/repository/ProductImages/asus-g531gw-core-i7-rtx-2070-gaming-laptop-700px-v9.jpg"
      style={{
        borderRadius:"50%"
      }}
      
      alt="Category Item"
    />
    <h2 className="text-[20px] font-bold">Category Name</h2>
  
  </div>
    </IconButton>
);
