import React, { useState } from "react";
import { RiDeleteBin6Line, RiArrowRightLine, RiAddLine, RiSubtractLine } from "react-icons/ri";

const initialCartProducts = [
  {
    imgSrc: "https://m.media-amazon.com/images/I/71NZnTJMqKL.jpg",
    name: "Classic Watch",
    price: "$99.99",
    quantity: 1,
  },
  {
    imgSrc: "https://img.fruugo.com/product/9/79/569745799_0340_0340.jpg",
    name: "Wireless Headphones",
    price: "$89.99",
    quantity: 2,
  },
  {
    imgSrc:
      "https://image.made-in-china.com/202f0j00bczklprKnsqV/Second-Hand-Note-11t-PRO-5g-HD-Camera-Smartphone.webp",
    name: "Smartphone",
    price: "$79.99",
    quantity: 1,
  },
  {
    imgSrc:
      "https://rukminim2.flixcart.com/image/850/1000/shoe/u/n/w/black-grey-run-o-run-balls-9-original-imadz54xvjqjvh4g.jpeg?q=20&crop=false",
    name: "Running Shoes",
    price: "$69",
    quantity: 3,
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJfUN6WuKAcgtl5_VzL4Xv2kAXbKvn3oTvw&s",
    name: "Leather Jacket",
    price: "$59.99",
    quantity: 1,
  },
];

function Cart() {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  const handleQuantityChange = (index, change) => {
    const updatedProducts = [...cartProducts];
    const newQuantity = updatedProducts[index].quantity + change;
    if (newQuantity > 0) {
      updatedProducts[index].quantity = newQuantity;
      setCartProducts(updatedProducts);
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = cartProducts.filter((_, i) => i !== index);
    setCartProducts(updatedProducts);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-8 mt-20 py-10"
          style={{ fontFamily: "Poppins" }}
        >
          Shopping Cart
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-4 px-4 border-b-2 border-gray-300">Product</th>
                <th className="py-4 px-4 border-b-2 border-gray-300">Name</th>
                <th className="py-4 px-4 border-b-2 border-gray-300">Price</th>
                <th className="py-4 px-4 border-b-2 border-gray-300">Quantity</th>
                <th className="py-4 px-4 border-b-2 border-gray-300">Total</th>
                <th className="py-4 px-4 border-b-2 border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product, index) => (
                <tr key={index} className="text-center">
                  <td className="py-4 px-6 border-b border-gray-200">
                    <img
                      src={product.imgSrc}
                      alt={product.name}
                      className="w-20 h-20 object-contain"
                    />
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">{product.name}</td>
                  <td className="py-4 px-6 border-b border-gray-200">{product.price}</td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <button
                      className="bg-gray-800 text-white py-2 px-2 rounded"
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      <RiSubtractLine />
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="bg-gray-800 text-white py-2 px-2 rounded"
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      <RiAddLine />
                    </button>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    ${parseFloat(product.price.replace("$", "")) * product.quantity}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200" style={{textAlign:'center'}}>
                    <button
                      className="bg-red-500 flex items-center text-white mx-auto py-2 px-4 rounded transition duration-300 ease-in-out"
                      onClick={() => handleRemoveProduct(index)}
                    >
                      <RiDeleteBin6Line /> &nbsp;Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" >
                  <button
                    className="bg-gray-900 my-10 flex items-center mx-10 text-white py-2 px-4 transition duration-300 ease-in-out"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Place Order  &nbsp;
                    <RiArrowRightLine />
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
