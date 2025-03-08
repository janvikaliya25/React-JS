import React from 'react';

function Productlist({ arr }) {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-gray-100 via-pink-200 to-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Product List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg bg-white rounded-lg">
          <thead>
            <tr className="bg-pink-300 text-gray-900 text-lg">
              <th className="border border-gray-300 px-6 py-3">Image</th>
              <th className="border border-gray-300 px-6 py-3">Title</th>
              <th className="border border-gray-300 px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((product, index) => (
              <tr key={index} className="hover:bg-pink-100 transition duration-300">
                <td className="border border-gray-300 px-6 py-3">
                  <img src={product.Image} alt={product.Title} className="w-20 h-20 object-cover rounded-md" />
                </td>
                <td className="border border-gray-300 px-6 py-3 text-gray-800 text-lg">{product.Title}</td>
                <td className="border border-gray-300 px-6 py-3 text-gray-800 text-lg font-semibold">${product.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Productlist;
