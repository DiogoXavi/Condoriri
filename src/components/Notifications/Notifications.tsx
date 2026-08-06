import React from "react";
//import type { INotification } from "../../types/types";
import { NotificationContainer } from "./styles";
//import AlertTitle from "@mui/material/AlertTitle";
import { Typography } from "@mui/material";

//import { useNotifications } from "../../hooks/useNotifications";

const Notifications: React.FC = () => {
  //const { notifications, loading } = useNotifications();

  // if (loading) {
  //   return (
  //     <NotificationContainer>
  //       {[1, 2, 3, 4].map((item) => (
  //         <Box key={item} sx={{ mb: 2 }}>
  //           <Skeleton variant="rounded" height={120} />
  //         </Box>
  //       ))}
  //     </NotificationContainer>
  //   );
  // }

  // if (!notifications.length) {
  //   return (
  //     <NotificationContainer>
  //       <Typography>No hay notificaciones todavía</Typography>
  //     </NotificationContainer>
  //   );
  // }

  return (
    <NotificationContainer>
      <Typography variant="h6">No hay notificaciones</Typography>
      {/* {notifications.map((notification: INotification) => (
        <StyledAlert key={notification.id} severity={notification.status}>
          <AlertTitle>{notification.title}</AlertTitle>
          {notification.description}
          <Divider sx={{ marginTop: "0.75rem" }} />
          <DateContent>{notification.date}</DateContent>
        </StyledAlert>
      ))} */}
    </NotificationContainer>
  );
};

export default Notifications;
