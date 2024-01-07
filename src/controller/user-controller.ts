import React, { FormEvent } from "react";
import { IUser } from "../interfaces/user-interface";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { NavigateFunction } from "react-router-dom";

const validateExists = async (email: string) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.size > 0) {
    return true;
  }
  return false;
};

const handleRegister = async (
  e: FormEvent<HTMLFormElement>,
  navigate: NavigateFunction,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  const { name, nis, email, password } = e.currentTarget;
  if (password.value.length < 6) {
    setError("Password must be at least 6 characters long!");
    return;
  }

  if (await validateExists(email.value)) {
    setError("Email already exists!");
    return;
  }

  await createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      const user: IUser = {
        // @ts-ignore
        name: name.value,
        nis: nis.value,
        email: email.value,
      };
      const usersRef = collection(db, "users");
      addDoc(usersRef, user)
        .then(() => {
          alert("User registered successfully!");
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          return;
        });
    })
    .catch((error) => {
      setError(error.message);
      return;
    });
};

export { handleRegister };
