import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

function Equipos() {
  useEffect(() => {
    const cargarEquipos = async () => {
      const { data, error } = await supabase.from("players").select("*");

      if (error) {
        console.error("Error:", error);
        return;
      }

      console.log("Base de datos conectados", data);
    };

    cargarEquipos();
  }, []);

  return <h1>Equipos</h1>;
}

export default Equipos;
