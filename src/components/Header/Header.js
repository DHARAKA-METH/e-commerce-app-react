import menuimg from "../../img/menu-svgrepo-com.svg";
import searchimg from "../../img/search-svgrepo-com.svg";
import cartimg from "../../img/full-shoping-cart-svgrepo-com.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] drop-shadow-header-shadow w-full p-5 bg-header-background flex items-center justify-between">
      {/* header left */}

      <div className="flex items-center">
        <img
          src={menuimg}
          alt="menu"
          className="w-6 h-6 object-contain cursor-pointer"
        />
        <h2 className="ml-2 text-sm font-bold">
          <span className="text-red-900">D</span>MD
        </h2>
        <div className="overflow-hidden ml-8 flex items-center rounded-full bg-[#fdf3f3]  ">
          <input type="text" placeholder="Search" className="ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit" />
          <img
            src={searchimg}
            alt="cart"
            className="mr-2 w-6 h-6 object-contain cursor-pointer"
          />
        </div>
      </div>

      {/* header right */}
      <img
        src={cartimg}
        alt="search"
        className="w-6 h-6 object-contain cursor-pointer"
      />
    </header>
  );
};

export default Header;
