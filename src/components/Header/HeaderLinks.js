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

import thechosenoneLogo from "assets/img/thechosenone-logo.png";
import epicLogo from "assets/img/epic-logo.png";
import iChipsLogo from "assets/img/iChips-logo.png";
import powerdefi from "assets/img/powerdefi.png";
import Powerminer from "assets/img/Powerminer.png";
import vdcLogo from "assets/img/vdc-logo.png";

const useStyles = makeStyles(styles);

const links = [
  { title: "Home", href: "" },
  { title: "Swap", href: "swap" },
  { title: "Liquidity", href: "liquidity" },
  { title: "Farming", href: "farming" },
  { title: "Treasury", href: "treasury" },
];

// const links = [
//   { title: "Per Airdrop Claim!", href: "per-airdrop-claim" },
//   { title: "Pmine loans", href: "pmine-loans" },
//   { title: "Create IOST account", href: "https://sonata.asia/accountCreation" },
//   { title: "IMATCH", href: "imatch" },
//   { title: "whitepaper", href: "powermine-whitepaper" },
//   { title: "swap-iost/trx", href: "https://coinswitch.co/?ref=O86FUWI24E" },
// ];

// const imgRows = [
//   { id: "thechosenone", title: "TheChosenOne!", href: "thechosenone", img: iconLink1, width: 150, margin: -5 },
//   { id: "epic", title: "EPIC!", href: "epic", img: iconLink2, width: 134, margin: -20 },
//   { id: "ichips", title: "ICHIPS!", href: "iChips", img: iconLink3, width: 150, margin: -15 },
//   { id: "powerdefi", title: "Powermine warriors get ready!", href: "powerdef.io", img: iconLink4, width: 200, margin: -15 },
//   { id: "powermine", title: "Powermine warriors get ready!!", href: "", img: iconLink5, width: 200, margin: -15 },
// ];

const btnStyle = {
  display: "inline-block",
  fontWeight: "400",
  // color: "#212529",
  textAlign: "center",
  verticalAlign: "middle",
  color: "#17a2b8",
  borderColor: "#17a2b8",
  // webkit - user - select: none,
  // -moz - user - select: none,
  // -ms - user - select: none,
  // user - select: none,
  backgroundColor: "transparent",
  border: "1px solid",
  padding: ".375rem .75rem",
  fontSize: "1rem",
  lineHeight: "1.5",
  borderRadius: ".25rem"
}

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.list} style={{'display':'flex', 'justifyContent':'center'}}>
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
            href=""
            target="_blank"
            color="transparent"
            className={classes.navLink}
            // style={{ color: '#17a2b8', borderColor: '#17a2b8', border: '1px solid' }}
            style={btnStyle}
          >
            Connect
          </Button>
        </ListItem>
      </List>
      <div className="top-wrapper" style={{'background':'transparent'}} id="top">
        <div className="header-wrapper">
            <header className="header header__fixed" id="header">
                <div className="header-main">
                    <div className="header-main-container">
                        <nav className="navbar">
                            {/* <div className="navbar-header">
                                <div className="logo">
                                    <a href="/vdc" rel="home">
                                        <img src={vdcLogo} alt="profile"  title="Powermine warriors get ready!"/>
                                    </a>
                                </div>
                            </div> */}
                            <div id="main-nav" className="navbar-holder collapse navbar-collapse">
                                <div className="menu-header-menu-container">
                                    <ul id="menu-header-menu" className="nav navbar-nav text-center">
                                        {/* <li id="menu-item-134"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-134">
                                            <a href="/per-airdrop-claim" aria-current="page">
                                                Per Airdrop Claim
                                            </a>
                                        </li>
                                        <li id="menu-item-133"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-133">
                                            <a href="/pmine-loans" aria-current="page">
                                                PMINE LOANS
                                            </a>
                                        </li>

                                        <li id="menu-item-135"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-135">
                                            <a href="https://sonata.asia/accountCreation" aria-current="page"
                                              target="_blank">
                                                Create IOST Account
                                            </a>
                                        </li>

                                        <li id="menu-item-143"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-143">
                                            <a href="/imatch" aria-current="page">IMATCH</a></li>
                                        <li id="menu-item-136"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-136">
                                            <a href="/powermine-whitepaper/">WHITEPAPER</a></li>
                                        <li id="menu-item-142"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142">
                                            <a href="https://coinswitch.co/?ref=O86FUWI24E" target="_blank">SWAP-IOST/TRX</a>
                                        </li>
                                        <li id="menu-item-139" style={{'display': 'none'}}
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-139">
                                            <a href="/powermine-admin/" aria-current="page">ADMIN</a>
                                        </li>
                                        <li id="menu-item-1399" style={{'display': 'none'}}
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1399">
                                            <a href="/admin-vdc/" aria-current="page">ADMIN for VDC</a>
                                        </li> */}
                                        {/* <li id="menu-item-140"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-140">
                                            <a href="https://t.me/powermine_club" aria-current="page"
                                              target="_blank"><img
                                                        src="/images/telegram-icon.png" width="25"/></a>
                                        </li>
                                        <li id="menu-item-144"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-141">
                                            <a href="https://discord.gg/M8XXzGy" aria-current="page"
                                              target="_blank"><img
                                                        src="/images/Discord-logo.png" width="25"/></a>
                                        </li> */}
                                        <br style={{'clear':'both'}} />
                                        <li id="menu-item-144"
                                            className="menu-img menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-144">
                                            <a href="/thechosenone" aria-current="page">
                                                <img src={thechosenoneLogo}  alt="igoose" title="TheChosenOne!" style={{'width':'150px', 'margin-top':'-5px'}} className="igoose-logo"/>
                                            </a></li>
                                        <li id="menu-item-149"
                                            className="menu-img menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-149">
                                            <a href="/epic" aria-current="page">
                                                <img src={epicLogo}   alt="epic" title="EPIC!" style={{'width':'134px', 'margin-top':'-20px'}} className="epic-logo"/>      
                                            </a></li>
                                        <li id="menu-item-148"
                                            className="menu-img menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-144">
                                            <a href="/iChips" aria-current="page">
                                                <img src={iChipsLogo} alt="iChips" title="ICHIPS!" style={{'width':'150px', 'margin-top':'-15px'}} className="ichips-logo"/>
                                            </a></li>
                                        <li id="menu-item-146"
                                            className="menu-img menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-146">
                                            <a href="http://powerdefi.io/" target="_blank">
                                              <img src={powerdefi}   alt="powermine" title="Powermine warriors get ready!" style={{'width':'200px', 'margin-top':'-15px'}} className="powerdefi-logo"/>              
                                            </a>
                                        </li>
                                        <li id="menu-item-147"
                                            className="menu-img menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-146">
                                            <a href="/">
                                              <img src={Powerminer} alt="powermine" title="Powermine warriors get ready!" style={{'width':'200px', 'margin-top':'-15px'}} className="powermine-logo"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="navbar-toggler toggler-right-0" type="button" data-toggle="collapse"
                                    data-target="#main-nav" aria-controls="navbarNavDropdown" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>

                    </div>
                </div>
            </header>
        </div>
   </div>
      {/* <List>
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
                <img src={row.img} alt="..." width={row.width} margin-top={row.margin}/>
                </Button>
              </Tooltip>
            </ListItem>
          ))
        }
      </List> */}
    </div>
  );
}
