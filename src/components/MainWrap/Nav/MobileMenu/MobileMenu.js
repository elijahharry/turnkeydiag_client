import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import panels from "@constants/panels";

import {
  IconButton,
  SwipeableDrawer,
  ListSubheader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Collapse,
} from "@material-ui/core";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import DescriptionIcon from "@material-ui/icons/Description";

const MobileMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon color="secondary" className={classes.icon_menu} />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <nav className={classes.drawer}>
          <img src="/img/logo-dark.svg" className={classes.logo} />
          <List
            component="nav"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                align="center"
              >
                Use the links below to navigate.
              </ListSubheader>
            }
            className={classes.menu}
          >
            <ListItem button onClick={handleExpand}>
              <ListItemAvatar>
                <div className={classes.avatar}>
                  <LocalHospitalIcon />
                  <div className={classes.avatar_back}>
                    <Image
                      src="/img/panels/page-content/pcr-lab.jpg"
                      height={70}
                      width={70}
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </ListItemAvatar>
              <ListItemText primary="Our Tests" />
              {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expand} timeout="auto" unmountOnExit>
              <nav className={classes.panels}>
                <List disablePadding>
                  {panels.map((panel) => (
                    <Link href={`/panels/${panel.slug}`} passHref>
                      <a className="a" onClick={handleClick}>
                        <ListItem button className={classes.nested}>
                          <ListItemAvatar>
                            <div className={classes.avatar_sm}>
                              <div className={classes.avatar_back}>
                                <Image
                                  src={`/img/panels/${panel.img.src}`}
                                  height={70}
                                  width={70}
                                  objectFit="cover"
                                  placeholder="blur"
                                  blurDataURL={panel.img.blur}
                                  objectPosition="center"
                                />
                              </div>
                            </div>
                          </ListItemAvatar>
                          <ListItemText primary={panel.title} />
                        </ListItem>
                      </a>
                    </Link>
                  ))}
                </List>
              </nav>
            </Collapse>
            <Link href="/about" passHref>
              <a className="a" onClick={handleClick}>
                <ListItem button fullWidth>
                  <ListItemAvatar>
                    <div className={classes.avatar}>
                      <InfoIcon />
                      <div className={classes.avatar_back}>
                        <Image
                          src="/img/panels/page-content/blood-b.jpg"
                          height={100}
                          width={100}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="About" />
                </ListItem>
              </a>
            </Link>
            <Link href="/clients" passHref>
              <a className="a" onClick={handleClick}>
                <ListItem button fullWidth>
                  <ListItemAvatar>
                    <div className={classes.avatar}>
                      <PeopleAltIcon />
                      <div className={classes.avatar_back}>
                        <Image
                          src="/img/panels/page-content/pad-b.jpg"
                          height={100}
                          width={100}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="Clients" />
                </ListItem>
              </a>
            </Link>
            <Link href="/blog" passHref>
              <a className="a" onClick={handleClick}>
                <ListItem button fullWidth>
                  <ListItemAvatar>
                    <div className={classes.avatar}>
                      <DescriptionIcon />
                      <div className={classes.avatar_back}>
                        <Image
                          src="/img/panels/page-content/uti-b.jpg"
                          height={100}
                          width={100}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="Blog" />
                </ListItem>
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="a" onClick={handleClick}>
                <ListItem button fullWidth>
                  <ListItemAvatar>
                    <div className={classes.avatar}>
                      <PhoneIcon />
                      <div className={classes.avatar_back}>
                        <Image
                          src="/img/panels/page-content/tox-b.jpg"
                          height={100}
                          width={100}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="Contact" />
                </ListItem>
              </a>
            </Link>
          </List>
        </nav>
      </SwipeableDrawer>
    </>
  );
};

export default MobileMenu;
