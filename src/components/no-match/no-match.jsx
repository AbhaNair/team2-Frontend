import { useNavigate } from "react-router-dom";

export default function NoMatch() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Error 404: No match found.</p>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
