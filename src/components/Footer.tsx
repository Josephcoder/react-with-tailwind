const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-700 dark:bg-gray-100 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto">
        <div className="rounded-lg dark:border-gray-200 mt-6">
          <div className="bg-gray-100 p-2 text-center text-gray-500 dark:bg-gray-100 dark:text-gray-600">
            © 2023 Copyright:
            <a
              className="text-gray-500 dark:text-gray-400"
              href="https://tailwind-elements.com/"
            >
              &nbsp; CAMIS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
