const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-4 py-2 
        bg-blue-500 
        text-white 
        rounded-lg 
        hover:bg-blue-600 
        active:scale-95 
        transition-all 
        text-sm
      "
    >
      {label}
    </button>
  );
};

export default Button;
