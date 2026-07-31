import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageContainer = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});


export const Title = styled("h1")(() => ({
  fontSize: "24px",
  color: "#333",
}));

export const Cards = styled(Link)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: '#333',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  width: '146px',
  height: '82px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  "@media (max-width: 600px)": {
    padding: '0.6rem',
    width: '110px',
  },
});

export const CardsContainer = styled('div')(()=>({
  display: 'flex',
  gap: '1.5rem',
  marginTop: '14px',  
  justifyContent: 'center',
  "@media (max-width: 600px)": {
    gap: '0.5rem',
    marginTop: '4px',
  },

}))

export const TitleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const TitleText = styled('h1')(() => ({
  fontSize: '20px',
  color: 'rgba(4, 47, 81, 0.9)',
  "@media (max-width: 600px)": {    
    fontSize: '18px',
  }
}));

export const NotificationIconWrapper = styled("div")({
  position: "relative",
  display: "inline-block",
});

export const NotificationDot = styled("span")({
  position: "absolute",
  top: 0,
  right: 0,
  width: "15px",
  height: "15px",
  backgroundColor: "green",
  borderRadius: "50%",
  border: "2px solid white",
});

export const FooterContainer = styled("div")({
  marginTop: "auto",
  display: "flex",
  justifyContent: "center",
  width: "100%",

  "@media (max-width: 600px)": {
    marginTop: "auto",
  },
});

export const UpdateInfo = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  fontSize: "14px",
  color: "#f41509",
  fontWeight: 500,
});

export const LiveDot = styled("span")({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#2e7d32",
  animation: "pulse 1.5s infinite",

  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "50%": {
      transform: "scale(1.3)",
      opacity: 0.6,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
});

export const SponsorContainer = styled("div")(({
  width: "100%",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  border: "1px solid rgba(4,47,81,0.1)",

  transition: "all 0.3s ease",

  "@media (max-width: 600px)": {
    borderRadius: "14px",
  },
}));
