import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { IconButton } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";

const Footer = () => {
  const icon = [
    { icon: HomeOutlinedIcon, iconText: "Home" },
    { icon: AppsOutlinedIcon, iconText: "Category" },
    { icon: AccountCircleOutlinedIcon, iconText: "profile" },
  ];

  const FooterIcon = ({ Icon, iconText }) => (
    <IconButton className="flex flex-col  " sx={{ color: "black" }}>
      <Icon />
      <p className="font-bold font-sans text-sm ">{iconText}</p>
    </IconButton>
  );

  const [whoIsClick, setWhoIsClick] = useState({
    home: true,
    category: false,
    profile: false,
  });
  return (
    <footer className="fixed bottom-0  left-0 z-[100] drop-shadow-header-shadow w-full p-5 bg-header-background flex items-center justify-between py-3 px-2 ">
      {icon.map(({ icon, iconText }, index) => (
        <FooterIcon key={index} Icon={icon} iconText={iconText} />
      ))}
    </footer>
  );
};

export default Footer;
