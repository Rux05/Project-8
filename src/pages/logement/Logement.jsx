import { useParams } from "react-router-dom";

export default function Logement() {
  const { id } = useParams();
  console.log(id);
}
