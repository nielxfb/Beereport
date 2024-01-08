import { useState } from "react";
import Button from "../components/button";
import ScoreInput from "../components/score-input";
import { handleAddScore } from "../controller/score-controller";
import useUser from "../contexts/user-context";
import { useNavigate } from "react-router-dom";

function AddScorePage() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  if (!user) {
    navigate("/");
  }

  return (
    <div className='m-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='border-gray-700 rounded-2xl flex flex-col justify-center items-center gap-4 bg-[#f2f0ff] px-8 py-10 border-[0.5px] shadow-md bg-opacity-25 w-96'>
        <h1 className='text-xl font-bold'>Add Scores</h1>
        <form
          onSubmit={(e) =>
            handleAddScore(e, navigate, user?.name ? user.name : "", setError)
          }
        >
          <ScoreInput label='10th Grade' name='tenth_grade_score' />
          <ScoreInput label='11th Grade' name='eleventh_grade_score' />
          <ScoreInput label='12th Grade' name='twelfth_grade_score' />
          {error && <h1 className='text-rPed-500'>{error}</h1>}
          <Button isSubmit={true} text='Submit' style='mt-4 w-80'></Button>
        </form>
      </div>
    </div>
  );
}

export default AddScorePage;
