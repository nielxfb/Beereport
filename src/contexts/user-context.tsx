import { createContext, useContext, useEffect, useState } from "react";
import { IChildren } from "../interfaces/children-interface";
import { IUser } from "../interfaces/user-interface";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";

const context = createContext<IUserContext>({} as IUserContext);

interface IUserContext {
  user: IUser | null;
}

export function UserProvider({ children }: IChildren) {
  const USER_KEY = "USER_BEEREPORT_KEY";
  const [user, setUser] = useState<IUser | null>(
    localStorage.getItem(USER_KEY)
      ? JSON.parse(localStorage.getItem(USER_KEY) || "")
      : null
  );

  const [loginTrigger, setLoginTrigger] = useState<number>(0);

  const login = (name: string, password: string) => {
    signInWithEmailAndPassword(auth, name, password)
      .then((user) => {
        if (user) {
          setLoginTrigger((loginTrigger) => loginTrigger + 1);
          return true;
        }
        return false;
      })
      .catch(() => {
        return false;
      });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  };

  useEffect(() => {
    setUserData().then((userData) => {
      setUser(userData);
    });
  }, [loginTrigger, user]);

  const setUserData = async (): Promise<IUser> => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", user?.email));
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

  const data = { user, login, logout };

  return <context.Provider value={data}>{children}</context.Provider>;
}

export default function useUser() {
  return useContext(context);
}
