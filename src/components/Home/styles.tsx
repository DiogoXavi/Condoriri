import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "40px 20px",
  maxWidth: "900px",
  margin: "0 auto",
  "@media (max-width: 600px)": {
    padding: "10px 10px",
  },
});

export const Logo = styled.img({
  width: "140px",
  marginBottom: "20px",
});

export const Title = styled.h2({
  fontSize: "28px",
  marginBottom: "5px",
});

export const Subtitle = styled.h3({
  fontSize: "22px",
  marginBottom: "20px",
  color: "#1abc9c",
});

export const Description = styled.p({
  fontSize: "16px",
  maxWidth: "600px",
  marginBottom: "30px",
  lineHeight: 1.6,
});

export const SectionTitle = styled.h2({
  marginTop: "30px",
  marginBottom: "15px",
  fontSize: "22px",
});

export const Contact = styled.a({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  textDecoration: "none",
  fontSize: "16px",
  color: "#25D366",
  marginBottom: "10px",
  transition: "0.3s",

  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const CallUpContainer = styled.div({
  display: "flex",
  gap: "15px",
  marginBottom: "30px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const CallUpButton = styled.a({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 18px",
  background: "#1abc9c",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "0.3s",

  "&:hover": {
    background: "#16a085",
    transform: "translateY(-2px)",
  },
});

export const ContactName = styled.span({
  fontWeight: "bold",
  color: "#0b0628",
}); 

export const Footer = styled.p({
  marginTop: "40px",
  fontSize: "12px",
  color: "#1abc9c",
});
