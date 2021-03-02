/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import telegram from "assets/img/telegram-icon.png";
import discord from "assets/img/Discord-logo.png";

import iconLink1 from "assets/img/thechosenone-logo.png";
import iconLink2 from "assets/img/epic-logo.png";
import iconLink3 from "assets/img/iChips-logo.png";
import iconLink4 from "assets/img/powerdefi.png";
import iconLink5 from "assets/img/Powerminer-logo.png";

const useStyles = makeStyles(styles);

const links = [
  { title: "Per Airdrop Claim!", href: "per-airdrop-claim" },
  { title: "Pmine loans", href: "pmine-loans" },
  { title: "Create IOST account", href: "https://sonata.asia/accountCreation" },
  { title: "IMATCH", href: "imatch" },
  { title: "whitepaper", href: "powermine-whitepaper" },
  { title: "swap-iost/trx", href: "https://coinswitch.co/?ref=O86FUWI24E" },
];

const imgRows = [
  { id: "thechosenone", title: "TheChosenOne!", href: "thechosenone", img: iconLink1 },
  { id: "epic", title: "EPIC!", href: "epic", img: iconLink2 },
  { id: "ichips", title: "ICHIPS!", href: "iChips", img: iconLink3 },
  { id: "powerdefi", title: "Powermine warriors get ready!", href: "powerdef.io", img: iconLink4 },
  { id: "powermine", title: "Powermine warriors get ready!!", href: "", img: iconLink5 },
];

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <div>
    <List className={classes.list}>
      {
        links.map((row, index) => (
          <ListItem className={classes.listItem}>
            <Button
              href={row.href}
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              {row.title}
            </Button>
          </ListItem>
        ))
      }
      <ListItem className={classes.listItem}>
        <Button
          href="https://t.me/powermineclub"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <img src={telegram} alt="..." width="25" />
          {/* <i className={classes.socialIcons + " fab fa-telegram"} /> */}
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://discord.gg/M8XXzGy"
          target="_blank"
          className={classes.navLink}
        >
          <img src={discord} alt="..." width="25" />
          {/* <i className={classes.socialIcons + " fab fa-discord"} /> */}
        </Button>
      </ListItem>
    </List>
    <List>
      {
        imgRows.map((row, index) => (
          <ListItem className={classes.listItem}>
            <Tooltip
              id={row.id}
              title={row.title}
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href={row.href}
                target="_blank"
                className={classes.navLink}
              >
              <img src={row.img} alt="..." width="150" />
              </Button>
            </Tooltip>
          </ListItem>
        ))
      }
    </List>
    </div>
  );
}
