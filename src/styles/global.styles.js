import theme from "./theme";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    "@global": {
      html: {
        scrollBehavior: "smooth",
      },
      "#overlay": {
        background: "rgb(4,6,20)",
        background:
          "linear-gradient(90deg, rgba(39, 66, 138, 0.9) 0%, rgba(45, 75, 156, 0.85) 100%)",
      },
      ".grey": {
        backgroundColor: "#fafafa",
      },
      a: {
        textDecoration: "none !important",
        color: theme.palette.text.secondary,
      },
      ".MuiStepIcon-text": {
        fill: "#fff !important",
        color: "#fff !important",
      },
      ".MuiStepIcon-root": {
        color: theme.palette.secondary.main,
      },
      ".MuiTooltip-tooltip": {
        backgroundColor: theme.palette.secondary.dark + "E0",
      },
      ".MuiTooltip-arrow": {
        color: theme.palette.secondary.dark + "E0",
      },
      ".MuiButton-root": {
        borderRadius: 2,
      },
      // Box shadows
      ".elevate-1": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
      },
      ".elevate-2": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
      },
      ".elevate-3": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
      },
      ".elevate-4": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
      },
      ".elevate-5": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 5px 8px 0px, rgb(0 0 0 / 12%) 0px 1px 14px 0px",
      },
      ".elevate-6": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
      },
      ".elevate-7": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 4px 5px -2px, rgb(0 0 0 / 14%) 0px 7px 10px 1px, rgb(0 0 0 / 12%) 0px 2px 16px 1px",
      },
      ".elevate-8": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px",
      },
      ".elevate-9": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 5px 6px -3px, rgb(0 0 0 / 14%) 0px 9px 12px 1px, rgb(0 0 0 / 12%) 0px 3px 16px 2px",
      },
      ".elevate-10": {
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 6px 6px -3px, rgb(0 0 0 / 14%) 0px 10px 14px 1px, rgb(0 0 0 / 12%) 0px 4px 18px 3px",
      },
      ".overline": {
        fontSize: "1.1rem !important",
        letterSpacing: ".15rem !important",
        fontWeight: "700 !important",
        [theme.breakpoints.down("sm")]: {
          fontSize: "1rem !important",
          letterSpacing: ".1rem !important",
        },
        // [theme.breakpoints.down("xs")]: {
        //   fontSize: ".8rem !important",
        //   letterSpacing: ".08rem !important",
        // },
      },
      ".MuiTypography-h1": {
        [theme.breakpoints.down("xs")]: {
          fontSize: "3.7rem",
        },
      },
      ".overline-lg": {
        fontSize: "1.5rem !important",
        lineHeight: "1.8rem !important",
        letterSpacing: ".2rem !important",
        fontWeight: "700 !important",
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.25rem !important",
          letterSpacing: ".1rem !important",
          lineHeight: ".1.55rem !important",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: ".9rem !important",
          letterSpacing: ".08rem !important",
          lineHeight: ".9rem !important",
        },
      },
      ".subheader": {
        fontSize: "2.8rem !important",
        fontWeight: "700 !important",
        lineHeight: "2.8rem !important",
      },
      ".sub-subheader": {
        fontSize: "2.2rem !important",
        fontWeight: "700 !important",
        lineHeight: "2.4rem !important",
      },
      ".text-flex": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
          marginRight: ".5rem",
        },
      },
      ".padding": {
        padding: `${theme.spacing(8)}px 0`,
      },
      ".padding-lg": {
        padding: `${theme.spacing(12)}px 0`,
      },
      ".icon-root": {
        textAlign: "center",
      },
      ".icon-img": {
        display: "flex",
        height: "inherit",
        width: "inherit",
      },
      ".container": {
        width: "100%",
        display: "block",
        boxSizing: "border-box",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 16,
        paddingRight: 16,
        [theme.breakpoints.up("xs")]: {
          maxWidth: "100vw",
        },
        [theme.breakpoints.up("lg")]: {
          maxWidth: "87.5vw",
        },
        [theme.breakpoints.up("xl")]: {
          maxWidth: 1678,
        },
      },
      ".text_primary": {
        color: theme.palette.primary.main,
      },
      ".text_secondary": {
        color: theme.palette.secondary.lighter,
      },
      ".MuiButton-containedPrimary": {
        color: "#fff !important",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
