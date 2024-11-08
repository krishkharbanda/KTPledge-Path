function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
            <div className="p-6">
              {children}
              <button onClick={onClose} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  