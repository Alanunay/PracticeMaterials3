
export const Sidebar = () => {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        bg-gray-900
        text-white
        p-4
        md:h-screen
        md:w-64
        md:p-6
      "
    >
      {/* Logo / Title */}
      <h2 className="text-xl font-bold mb-4 md:text-2xl md:mb-8">
        Inventory
      </h2>

      {/* Navigation */}
      <nav>
        <ul
          className="
            flex
            gap-2
            overflow-x-auto
            md:block
            md:space-y-3
          "
        >
          <li>
            <a
              href="#dashboard"
              className="block whitespace-nowrap p-3 rounded-lg hover:bg-gray-700"
            >
              Dashboard
            </a>
          </li>

          <li>
            <a
              href="#products"
              className="block whitespace-nowrap p-3 rounded-lg hover:bg-gray-700"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="#categories"
              className="block whitespace-nowrap p-3 rounded-lg hover:bg-gray-700"
            >
              Categories
            </a>
          </li>

          <li>
            <a
              href="#stock"
              className="block whitespace-nowrap p-3 rounded-lg hover:bg-gray-700"
            >
              Stock
            </a>
          </li>

          <li>
            <a
              href="#suppliers"
              className="block whitespace-nowrap p-3 rounded-lg hover:bg-gray-700"
            >
              Suppliers
            </a>
          </li>

          <li>
            <a
              href="#reports"
              className="block whitespace-nowrap p-3 rounded-lg hover:bg-gray-700"
            >
              Reports
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

