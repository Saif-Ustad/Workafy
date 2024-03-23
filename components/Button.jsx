

const Button = ({ buttonText, btnColor = 'customDarkGreen' }) => {
    return (
      <button className={`bg-customDarkGreen text-white px-6 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-customGreen`}>
        {buttonText}
      </button>
    );
  };
  
  export default Button;
  