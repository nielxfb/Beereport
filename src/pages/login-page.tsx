import { useState } from "react";
import Button from "../components/button";
import TextField from "../components/text-field";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../contexts/user-context";

function LoginPage() {
  const { login } = useUser();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="border-gray-700 rounded-2xl absolute right-[10%] top-[50%] translate-x-[10%] -translate-y-1/2 flex flex-col justify-center items-center gap-4 bg-[#f2f0ff] px-8 py-10 border-[0.5px] shadow-md bg-opacity-25">
      <h1 className="text-xl font-bold">Login</h1>
      <form onSubmit={(e) => login(e, navigate, setError)}>
        <TextField placeholder="Email" name="email" type="email" />
        <TextField placeholder="Password" name="password" type="password" />
        {error && <h1 className="text-red-500">{error}</h1>}
        <Button isSubmit={true} text="Login" style="w-80"></Button>
        <h2>
          New to Beereport? Click{" "}
          <Link to="/register" className="underline text-blue-600">
            here
          </Link>{" "}
          to register!
        </h2>
      </form>
    </div>
  );
}

export default LoginPage;
