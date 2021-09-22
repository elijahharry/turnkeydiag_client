import Link from "next/link";
import parse from "html-react-parser";
import Image from "next/image";
import { Typography, Chip, makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import TodayIcon from "@material-ui/icons/Today";
import PersonIcon from "@material-ui/icons/Person";

const Post = ({ post, i }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link href={`/blog/${post.slug}`} passHref>
        <a>
          <div className={classes.post}>
            {post.featuredImage?.node?.sourceUrl && (
              <div className={classes.img}>
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  layout="responsive"
                  height={280}
                  width={400}
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="empty"
                />
                <ul className={classes.chips}>
                  <Chip
                    component="li"
                    label={post.date}
                    color="secondary"
                    icon={<TodayIcon />}
                  />
                  <Chip
                    component="li"
                    color="primary"
                    label={`${post.author.node.firstName} ${post.author.node.lastName}`}
                    icon={<PersonIcon />}
                  />
                </ul>
              </div>
            )}
            <div className={classes.content}>
              <Typography
                variant="h5"
                className={classes.title}
                dangerouslySetInnerHTML={{ __html: post.title }}
                gutterBottom
              />
              <Typography variant="body1" gutterBottom>
                {parse(post.excerpt)}
              </Typography>
              <Typography
                variant="overline"
                color="primary"
                className="text-flex keep-reading"
              >
                Keep reading <ArrowRightAltIcon />
              </Typography>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Post;

const useStyles = makeStyles((theme) => ({
  container: {
    flexBasis: "33%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "100%",
    },
  },
  img: {
    pointerEvents: "none",
    position: "relative",
    zIndex: 2,
    marginBottom: theme.spacing(0.5),
    backgroundColor: "#ececec",
  },
  post: {
    // backgroundColor: "#fff",
    // borderRadius: 10,
    overflow: "hidden",
    "& .keep-reading": {
      fontSize: "1rem",
      transition: "all 300ms",
    },
    "&:hover": {
      "& .keep-reading": {
        letterSpacing: ".3rem",
      },
    },
  },
  content: {
    padding: theme.spacing(1),
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontWeight: 600,
  },
  meta: {
    fontSize: ".85rem",
    color: theme.palette.primary.main,
    "& span": {
      color: theme.palette.primary.light,
    },
  },
  chips: {
    display: "flex",
    position: "absolute",
    zIndex: 5,
    bottom: -6,
    left: 8,
    marginBlock: 0,
    marginInline: 0,
    paddingInline: 0,
    listStyleType: "none",
    "& li": {
      marginRight: theme.spacing(1),
      color: "#fff",
      // boxShadow: theme.shadows[1],
      "& svg": {
        width: "1.4rem",
        height: "1.4rem",
        paddingLeft: 5,
      },
    },
  },
}));
