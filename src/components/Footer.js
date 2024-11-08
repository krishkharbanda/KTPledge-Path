function Footer() {
    return (
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KTPledge Path. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  