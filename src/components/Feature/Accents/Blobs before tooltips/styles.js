import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  "@keyframes blob-change-2": {
    "0%": {
      borderRadius: "50%",
    },
    "25%": {
      borderRadius: "37% 63% 51% 49% / 37% 65% 35% 63%",
    },
    "50%": {
      borderRadius: "33% 67% 70% 30% / 30% 30% 70% 70%",
    },
    "75%": {
      borderRadius: "36% 64% 64% 36% / 64% 48% 52% 36%",
    },
    "100%": {
      borderRadius: "50%",
    },
  },
  "@keyframes blob-change-3": {
    "0%": {
      borderRadius: "50%",
    },
    "25%": {
      borderRadius: "36% 64% 64% 36% / 64% 48% 52% 36%",
    },
    "50%": {
      borderRadius: "33% 67% 70% 30% / 30% 30% 70% 70%",
    },
    "75%": {
      borderRadius: "37% 63% 51% 49% / 37% 65% 35% 63%",
    },
    "100%": {
      borderRadius: "50%",
    },
  },
  blobs: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blob: {
    position: "absolute",
    overflow: "hidden",
    borderRadius: "50%",
    backdropFilter: "blur(15px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "1px solid transparent",
  },
  icon: {
    width: "40%",
    height: "40%",
    position: "relative",
    zIndex: 2,
    opacity: 1,
    fill: "#fff",
    // filter: "drop-shadow(0px 0px 20px #000)",
  },
  blob_backdrop: {
    width: "160%",
    height: "160%",
    position: "absolute",
  },
  bottom_right: {
    animation:
      "$blob-change-2 20s linear infinite, $blob-rotate 15s linear infinite",
    maxHeight: 580,
    zIndex: 0,
    bottom: 50,
    right: 150,
    [theme.breakpoints.down("sm")]: {
      right: "-20px !important",
      bottom: "-20px !important",
    },
  },
  top_right: {
    animation:
      "$blob-change 40s linear infinite, $blob-rotate 15s linear infinite",
    maxHeight: 580,
    zIndex: 0,
    top: 80,
    right: 260,
    [theme.breakpoints.down("sm")]: {
      // right: "-10px !important",
      // top: "-10px !important",
      display: "none",
      visibility: "none",
    },
  },
  center_right: {
    animation:
      "$blob-change-3 20s linear infinite, $blob-rotate 25s linear infinite",
    maxHeight: 580,
    zIndex: 0,
    right: 50,
    [theme.breakpoints.down("sm")]: {
      display: "none",
      visibility: "none",
    },
  },
  top_left: {
    animation:
      "$blob-change-3 20s linear infinite, $blob-rotate 20s linear infinite",
    maxHeight: 580,
    zIndex: 0,
    top: 30,
    left: 150,
    [theme.breakpoints.down("sm")]: {
      top: "40vh !important",
      left: "10px !important",
    },
  },
  bottom_left: {
    animation:
      "$blob-change-3 20s linear infinite, $blob-rotate 40s linear infinite",
    maxHeight: 580,
    zIndex: 0,
    left: -30,
    "& img": {
      transform: "translateY(-10%)",
    },
    [theme.breakpoints.down("md")]: {
      height: "250px !important",
      width: "250px !important",
      bottom: "-125px !important",
      left: "-90px !important",
    },
  },
  bottom_center: {
    animation:
      "$blob-change-3 20s linear infinite, $blob-rotate 40s linear infinite",
    maxHeight: 580,
    zIndex: 0,
    bottom: 120,
    marginRight: 300,
  },

  "@keyframes blob-change": {
    "0%": {
      borderRadius: "50%",
    },
    "25%": {
      borderRadius: "33% 67% 70% 30% / 30% 30% 70% 70%",
    },
    "50%": {
      borderRadius: "37% 63% 51% 49% / 37% 65% 35% 63%",
    },
    "75%": {
      borderRadius: "36% 64% 64% 36% / 64% 48% 52% 36%",
    },
    "100%": {
      borderRadius: "50%",
    },
  },
  "@keyframes blob-rotate": {
    "0%": {
      transform: "rotate(0deg) translateX(20px) rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg) translateX(20px) rotate(-360deg)",
    },
  },
}));
