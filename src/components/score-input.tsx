interface IScoreInput {
  label: string;
  name: string;
}

function ScoreInput({ label, name }: IScoreInput) {
  return (
    <div className='mb-2'>
      <label className='text-gray-700 text-sm font-semibold mb-1'>
        {label}
      </label>
      <input
        className='py-2 px-3 border-[0.5px] border-gray-500 rounded-lg w-80'
        type='number'
        name={name}
        placeholder='Input score'
      />
    </div>
  );
}

export default ScoreInput;
