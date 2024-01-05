import { useState } from "react";

interface ICourseIndex {
    name: string;
}

function CourseIndex({ name }: ICourseIndex) {
    const [inputValue, setInputValue] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.target.value));
    }

  return (
    <div className={`w-auto border border-gray-500 rounded-2xl ${inputValue !== 0 ? 'bg-[#fb77e080]' : ''}`}>
        <div className="flex justify-between m-2 py-1 gap-6 whitespace-nowrap">
            <h1>{name}</h1>
            <input className="w-[50px] border-[0.5px] border-gray-400 rounded-md text-center" type="number" min={0} max={1} step={0.1} defaultValue={0} onChange={handleInputChange} />
        </div>
    </div>
  )
}

export default CourseIndex