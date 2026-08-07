import { styled } from '@mui/material/styles';
import theme from '../../theme';
import { IconButton } from "@mui/material";

export const Container = styled("div") ({
  maxWidth: "60rem",
  padding: "10px",
  alignItems: 'center',
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});

export const Image = styled("img") ({
  width: "100%",
  maxWidth: "35rem",
  height: "auto",
  objectFit: "contain",
  borderRadius: "10%",
  marginBottom: "0.5rem",

  "@media (max-width: 600px)": {
    maxWidth: "10rem",
  },
  "@media (max-width: 900px)": {
    maxWidth: "30rem",
  },
  "@media (max-width: 1200px)": {
    maxWidth: "32rem",
  },
});

export const Title = styled("h2") ({
  fontSize: "35px",
  color: "rgba(4, 47, 81, 0.9)",
  marginBottom: "4px",
  margin: "0 auto",
  fontWeight: "bold",
  textTransform: "uppercase",
});

export const InfoBox = styled("div") ({
  textAlign: "left",
  padding: "0 16px",
  "@media (max-width: 400px)": {
    padding: "0 8px",
  },
});

export const InfoText = styled("p") ({
  fontSize: "16px",
  margin: "8px 0",
});

export const Label = styled("span") ({
  fontWeight: "bold",
  color: "rgba(4, 47, 81, 0.9)",
});

export const ButtonContainer = styled("div")({
  marginTop: "16px",
  display: "flex",
  justifyContent: "center",
  gap: "3rem",
  flexWrap: "wrap",

  "@media (max-width: 900px)": {
    flexDirection: "row",
    justifyContent: "between",
    gap: "0.5rem",
  },

  "& button": {
    minWidth: "150px",
    fontSize: "1rem",
    "@media (max-width: 900px)": {
      flex: 1,
      minWidth: "0",
      fontSize: "0.6rem", 
      padding: "6px 8px",
    },
  },
});
export const InfoContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#f5f5f5',
  justifyContent: 'space-around',
  "@media (max-width: 600px)": {
    padding: '5px',
  },
  "@media (max-width: 400px)": {
    padding: '2px',
    justifyContent: 'space-between',
  }
}));

export const ImageBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));
export const Logo = styled('img')(() => ({
  width: '8rem',
  borderRadius: '20%',
}));

export const NoValid = styled('div')({
  marginTop: '4rem',
  padding: '4rem',
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center',
  gap: '1.5rem',
});

export const HeaderCard = styled('div')({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'space-between',
  gap: '4rem',
  justifyContent: 'center',
  width: '100%',
  "@media (max-width: 600px)": {
    gap: '1rem',
  },
}); 

export const HomeButton = styled(IconButton)({
  backgroundColor: "rgba(4, 47, 81, 0.1)",
  borderRadius: "12px",
  padding: "10px",
  "&:hover": {
    backgroundColor: "rgba(4, 47, 81, 0.2)",
  },
});
export const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const EnabledPlayer = styled("div")({  
  backgroundColor: "#05f519",
  padding: "0.5rem 1rem",
  borderRadius: "12px",
  fontWeight: "bold",
  display: "inline-block",
})