import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import Footer from "../Footer/Footer";


let clicked = false;

const Header = ({ paymentModelRef }) => {

  //const [isSearch, setIsSearch] = useState(false);

  const logoRef = useRef();
  const searchBoxRef = useRef();
  const searchButtonClickHandle = () => {
    if (clicked) {
      logoRef.current.style = "display:none;";
      searchBoxRef.current.style = "display:inline-block;";
    } else {
      logoRef.current.style = "display:inline-block;";
      searchBoxRef.current.style = "display:none;";
    }
  };

  return (
    <header className="fixed top-0 left-0 z-[100] drop-shadow-header-shadow w-full h-20 p-5  bg-black flex items-center justify-between py-2 px-2">
      {/* header left */}

      <div className="flex items-center ml-8 ">
        <IconButton className="hover:opacity-50" sx={{ color: "red" }}>
          <MenuIcon
            sx={{
              color: "White",
            }}
          />
        </IconButton>
        <h1
          ref={logoRef}
          className="ml-2 text-sm font-bold"
          style={{
            display:
              window.innerWidth < 640
                ? clicked
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
        >
          <span className="font-serif text-white">Dharaka</span>
        </h1>
        <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]  ">
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="Search"
            style={{
              display:
                window.innerWidth < 640
                  ? clicked
                    ? "inline-block"
                    : "none"
                  : "inline-block",
            }}
            className=" sm:inline-block hidden ml-1 outline-none p-2 font-semibold text-sm w-[150px] bg-inherit"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                //   setIsSearch(!isSearch);
                clicked = !clicked;
                searchButtonClickHandle();

              }
            }}
          >
            <SearchIcon className="  text-black ml-0.5 mt-0.5" />
          </IconButton>
        </div>
      </div>

      {/* header right */}

      <div className="flex">

        <div className="">
       <Footer/>
        </div>


        <div>
          <IconButton className="hover:opacity-55 right-6" onClick={() => { paymentModelRef.current.handleOpen() }}>
            <div className="relative">
              <ShoppingCartOutlinedIcon className="text-white " />
              <div className="absolute top-0 right-1 text-[7px] text-black px-[2px] m-0 bg-white rounded-full ">
                12
              </div>
            </div>
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
