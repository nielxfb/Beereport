import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import TextField from "../components/text-field";
import { handleRegister } from "../controller/user-controller";
import { useState } from "react";

function RegisterPage() {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  return (
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='border-gray-700 rounded-2xl flex flex-col justify-center items-center gap-4 bg-[#f2f0ff] px-8 py-10 border-[0.5px] shadow-md bg-opacity-25 w-96'>
          <h1 className='text-xl font-bold'>Register</h1>
          <form onSubmit={(e) => handleRegister(e, navigate, setError)}>
            <TextField placeholder='Name' name='name' />
            <TextField placeholder='NIS' name='nis' />
            <TextField placeholder='Email' name='email' type='email' />
            <TextField placeholder='Password' name='password' type='password' />
            {error && <h1 className='text-red-500'>{error}</h1>}
            <Button isSubmit={true} text='Register' style='w-80'></Button>
            <h2>
              Already registered? Click{" "}
              <Link to='/' className='underline text-blue-600'>
                here
              </Link>{" "}
              to login!
            </h2>
          </form>
        </div>
      </div>
  );
}

export default RegisterPage;
