import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] drop-shadow-header-shadow w-full p-5 bg-header-background flex items-center justify-between py-5 px-2">
      {/* header left */}

      <div className="flex items-center">
        <IconButton sx={{ color: "red" }}>
          <MenuIcon
            sx={{
              color: "green",
            }}
          />
        </IconButton>
        <h1 className="ml-2 text-sm font-bold">
          <span className="text-red-900">D</span>haraka
        </h1>
        <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]  ">
          <input
            type="text"
            placeholder="Search"
            className=" sm:inline-block hidden ml-1 outline-none p-2 font-semibold text-sm w-[150px] bg-inherit"
          />
          <IconButton>
            <SearchIcon className="text-gray-400 mr-2" />
          </IconButton>
        </div>
      </div>

      {/* header right */}
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </header>
  );
};

export default Header;
