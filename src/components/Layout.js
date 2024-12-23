import { useState } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="p-4 bg-gray-200 dark:bg-gray-800 lg:flex md:fles justify-between">
          <h1 className="text-lg font-bold">Multi-Step Form</h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle Dark Mode
          </button>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
          Footer Content
        </footer>
      </div>
    </div>
  );
};

export default Layout;