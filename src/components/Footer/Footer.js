import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { IconButton } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const FooterIcon = ({ Icon, iconText, clickFun }) => {
    const obj = {
      Home: true,
      Category: false,
      Profile: false,
    };

    const handleClick = () => {
      if (iconText === "Home") {
        obj.Home = true;
        obj.Category = false;
        obj.Profile = false;
      }
      if (iconText === "Category") {
        obj.Home = false;
        obj.Category = true;
        obj.Profile = false;
      }

      if (iconText === "Profile") {
        obj.Home = false;
        obj.Category = false;
        obj.Profile = true;
      }
      clickFun.setWhoIsClick(obj);
    };

    return (
      <div onClick={handleClick}>
        <Link
          to={iconText === "Home" ? "/" : `/${String(iconText).toLowerCase()}`}
        >
          <IconButton
            // style={{
            //   borderBottom: clickFun.whoIsClick[iconText] && "3px solid red",
            // }}
            className="flex flex-col  "
            sx={{
              color: "white",
              "&:hover": {
                // color: "red",
                opacity: 0.5
                
              },
            }}
          >
            <Icon />
            <p className="font-bold font-sans text-sm text-white ">{iconText}</p>
          </IconButton>
        </Link>
      </div>
    );
  };

  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false,
  });
  return (
    <footer className="fixed bottom-0 md:right-20 lg:right-40 lg:gap-10 p-5 flex items-center justify-between py-3 px-2  ">
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={HomeOutlinedIcon}
        iconText="Home"
      />
      {/* <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AppsOutlinedIcon}
        iconText="Category"
      /> */}
      <div className="md:flex-1 md:text-right lg:flex-1 lg:text-right mr-4">
        <FooterIcon
          clickFun={{ whoIsClick, setWhoIsClick }}
          Icon={AccountCircleOutlinedIcon}
          iconText="Profile"
        />
      </div>
    </footer>
  );
};

export default Footer;
