import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

interface PlayerCardWrapperProps {
  teamcolor: string;
}


export const PlayerCardWrapper = styled("div")<PlayerCardWrapperProps>(
  ({ teamcolor }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    alignItems: "center",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "16px",
    width: "100%",
    maxWidth: "1200px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    margin: "0",
    paddingLeft: "5rem",
    position: "relative",
    transition: "all 0.25s ease",

    // 🔥 LINEA DERECHA MODERNA
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      width: "3px",
      paddingLeft: "0.5rem",
      height: "100%",
      background: `linear-gradient(
        180deg,
        ${teamcolor},
        rgba(255,255,255,0.2),
        ${teamcolor}
      )`,
      boxShadow: `0 0 12px ${teamcolor}`,
    },

    ":hover": {
      boxShadow: `0 6px 18px ${teamcolor}55`,
      transform: "scale(1.01)",
      transition: "transform 0.2s ease-in-out",
    },
    "@media (max-width: 600px)": {
      paddingLeft: 0,
    },
  }),
);

export const CardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "1200px",
  backgroundColor: "#ffffff",
  border: "1px solid #ddd",
  borderRadius: "12px",
  overflow: "hidden",
  marginBottom: "16px",

});

export const PlayerImage = styled("img")({
 justifyItems: "center",
  width: "5.5rem",
  height: "5.5rem",
  objectFit: "cover",
  marginLeft: "5rem",
  borderRadius: "20%",
  margin: "2px",
  "@media (max-width: 600px)": {
    width: "4rem",
    height: "4rem",
  },
  "@media (max-width: 900px)": {
    width: "5.5rem",
    height: "5.5rem",
  },
});

export const LogoImage = styled("img")({
  display: 'flex',
  alignSelf: "flex-end",
 justifyItems: "center",
  width: "4rem",
  height: "4rem",
  objectFit: "cover",
  marginLeft: "4rem",
  borderRadius: "10%",
  margin: "2px",
  "@media (max-width: 600px)": {
    width: "3rem",
    height: "3rem",
    marginLeft: "0rem",
  },
  "@media (max-width: 900px)": {
    width: "3.7rem",
    height: "3.7rem",
    marginLeft: "0rem",
  },
});


export const PlayerInfo = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px",
  textAlign: "center",
});

export const PlayerTitle = styled("h3")({
  margin: "auto",
  fontSize: "17px",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  textTransform: "uppercase",
  color: 'rgb(95, 96, 95)',
});

export const PlayerText = styled('p')(() => ({
  margin: '2px 0',
  fontSize: '18px',
  color: 'rgb(2, 61, 2)',
  fontWeight: 'bold',
}));

export const PlayerName = styled("p")(() => ({
  margin: "2px 0",
  fontSize: "15px",
  color: "#1abc9c",
  fontFamily: "sans-serif",
  fontStyle: "italic",
}));

export const PositionContainmer = styled("div")({
  display: "flex",
  marginTop: "8px",
  gap: "10px",
});

// export const TitleTeam = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   textAlign: 'left',
//   width: '100%',
//   padding: '0.1rem 0',
//   color: '#333',
//   fontSize: '14px',
//   lineHeight: '1.5',
// });

export const Logo = styled('img')({
  width: '25px',
  height: '25px',
  objectFit: 'contain',
  marginRight: '0.5rem',
});

export const TeamName = styled('span')(() => ({
  verticalAlign: 'middle',
  marginLeft: '0.15rem',
}));

// export const OponentGoals = styled('span')({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   width: '100%',
//   padding: '0.1rem 0',
//   color: '#333',
//   fontSize: '14px',
//   lineHeight: '1.5',
// });

export const GoalRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "center",
  gap: "12px",
  padding: "5px 6px",
  borderRadius: "10px",
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: "4px",
  transition: "0.2s ease",

  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
}));

export const TitleTeam = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const OponentGoals = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "45px",
  borderRadius: "999px",
  background: "#6ce9ef",
  fontWeight: 700,
  fontSize: "14px",
  gap: "10px",
}));