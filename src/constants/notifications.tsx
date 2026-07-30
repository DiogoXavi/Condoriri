import type { INotification } from "../types/types";

const notifications: INotification[] = [
  // {
  //   id: 6,
  //   title: "Fixture mejorado",
  //   description: "Se agrego tres estados a cada partido, FINALIZADO cuando el partido se haya terminado y mestra el marcador, EN JUEGO muestra el marcador y a la vez muestra una etiqueta en verde, y PROGRAMADO cuando los partidos estan programados y aun no estan en juego ",
  //   status: "success",
  //   date: "08/08/2025 | 03:35"
  // },
  //  {
  //   id: 5,
  //   title: "Nuevas funcionalidades",
  //   description: "Se agregaron dos funcionalidades nuevas. 1 se puede ver detalle de cada jugador e enviar mensaje de whatsapp desde esa vista. 2. Se agrego Notificaciones. ",
  //   status: "success",
  //   date: "07/08/2025 | 03:20"
  // },
  // {
  //   id: 4,
  //   title: "Partido Suspendido",
  //   description: "Por motivo de tanta lluvia esta sema se supende el partido programado para este fin de semara 03/07/2025",
  //   status: "error",
  //   date: "07/08/2025 | 02:19"
  // },
  // {
  //   id: 3,
  //   title: "Partidos habilitados",
  //   description: "Este fin de semana 12/07/2025 se juega la fecha 12 y la fecha 14 con normalidad, que tenga un exelente semana, los esperamos ",
  //   status: "success",
  //   date: "13/08/2025 | 12:23"
  // },
  {
    id: 2,
    title: "Partidos suspendidos por lluvia",
    description: `Se informa a todos los equipos, jugadores y público en general que, debido a las intensas lluvias y con el fin de resguardar la seguridad de los participantes, queda suspendida la realización de los partidos correspondientes a las Fechas 1.
      Próximamente se dará a conocer la reprogramación de dichos encuentros.
      Agradecemos su comprensión`,
    status: "warning",
    date: "29/03/2026 | 09:00",
  },
  {
    id: 1,
    title: "Inauguración del Campeonato",
    description:
      "¡Gran Inauguración del Campeonato Intercomunal Municipio San Lucas! 📅 29/03/2026   ⏰ 08:00 AM   📍 Complejo Deportivo Sudamericano “Ex Company” ¡Se invita encarecidamente a todos los jugadores e hinchas de cada comunidad de municipio San Lucas! No faltes. Los esperamos para vivir juntos esta gran fiesta deportiva! 🎉",
    status: "success",
    date: "11/03/2026 | 00:35",
  },
];

export default notifications;
