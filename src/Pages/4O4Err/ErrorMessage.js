const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="container">
        <div className="text-center">
          <h1 className="text-6xl font-semibold text-gray-800">404</h1>
          <p className="text-xl font-medium text-gray-500">We can't find the page you're looking for.</p>
          <button onClick={() => window.history.back()} className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition ease-in-out duration-150">
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
