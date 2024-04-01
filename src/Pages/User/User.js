import logoutUser from "../../Utils/Auth/logoutUser";

const User = () => {
  return (
    <div className="w-full overflow-y-scroll pt-[200px]">
      <div className=" flex flex-col items-center ">
        <div className="w-[200px] h-[200px] rounded-[50%]">
          <img
            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1711929600&semt=ais"
            alt=""
          />
        </div>
        <h2 className="text-3xl">Dharaka Meth Deshan</h2>
        <p>Matara SL</p>

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
