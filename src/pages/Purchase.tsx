
const Purchase = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6 bg-gray-50 min-h-screen">
      {/* Left Section: Address Form */}
      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-[60%]">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <span className="text-red-500 mr-2">●</span> Add New Address
        </h2>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input
                type="text"
                className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Apt Number</label>
              <input
                type="text"
                className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Zip</label>
              <input
                type="text"
                className="border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="text-red-500 border border-red-500 rounded-md px-4 py-2 hover:bg-red-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800"
            >
              Save This Address
            </button>
          </div>
        </form>
      </div>

      {/* Right Section: Order Summary */}
      <div className="bg-gray-100 shadow-md rounded-md p-6 w-full md:w-[35%] mt-6 md:mt-0">
        <p className="text-sm mb-4">
          By placing your order, you agree to our company
          <a href="#" className="text-blue-500 underline ml-1">Privacy policy</a> and
          <a href="#" className="text-blue-500 underline ml-1">Conditions of use</a>.
        </p>

        <div className="border-t border-gray-300 py-4">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="text-sm mb-2 flex justify-between">
            <span>Items - Silhouette No. 1 – Vermilion</span>
            <span>7,999</span>
          </div>
          <div className="text-sm mb-2 flex justify-between">
            <span>Shipping and handling:</span>
            <span>200</span>
          </div>
          <div className="text-sm mb-2 flex justify-between">
            <span>Before tax:</span>
            <span>6,599</span>
          </div>
          <div className="text-sm mb-4 flex justify-between">
            <span>Tax Collected:</span>
            <span>1,400</span>
          </div>

          <div className="text-lg font-semibold flex justify-between">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>
        </div>

        <button
          type="button"
          className="bg-black text-white w-full mt-6 py-2 rounded-md hover:bg-gray-800"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Purchase;
