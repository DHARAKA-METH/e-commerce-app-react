import { useEffect, useState } from "react";
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection";
import Loader2 from "../Loading/Loader2/Loader2";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    GetDataFromCollection("Category", setCategoryData);
  }, []);

  return (
    <div
      className="w-[300px] h-[500px] bg-gray-200 sm:ml-[-15px] lg:ml-[-30px]  "
      style={{
        borderRadius: "25px",
        position: "absolute",
        marginTop: "20px",
      }}
    >
      <div className="flex flex-col ml-[20px] mt-[30px] p-2 gap-6 ">
        {categoryData.length === 0 && <Loader2 />}

        {categoryData.map(({ img, CategoryTitle, categoryId }, index) => (
          <UnitItem
            key={index}
            categoryId={categoryId}
            CategoryTitle={CategoryTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;

const UnitItem = ({ categoryId, CategoryTitle }) => {
  return (
    <a href={`/category/${categoryId}`}>
      <h3 className="font-mono text-lg hover:font-bold cursor-pointer">
        {CategoryTitle}
      </h3>
    </a>
  );
};
