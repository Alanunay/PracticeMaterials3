export const Hero = () => {
  return (
    <section className="bg-blue-600 text-white p-8 rounded-xl">
      <h1 className="text-3xl font-bold">
        Inventory Management System
      </h1>

      <p className="mt-2 text-blue-100">
        Manage your products, stock, and inventory efficiently.
      </p>

      <button className="mt-5 bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100">
        Add Product
      </button>
    </section>
  );
};