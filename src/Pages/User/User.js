import { useSelector } from "react-redux";
import logoutUser from "../../Utils/Auth/logoutUser";

const User = () => {
  const userData = useSelector((Store) => Store.UserSlice.user);
 // console.log(userData)
  return (
    <div className="w-full overflow-y-scroll pt-[200px]">
      <div className=" flex flex-col items-center ">
        <div className="w-[200px] h-[200px] rounded-[50%]">
          <img
            src={userData.profileImage}
            alt=""
          />
        </div>
        <h2 className="text-3xl">{userData.name}</h2>
        <p>{userData.address}</p>

        <div className="w-[150px] h-[40px] mt-10 flex justify-center items-center bg-blue-700 hover:bg-black text-white rounded-3xl cursor-pointer">
          <button
            type="submit"
            onClick={() => logoutUser()}
            className="text-white text-2xl font-bold font-mono"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
