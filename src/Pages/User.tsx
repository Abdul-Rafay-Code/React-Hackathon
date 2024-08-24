import { useContext } from "react";
import Layout from "../components/Layout";
import myContext from "../context/MyContext";
import Loader from "../components/Loader";

const products = [
  {
    id: 1,
    name: "Luxury Room",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wRy1Rthk95m8ib-GL6wJLoVmo-KqvP-WGLrvQNp3j3yMqq0NZ-CACBwHhXmiaUlQmiY&usqp=CAU",
    href: "#",
    price: "₹61,999",
    color: "2 Floor",
    imageAlt: "Luxury Room ",
    quantity: 1,
  },
];

const UserDashboard = () => {
  const { loading, setLoading, state } = useContext(myContext);

  return (
    <Layout>
      <div className=" container mx-auto px-4 py-5 lg:py-8 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700  ">
        {/* Top  */}
        <div className="top ">
          {/* main  */}
          <div className=" bg-slate-600 py-5 rounded-xl border border-slate-900">
            {/* image  */}
            {loading ? (
              <div className="flex justify-center items-center mb-10">
                <Loader />
              </div>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    src={state?.profilepicture}
                    alt=""
                    className="w-24 h-24 rounded-full"
                  />
                </div>
              </>
            )}

            {/* text  */}
            <div className="">
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Name :</span> {state?.username}
              </h1>
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Role :</span> {state?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* bottom  */}
        <div className="bottom">
          {/* main 1 */}
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            {/* text  */}
            <h2 className=" text-2xl lg:text-3xl text-white font-bold">
              Order Details
            </h2>

            {/* main 2 */}
            <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-slate-500 md:flex-row">
              {/* main 3  */}
              <div className="w-full border-r border-slate-900 bg-slate-600 md:max-w-xs">
                {/* left  */}
                <div className="p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-black">
                        Order Id
                      </div>
                      <div className="text-sm font-medium text-white">
                        #74557994327
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold">Date</div>
                      <div className="text-sm font-medium text-white">
                        4 March, 2023
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold">Total Amount</div>
                      <div className="text-sm font-medium text-white">
                        ₹84,499
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold">Order Status</div>
                      <div className="text-sm font-medium text-green-200">
                        Confirmed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right  */}
              <div className="flex-1 bg-slate-600  border rounded overflow-h border-slate-500">
                <div className="p-8 ">
                  <ul className="-my-7 divide-y divide-grey-300">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                      >
                        <div className="flex flex-1 items-stretch">
                          <div className="flex-shrink-0">
                            <img
                              className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                              src={product.imageSrc}
                              alt={product.imageSrc}
                            />
                          </div>

                          <div className="ml-5 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-bold text-gray-900">
                                {product.name}
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                {product.color}
                              </p>
                            </div>

                            <p className="mt-4 text-sm font-medium text-gray-500">
                              x {product.quantity}
                            </p>
                          </div>
                        </div>

                        <div className="ml-auto flex flex-col items-end justify-between">
                          <p className="text-right text-sm font-bold text-gray-900">
                            {product.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
