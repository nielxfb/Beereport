interface ITextField {
  placeholder: string;
  name: string;
  type?: string;
}

function TextField({ placeholder, name, type = "text" }: ITextField) {
  return (
    <div className="mb-2">
    <input className="py-2 px-3 border-[0.5px] border-gray-500 rounded-lg w-80" type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default TextField;
