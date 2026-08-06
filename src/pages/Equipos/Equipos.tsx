import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface Player {
  id: number;
  name: string;
  full_name: string | null;
  dni: string | null;
  image_url: string | null;
  number: number | null;
  position: string | null;
  nationality: string | null;
  statues: string | null;
  birthdate: string | null;
  team: string | null;
  category: string | null;
  likes: number;
  rating: number;
  created_at: string;
}

function Equipos() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPlayers = async () => {
      const { data, error } = await supabase
        .from("players")
        .select("*");

      if (error) {
        console.error("Error:", error);
        setLoading(false);
        return;
      }

      console.log("Base de datos conectada:", data);

      setPlayers(data || []);
      setLoading(false);
    };

    cargarPlayers();
  }, []);

  if (loading) {
    return <h1>Cargando jugadores...</h1>;
  }

  return (
    <div>
      <h1>Jugadores</h1>

      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>

          <p>Nombre completo: {player.full_name}</p>
          <p>DNI: {player.dni}</p>
          <p>Número: {player.number}</p>
          <p>Posición: {player.position}</p>
          <p>Nacionalidad: {player.nationality}</p>
          <p>Estado: {player.statues}</p>
          <p>Fecha de nacimiento: {player.birthdate}</p>
          <p>Equipo: {player.team}</p>
          <p>Categoría: {player.category}</p>
          <p>Likes: {player.likes}</p>
          <p>Rating: {player.rating}</p>

          {player.image_url && (
            <img
              src={player.image_url}
              alt={player.name}
              width={150}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Equipos;