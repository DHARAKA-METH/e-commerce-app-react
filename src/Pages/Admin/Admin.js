import React, { useEffect, useRef, useState } from "react";
import addData from "../../Utils/AddData/AddData";
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection";
import Loading from "../../components/Loading/Loading";

const Admin = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    GetDataFromCollection("Category", setCategoryData);
  }, []);
  const [categoryTitle, setcategoryTitle] = useState([]);
  const [categoryTitleError, setCategoryTitleError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adddataError, setAdddataError] = useState([]);
  useEffect(()=>{},[loading,categoryTitleError])
  

  const categoryTitleArr = ["Category5_item1"];
  categoryTitle.map(({ title }) => {
    categoryTitleArr.push(title);
  });

  console.log(categoryTitleArr);
  const numberInputRef = useRef();
  const selectValueRef = useRef();
  const imputImageRef = useRef();
  const imputImage1Ref = useRef();
  const imputImage2Ref = useRef();
  const imputImage3Ref = useRef();
  const imputRatingRef = useRef();
  const imputPriceRef = useRef();

  const handleSelectChange = () => {
    const selectedValue = selectValueRef.current.value;
    GetDataFromCollection(
      `Category/${selectedValue}/${selectedValue}`,
      setcategoryTitle
    );
    return selectedValue;
  };

  const addDataHandleClick = () => {
    const titleName = `${handleSelectChange()}_item${
      numberInputRef.current.value
    }`; //title name
    const path = `Category/${handleSelectChange()}/${handleSelectChange()}`;
    const ImageUrl = imputImageRef.current.value;
    const Image1Url = imputImage1Ref.current.value;
    const Image2Url = imputImage2Ref.current.value;
    const Image3Url = imputImage3Ref.current.value;
    const Rating = imputRatingRef.current.value;
    const Price = imputPriceRef.current.value;

    if (titleValidate()) {
      addData(
        path,
        titleName,
        ImageUrl,
        Image1Url,
        Image2Url,
        Image3Url,
        Rating,
        Price,
        setLoading,
        setAdddataError
      );
    }
  };

  const titleValidate = () => {
    const TitleName = `${handleSelectChange()}_item${
      numberInputRef.current.value
    }`; //title name
    // const TitleName ='Category5_item1' ;

    if (!categoryTitleArr.includes(TitleName)) {
      setCategoryTitleError(false);
      return true;
    } else {
      setCategoryTitleError(true);
      return false;
    }
  };

  // console.log(categoryTitle);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" px-5 py-10 w-full h-screen overflow-y-scroll bg-gray-100">
      <h1 className="text-2xl mb-4">Admin Panel</h1>

      {/* Error Messages */}
      <h1 className="text-red-500">
        {categoryTitleError &&
          "Name already used! Please select another number."}
      </h1>

      {adddataError?.map((ele, index) => (
        <h1 className="text-red-500" key={index}>
          {ele}
        </h1>
      ))}

      {/* Select Dropdown */}
      <div className="mb-4">
        <select
          ref={selectValueRef}
          id="dropdown"
          onChange={handleSelectChange}
          className="border border-gray-400 rounded px-4 py-2 w-full"
        >
          {categoryData.map(({ CategoryTitle, categoryId }, index) => (
            <option key={index} value={categoryId}>
              {CategoryTitle}
            </option>
          ))}
        </select>
      </div>

      {/* Set Item Number */}
      <div className="mb-4">
        <label className="block mb-1">Set Item Number For Title</label>
        <input
          defaultValue={2}
          onChange={() => console.log(titleValidate())}
          ref={numberInputRef}
          className="border border-gray-400 rounded px-4 py-2 w-full"
          type="number"
          min={1}
          
        />
      </div>

      {/* Inputs for Image, Rating, and Price */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">Image Url</label>
          <input
            ref={imputImageRef}
            type="text"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Image 1 Url</label>
          <input
            ref={imputImage1Ref}
            type="text"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Image 2 Url</label>
          <input
            ref={imputImage2Ref}
            type="text"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Image 3 Url</label>
          <input
            ref={imputImage3Ref}
            type="text"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Rating</label>
          <input
            ref={imputRatingRef}
            type="text"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Price</label>
          <input
            ref={imputPriceRef}
            type="text"
            className="border border-gray-400 rounded px-4 py-2 w-full"
          />
        </div>
      </div>

      {/* Add Data Button */}
      <button
        onClick={() => addDataHandleClick()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Data
      </button>

      {/* Optional: Render Category Titles */}
      {/* {categoryTitle.map(({ title }, index) => <p key={index}>{title}</p>)} */}
    </div>

    // <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
    //   <h1>admin</h1>
    //   <h1>
    //     {categoryTitleError && "name alredy userd! select anothor number"}
    //   </h1>

    //   {adddataError?.map((ele, index) => <h1 key={index}>{ele}</h1>)}

    //   <div>
    //     <select
    //       ref={selectValueRef}
    //       id="dropdown"
    //       onChange={handleSelectChange}
    //     >
    //       {categoryData.map(({ CategoryTitle, categoryId }, index) => (
    //         <option key={index} value={categoryId}>
    //           {CategoryTitle}
    //         </option>
    //       ))}
    //     </select>
    //   </div>

    //   <div>
    //     Set Item Number
    //     <input
    //       defaultValue={0}
    //       onChange={() => console.log(titleValidate())}
    //       ref={numberInputRef}
    //       className="border border-black"
    //       type="number"
    //       min={1}
    //     />
    //   </div>

    //   <div>
    //     <div>Image:<input type="text"/></div>
    //     <div>Image 1:<input type="text"/></div>
    //     <div>Image 2:<input type="text"/></div>
    //     <div>Image 3:<input type="text"/></div>
    //     <div>Rating:<input type="text"/></div>
    //     <div>Price:<input type="text"/></div>
    //   </div>

    //   <button onClick={() => addDataHandleClick()}>Add Data</button>

    //   {/* {categoryTitle.map(({title},index)=><p key={index}>{title}</p>)  } */}
    // </div>
  );
};

export default Admin;
