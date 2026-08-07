import styled from '@emotion/styled';
export const CardContainer = styled("div") ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px',
  height: '100%',
  padding: '10px',
});

export const Container = styled("div") ({
  maxWidth: "120rem",
  margin: "32px auto",
  padding: "24px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});
export const MessageContent = styled("div") ({
  maxWidth: "120rem",
  margin: "32px auto",
  padding: "24px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});

export const ButtonContainer = styled("div")({
  marginTop: "16px",
  display: "flex",
  justifyContent: "center",
  gap: "5rem",
  flexWrap: "wrap",
  padding: "0 1rem",
  marginBottom: "1rem",

  "@media (max-width: 900px)": {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "3rem",
  },

  "& button": {
    minWidth: "150px",
    fontSize: "1rem",
    "@media (max-width: 900px)": {
      flex: 1,
      minWidth: "0",
      fontSize: "0.6rem", 
      padding: "6px 15px",
    },
  },
});
export const PlayerCardWrapper = styled("div")({
  backgroundColor: "#ffffff",
  border: "1px solid #ddd",
  alignItems: "center",
  borderRadius: "8px",
  overflow: "hidden",
  marginBottom: "16px",
  width: "100%",
  maxWidth: "1200px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  margin: "8px",
  ":hover": {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.02)",
    transition: "transform 0.2s ease-in-out",
  },
  paddingLeft: "5rem",
  "@media (max-width: 600px)": {
    paddingLeft: 0,
  }
});