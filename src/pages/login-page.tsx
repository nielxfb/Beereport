import Button from "../components/button";
import TextField from "../components/text-field";
import LoginBackground from "./../../resources/LoginBackground.png";
import GoogleIcon from './../../resources/GoogleIcon.png'

function LoginPage() {
  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <img
        src={LoginBackground}
        alt="login-background"
        style={{ backgroundColor: "#f2f0ff" }}
      />
      <div className="border-gray-700 rounded-2xl absolute right-[10%] top-[50%] translate-x-[10%] -translate-y-1/2 flex flex-col justify-center items-center gap-4 bg-[#f2f0ff] px-8 py-10 border-[0.5px] shadow-md bg-opacity-25">
        <h1 className="text-xl font-bold">Login</h1>
        <TextField placeholder="Email" name="email" />
        <TextField placeholder="Password" name="password" type="password" />
        <Button text="Login" style="w-80"></Button>
        <div className="flex items-center gap-2 text-gray-400">
          <hr className="border border-gray-400 w-36" />
          or
          <hr className="border border-gray-400 w-36" />
        </div>
        <div>
          <img src={GoogleIcon} alt="google-icon" className="absolute w-8 left-[90px] mt-1" />
          <button className="bg-white py-2 px-3 border-[1px] border-gray-400 rounded-lg shadow-md text-gray-600 w-80 pl-10">Continue with Google</button>
        </div>
      <h2>New to Beereport? Click <a href="" className="underline text-blue-600">here</a> to register!</h2>
      </div>
    </div>
  );
}

export default LoginPage;
