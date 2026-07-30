import { styled }from '@mui/material/styles';
import { Avatar, IconButton } from '@mui/material';

export const HeroContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const CarouselWrapper = styled("div")({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  height: "clamp(250px, 40vw, 500px)",
});
// export const CarouselWrapper = styled("div")(({ theme }) => ({
//   position: "relative",
//   width: "100%",
//   aspectRatio: "4 / 3",

//   [theme.breakpoints.up("md")]: {
//     aspectRatio: "16 / 9",
//   },

//   overflow: "hidden",
// }));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  [theme.breakpoints.up("md")]: {
    height: "100%",
  },

  [theme.breakpoints.up("sm")]: {
    height: "100%",
  },

}));
export const ArrowButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'left',
})<{ left?: boolean }>(({ left }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [left ? 'left' : 'right']: 10,
  backgroundColor: 'rgba(0,0,0,0.3)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}));

export const DotsContainer = styled('div')({
  position: 'absolute',
  bottom: 10,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 8,
});

export const Dot = styled('div')<{ active: boolean }>(({ active }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? '#000' : '#bbb',
  cursor: 'pointer',
}));

export const AvatarContainer = styled('div')({
  marginTop: '-35px',
  marginLeft: '20px',
});

export const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  cursor: 'pointer',
  objectFit: 'cover',
  border: '2px solid #fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 600px)': {
    width: 80,
    height: 80,
  },
  '@media (max-width: 960px)': {
    width: 100,
    height: 100,
  },
});
