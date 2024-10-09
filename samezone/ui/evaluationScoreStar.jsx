import { FaStar, FaStarHalf } from "react-icons/fa";

export default function EvaluationScoreStar({ rating, count }) {
  let star = [...Array(Math.floor(rating))];

  let half = rating.toString().split(".")[1] > 3;

  return (
    <div className="flex items-center">
      {star.map((_, index) => (
        <FaStar key={index} style={{ color: "yellow" }} />
      ))}
      {half && <FaStarHalf style={{ color: "yellow" }} />}
      <p className="pl-2 ">
        <span className="text-yellow-400 font-semibold">{rating}</span> /{" "}
        <span  >({count})</span>
      </p>
    </div>
  );
}
