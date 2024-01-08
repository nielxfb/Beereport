import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/button";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResultsPage() {
  const navigate = useNavigate();

  const query = useQuery();

  const param1 = query.get("param1");
  const param2 = query.get("param2");
  const param3 = query.get("param3");
  const param4 = query.get("param4");
  const param5 = query.get("param5");
  console.log(param1, param2, param3, param4, param5);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl">Top 5 Recommendations:</h1>
      <ol>
        <li>{param1}</li>
        <li>{param2}</li>
        <li>{param3}</li>
        <li>{param4}</li>
        <li>{param5}</li>
      </ol>
      <Button text="Back to home" onClick={() => navigate("/")} />
    </div>
  );

  // Now you can use param1, param2, param3, param4, param5 in your component
}

export default ResultsPage;
