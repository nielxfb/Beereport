interface IButton {
  text: string;
  isSubmit?: boolean;
  style?: string;
  onClick?: () => any;
}

function Button({ text, isSubmit, style, onClick }: IButton) {
  return (
    <div>
      <button
        className={`bg-[#2e11f8] py-2 px-3 border-[1px] border-gray-900 rounded-lg shadow-md text-white ${
          style ? style : ""
        }`}
        type={isSubmit ? "submit" : "button"}
        onClick={onClick ? onClick : undefined}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
