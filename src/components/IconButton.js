const IconButton = ({ icon, onClick, className }) => (
    <button
      className={`bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:bg-gray-800 mr-2 ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );

  export default IconButton;