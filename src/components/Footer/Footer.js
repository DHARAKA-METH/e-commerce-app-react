import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { IconButton } from "@mui/material";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Footer = () => {
  return (
    <footer className="fixed bottom-0  left-0 z-[100] drop-shadow-header-shadow w-full p-5 bg-header-background flex items-center justify-between py-3 px-2 ">
      <IconButton
        className="flex flex-col hover:text-[#34a820] "
        sx={{ color: "black" }}
      >
        <HomeOutlinedIcon />
        <p className="font-bold font-sans text-sm ">Home</p>
      </IconButton>
      <IconButton
        className="flex flex-col hover:text-[#34a820]  "
        sx={{ color: "black" }}
      >
        <AppsOutlinedIcon />
        <p className="font-bold font-sans text-sm ">Category</p>
      </IconButton>
      <IconButton
        className="flex flex-col hover:text-[#34a820]  "
        sx={{ color: "black" }}
      >
        <AccountCircleOutlinedIcon />
        <p className="font-bold font-sans text-sm ">Profile</p>
      </IconButton>
    </footer>
  );
};

export default Footer;
