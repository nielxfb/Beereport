import { createContext, useContext, useEffect, useState } from "react";
import { IChildren } from "../interfaces/children-interface";
import { IUser } from "../interfaces/user-interface";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

const context = createContext<IUserContext>({} as IUserContext);

interface IUserContext {
  user: IUser | null;
  login: (
    e: React.FormEvent<HTMLFormElement>,
    navigate: NavigateFunction,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  logout: () => void;
}

export function UserProvider({ children }: IChildren) {
  const USER_KEY = "USER_BEEREPORT_KEY";
  const [user, setUser] = useState<IUser | null>(
    localStorage.getItem(USER_KEY)
      ? JSON.parse(localStorage.getItem(USER_KEY) as string)
      : null
  );

  const [email, setEmail] = useState<string>('');
  const [loginTrigger, setLoginTrigger] = useState<number>(0);

  const login = (
    e: React.FormEvent<HTMLFormElement>,
    navigate: NavigateFunction,
    setError: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    e.preventDefault();
    const { email, password } = e.currentTarget;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        setEmail(email.value);
        setLoginTrigger((loginTrigger) => loginTrigger + 1);
        navigate("/home-page");
      })
      .catch(() => {
        setError("Invalid credentials!");
        return;
      });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  };

  useEffect(() => {
    setUserData().then((userData) => {
      setUser(userData);
      localStorage.setItem(USER_KEY, JSON.stringify({
        name: userData.name,
        email: userData.email,
        nis: userData.nis
      }))
    });
  }, [loginTrigger]);

  const setUserData = async (): Promise<IUser> => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let userData: IUser | null = null;
    querySnapshot.forEach((doc) => {
      userData = doc.data() as IUser;
    });
    if (userData) {
      return userData;
    }

    return {} as IUser;
  };

  const data: IUserContext = { user, login, logout };

  return <context.Provider value={data}>{children}</context.Provider>;
}

export default function useUser() {
  return useContext(context);
}
