import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";

let clicked = false;

const Header = () => {
 
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
    <header className="fixed top-0 left-0 z-[100] drop-shadow-header-shadow w-full p-5 bg-header-background flex items-center justify-between py-2 px-2">
      {/* header left */}

      <div className="flex items-center">
        <IconButton sx={{ color: "red" }}>
          <MenuIcon
            sx={{
              color: "green",
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
          <span className="text-red-900">D</span>haraka
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
            <SearchIcon className="text-gray-400 ml-0.5 mt-0.5" />
          </IconButton>
        </div>
      </div>

      {/* header right */}
      <IconButton>
        <div className="relative">
          <ShoppingCartOutlinedIcon className="text-black" />
          <div className="absolute top-0 right-1 text-[7px] text-white px-[2px] m-0 bg-black rounded-full ">
            12
          </div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;
