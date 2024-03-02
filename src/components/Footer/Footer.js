import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { IconButton } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";

const Footer = () => {
  const FooterIcon = ({ Icon, iconText, clickFun }) => {
    const obj = {
      Home: true,
      Category: false,
      Profile: false,
    };

    const handleClick = () => {
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
        <IconButton
          style={{
            borderBottom: clickFun.whoIsClick[iconText] && "3px solid red",
          }}
          className="flex flex-col  "
          sx={{
            color: "black",
            "&:hover": {
              color: "red",
            },
          }}
        >
          <Icon />
          <p className="font-bold font-sans text-sm ">{iconText}</p>
        </IconButton>
      </div>
    );
  };

  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false,
  });
  return (
    <footer className="fixed bottom-0  left-0 z-[100] drop-shadow-header-shadow w-full p-5 bg-header-background flex items-center justify-between py-3 px-2 ">
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={HomeOutlinedIcon}
        iconText="Home"
      />
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AppsOutlinedIcon}
        iconText="Category"
      />
      <FooterIcon
        clickFun={{ whoIsClick, setWhoIsClick }}
        Icon={AccountCircleOutlinedIcon}
        iconText="Profile"
      />
    </footer>
  );
};

export default Footer;
