import { useParams } from "react-router-dom";

export default function Inventory() {
  const { id } = useParams();

  return (
    <div style={{ 
      padding: "2rem", 
      color: "white",
      background: "#070d1f",
      minHeight: "100vh"
    }}>
      <h1>Proyecto: {id}</h1>
      <p>Detalle del proyecto próximamente...</p>
    </div>
  );
}