import React from "react";

const productsData = [
  {
    id: 1,
    name: "Product A",
    description: "This is a description for Product A",
    image: "https://picsum.photos/300/200?1",
  },
 
];

function Products() {
  return (
    <div>
      
      <section className="relative">
        <img
          src="https://picsum.photos/1200/600"
          alt="Hero"
          className="w-full h-[500px] object-cover rounded"
        />
        <div className="absolute bottom-10 left-10 text-white max-w-xl bg-black bg-opacity-50 p-5 rounded">
          <p className="font-semibold text-red-400">Featured</p>
          <h2 className="text-3xl font-bold mt-2">
            Breaking Into Product Design: Advice from Untitled Founder, Frankie
          </h2>
          <p className="mt-2 text-gray-200">
            You don’t need a fancy Bachelor’s Degree to get into Product Design...
          </p>
          <p className="mt-3 text-red-300 bg-gray-700 p-2 rounded">
            This is the fast program, very most program. It is the fast program and gives you everything!
          </p>
        </div>
      </section>
 
  
      <section className="mt-10 px-10">
        <h2 className="text-2xl font-bold mb-5">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="border rounded shadow hover:shadow-lg transition p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
              <p className="mt-1 text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
