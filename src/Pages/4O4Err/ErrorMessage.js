import { useLocation } from "react-router-dom";

const ErrorMessage = () => {
  const { pathname } = useLocation(); //destructerd useLoaction function
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            404. That’s an error.
          </h3>
          <p className="text-xl font-medium text-gray-500">
            The requested URL <span className="font-bold">{pathname}</span> was
            not found on this server. That’s all we know.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition ease-in-out duration-150"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
