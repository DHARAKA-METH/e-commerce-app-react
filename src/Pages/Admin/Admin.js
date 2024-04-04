import React, { useEffect, useRef, useState } from "react";
import addData from "../../Utils/AddData/AddData";
import GetDataFromCollection from "../../Utils/DataFetch/GetDataFromCollection";
import Loading from '../../components/Loading/Loading'


const Admin = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    GetDataFromCollection("Category", setCategoryData);
  }, []);
  const [categoryTitle, setcategoryTitle] = useState([]);
  const [categoryTitleError, setCategoryTitleError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adddataError, setAdddataError] = useState([]);

  const categoryTitleArr = ["Category5_item1"];
  categoryTitle.map(({ title }) => {
    categoryTitleArr.push(title);
  });

  console.log(categoryTitleArr);
  const numberInputRef = useRef();

  const selectValueRef = useRef();

  const handleSelectChange = () => {
    const selectedValue = selectValueRef.current.value;
    GetDataFromCollection(
      `Category/${selectedValue}/${selectedValue}`,
      setcategoryTitle
    );
    return selectedValue;
  };

  const addDataHandleClick = () => {
    const titleName = `${handleSelectChange()}_item${numberInputRef.current.value
      }`; //title name
    const path = `Category/${handleSelectChange()}/${handleSelectChange()}`;
    if (titleValidate()) {
      addData(path, titleName, setLoading, setAdddataError);
    }
  };

  const titleValidate = () => {
    const TitleName = `${handleSelectChange()}_item${numberInputRef.current.value
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
  if(loading){
    return <Loading/>
  }
  return (
    <div className="px-5 py-[100px]  w-full h-screen overflow-y-scroll">
      <h1>admin</h1>
      <h1>
        {categoryTitleError && "name alredy userd! select anothor number"}
      </h1>

      {adddataError?.map((ele, index) => <h1 key={index}>{ele}</h1>)}


      <div>
        <select
          ref={selectValueRef}
          id="dropdown"
          onChange={handleSelectChange}
        >
          {categoryData.map(({ CategoryTitle, categoryId }, index) => (
            <option key={index} value={categoryId}>
              {CategoryTitle}
            </option>
          ))}
        </select>
      </div>
      {/* <div>
        <select id="dropdown">
          <option value="">-- set CategoryTitle--</option>
          {categoryTitle.map(({ title }, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div> */}

      <div>
        Set Item Number
        <input
          defaultValue={0}
          onChange={() => console.log(titleValidate())}
          ref={numberInputRef}
          className="border border-black"
          type="number"
          min={1}
        />
      </div>

      <button onClick={() => addDataHandleClick()}>Add Data</button>

      {/* {categoryTitle.map(({title},index)=><p key={index}>{title}</p>)  } */}
    </div>
  );
};

export default Admin;
