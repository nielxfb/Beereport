interface IButton {
    text: string;
    style?: string;
}

function Button({ text, style }: IButton) {
  return (
    <div>
        <button className={`bg-[#2e11f8] py-2 px-3 border-[1px] border-gray-900 rounded-lg shadow-md text-white ${style ? style : ''}`}>{text}</button>
    </div>
  )
}

export default Button
