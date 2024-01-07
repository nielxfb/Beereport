import {
  DocumentReference,
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { IScore } from "../interfaces/score-interface";
import { NavigateFunction } from "react-router-dom";

const fetchScores = async (name: string): Promise<IScore | null> => {
  const scoresRef = collection(db, "scores");
  const q = query(scoresRef, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  let scores: IScore | null = null;
  querySnapshot.forEach((doc) => {
    scores = doc.data() as IScore;
  });
  return scores;
};

const handleAddScore = (
  e: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction,
  name: string,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();

  const { tenth_grade_score, eleventh_grade_score, twelfth_grade_score } =
    e.currentTarget;

  const scoresRef = collection(db, "scores");
  const score: IScore = {
    name: name,
    tenth_grade_score: tenth_grade_score.value,
    eleventh_grade_score: eleventh_grade_score.value,
    twelfth_grade_score: twelfth_grade_score.value,
  };

  addDoc(scoresRef, score)
    .then(() => {
      alert("Score added successfully!");
      navigate("/home-page");
    })
    .catch((error) => {
      setError(error.message);
      return;
    });
};

const handleUpdateScore = async (
  e: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction,
  name: string,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();

  const { tenth_grade_score, eleventh_grade_score, twelfth_grade_score } =
    e.currentTarget;

  const scoresRef = collection(db, "scores");
  const q = query(scoresRef, where("name", "==", name));
  const score: IScore = {
    name: name,
    tenth_grade_score: tenth_grade_score.value,
    eleventh_grade_score: eleventh_grade_score.value,
    twelfth_grade_score: twelfth_grade_score.value,
  };

  const querySnapshot = await getDocs(q);
  let docRef: DocumentReference | null = null;
  querySnapshot.forEach((doc) => {
    docRef = doc.ref;
  });
  if (docRef === null) {
    setError("Error updating score!");
    return;
  }
  updateDoc(docRef, score)
    .then(() => {
      alert("Score updated successfully!");
      navigate("/home-page");
    })
    .catch((error) => {
      setError(error.message);
      return;
    });
};

export { fetchScores, handleAddScore, handleUpdateScore };
