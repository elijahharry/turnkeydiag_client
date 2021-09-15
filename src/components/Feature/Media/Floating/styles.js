import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  img_holder: {
    position: "relative",
    width: "100%",
    height: "100%",
    marginBottom: -10,
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  holder_has_shadow: {
    "& div": {
      maxHeight: "97%",
      maxWidth: "97%",
      overflow: "visible !important",
    },
  },
  img: {
    transition: "opacity 600ms, transform 500ms",
  },
  img_hide: {
    opacity: 0,
    // transform: "scale(20%) translateY(1000px)",
  },
  img_show: {
    opacity: 1,
    // transform: "scale(1) translateY(0px)",
  },
  shadow_primary__right: {
    filter: `drop-shadow(5px 5px 0 ${theme.palette.primary.main})`,
  },
  shadow_primary__left: {
    filter: `drop-shadow(-5px 5px 0 ${theme.palette.primary.main})`,
  },
  shadow_secondary__right: {
    filter: `drop-shadow(5px 5px 0 ${theme.palette.secondary.main})`,
  },
  shadow_secondary__left: {
    filter: `drop-shadow(-5px 5px 0 ${theme.palette.secondary.main})`,
  },

  // START VIDEO
  thumbnail: {
    transition: "opacity 600ms, transform 500ms",
    filter: "blur(20px)",
    transform: "scale(1.1)",
    zIndex: 2,
  },
  vid_holder: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  holder_lg: {
    width: "100%",
    height: "100%",
  },
  holder_default: {
    width: "90%",
    height: "90%",
  },
  vid: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 2,
    overflow: "hidden",
    borderRadius: "50%",
    animation: "$blob-change 30s linear infinite",
    transition: "border-radius 300ms",
    maxHeight: 580,
  },
  blob: {
    position: "absolute",
    overflow: "hidden",
    borderRadius: "50%",
  },
  blob_lg: {
    height: "100%",
    width: "100%",
    animation: "$blob-change 30s linear infinite",
    maxHeight: 580,
    zIndex: 1,
  },
  blob_default: {
    transform: "scale(1.05) translateX(5px)",
  },
  blob_flipped: {
    transform: "scale(1.05) translateX(-5px)",
  },
  blob_backdrop: {
    width: "110%",
    height: "110%",
  },
  fit_right: {
    objectPosition: "right",
    objectFit: "cover",
    "& video": {
      objectFit: "cover",
      objectPosition: "right",
      minWidth: "50%",
    },
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 4,
    transition: "backdrop-filter 800ms",
  },
  overlay_blur: {
    backdropFilter: "blur(25px)",
  },
  overlay_unblur: {
    backdropFilter: "blur(0)",
  },
  fit_center: {
    objectPosition: "center",
    objectFit: "cover",
    "& video": {
      objectPosition: "center",
      objectFit: "cover",
    },
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
}));
