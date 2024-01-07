import { useEffect, useState } from "react";
import useUser from "../contexts/user-context";
import { fetchScores } from "../controller/score-controller";
import { IScore } from "../interfaces/score-interface";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [scores, setScores] = useState<IScore | null>(null);

  useEffect(() => {
    fetchScores(user?.name ? user.name : "").then((scores) => {
      setScores(scores);
    });
  }, [user]);

  const calculateAverageScore = (scores: IScore): number => {
    const total =
      Number(scores.tenth_grade_score) +
      Number(scores.eleventh_grade_score) +
      Number(scores.twelfth_grade_score);
    return total / 3;
  };

  return (
    <>
      <div className='absolute left-[5vw] top-[5vh]'>
        <h1 className='text-[#fa449c] text-xl'>Welcome,</h1>
        <h1 className='text-[#2e11f8] text-2xl'>{user?.name}</h1>
        {scores != null ? (
          <>
            <table className='table-auto mt-4'>
              <thead>
                <tr>
                  <th className='border px-4 py-2'>10th Grade</th>
                  <th className='border px-4 py-2'>11th Grade</th>
                  <th className='border px-4 py-2'>12th Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>
                    {scores.tenth_grade_score}
                  </td>
                  <td className='border px-4 py-2'>
                    {scores.eleventh_grade_score}
                  </td>
                  <td className='border px-4 py-2'>
                    {scores.twelfth_grade_score}
                  </td>
                </tr>
              </tbody>
            </table>
            <Button
              style='mt-4'
              text='Update score'
              onClick={() => navigate("/update-score")}
            />
          </>
        ) : (
          <>
            <h1 className='text-xl mt-4'>There are currently no scores yet!</h1>
            <Button
              style='mt-4'
              text='Add new score'
              onClick={() => navigate("/add-score")}
            />
          </>
        )}
      </div>
      <div className='absolute right-[5vw] top-[12vh] flex flex-col justify-center gap-3'>
        {scores ? (
          <>
            <div className='flex flex-col justify-center items-center gap-2 px-6 py-4 p-2 border-[0.5px] rounded-lg bg-[#f2f0ff] mb-4'>
              <h1 className='text-[#2e11f8] text-2xl'>Academic Performance</h1>
              <div className='w-full h-8 bg-gray-300 rounded-md'>
                <div
                  style={{ width: `${calculateAverageScore(scores)}%` }}
                  className='h-8 bg-[#fa449c] rounded-md'
                />
              </div>
              <p className='flex justify-center items-center text-xl'>
                {calculateAverageScore(scores)}
              </p>
            </div>
            <div className='flex flex-col gap-2 px-6 py-4 p-2 border-[0.5px] rounded-lg bg-[#f2f0ff]'>
              <h1 className='text-[#2e11f8] text-2xl'>Roadmap</h1>
              <h1>
                Choose your favorite subjects and get college program
                recommendation!
              </h1>
              <div>
                <Button text='See more' onClick={() => navigate('/roadmap')} />
              </div>
            </div>
          </>
        ) : (
          <h1 className='text-xl'>Please add your scores first!</h1>
        )}
      </div>
    </>
  );
}

export default HomePage;
