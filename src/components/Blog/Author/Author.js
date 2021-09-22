import Image from "next/image";

import { Typography, Container, makeStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Author = ({ author }) => {
  const classes = useStyles();
  return (
    <section id="author" className={classes.section + " grey"}>
      <Container maxWidth="lg" className={classes.container}>
        {/* <Typography variant="h3">About the Author</Typography> */}
        <figure className={classes.author}>
          <Image
            src={author.avatar.url}
            width={140}
            height={140}
            objectFit="cover"
            objectPosition="center"
            className={classes.img}
          />
          <figcaption>
            <Typography variant="h4" className="text-flex">
              <strong>{`${author.firstName} ${author.lastName}`}</strong>
              <a
                href={author.seo.social.linkedIn}
                className={classes.social}
                target="_blank"
              >
                {author?.seo?.social && (
                  <ul className={classes.socials}>
                    {author.seo.social?.linkedIn && (
                      <li>
                        <a
                          href={author.seo.social.linkedIn}
                          className={classes.socials}
                          target="_blank"
                        >
                          <LinkedInIcon color="primary" fontSize="large" />
                        </a>
                      </li>
                    )}
                    {/* <li>
                      <Typography
                        variant="overline"
                        className={classes.author_text}
                        color="primary"
                      >
                        Author
                      </Typography>
                    </li> */}
                  </ul>
                )}
              </a>
            </Typography>
            <Typography variant="body1" className={classes.desc}>
              {author.description}
            </Typography>
            <Typography
              variant="overline"
              className={classes.author_text}
              color="primary"
            >
              Our Author
            </Typography>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
};

export default Author;

const useStyles = makeStyles((theme) => ({
  section: {
    padding: `${theme.spacing(5)}px 0`,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    borderRadius: "50%",
    border: `3px solid ${theme.palette.secondary.main} !important`,
    boxShadow: theme.shadows[2],
  },
  author: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBlock: 0,
    marginInline: 0,
    "& figcaption": {
      maxWidth: 500,
      margin: `0 ${theme.spacing(3)}px`,
      [theme.breakpoints.down("sm")]: {
        margin: `${theme.spacing(2)}px 0`,
      },
      "& h5": {
        marginTop: theme.spacing(0.5),
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center !important",
    },
  },
  author_text: {
    fontSize: "1rem",
    lineHeight: "1rem",
  },
  desc: {
    marginBottom: theme.spacing(0.5),
  },
  socials: {
    display: "flex",
    alignItems: "center",
    listStyleType: "none",
    marginBlock: 0,
    marginInline: 0,
    paddingInline: 0,
    "& li": {
      height: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  social: {
    marginLeft: theme.spacing(1.2),
    height: 30,
    width: 30,
    "& svg": {
      height: 30,
      width: 30,
    },
  },
}));
