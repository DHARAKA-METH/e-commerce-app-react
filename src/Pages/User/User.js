import logoutUser from "../../Utils/Auth/logoutUser";

const User = () => {
  return (
    <div className="pt-[200px]">
      User
      <button
        onClick={() => logoutUser()}
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 mt-2 rounded w-full"
        type="submit"
      >
        Log Out
      </button>
    </div>
  );
};

export default User;
