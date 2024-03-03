const Category = () => {
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <div
        className="w-full grid grid-cols-3 grid-rows-[auto] gap-5"
        style={{
          boxShadow: "rgba(0,0,0,0.24)0px 3px 8px",
          padding: "20px",
          borderRadius: "25px",
        }}
      >
<CategoryItems/>
<CategoryItems/>
<CategoryItems/>
<CategoryItems/>
<CategoryItems/>

      </div>
    </div>
  );
};

export default Category;
const CategoryItems = () => (
  <div className="w-ful p-1  rounded-md  flex flex-col items-center">
    <img
      src="https://i.ebayimg.com/images/g/AC0AAOSwXsZkdMXl/s-l1600.jpg"
      alt="Category Item"
    />
    <h2 className="mt-[-20px] p-1  font-semibold" >Category Name</h2>
  </div>
);
