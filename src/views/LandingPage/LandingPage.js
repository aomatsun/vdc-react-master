import React, {useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Snowfall from "react-snowfall"

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import image from "assets/img/vdc-background.jpg";
import vdcCompound from "assets/img/vdc-compound.png";
import vdcVolatile from "assets/img/vdc-volatile.png";
import vdcLogo from "assets/img/vdc-logo.png";
import thechosenoneLogo from "assets/img/thechosenone-logo.png";
import epicLogo from "assets/img/epic-logo.png";
import iChipsLogo from "assets/img/iChips-logo.png";
import powerdefi from "assets/img/powerdefi.png";
import Powerminer from "assets/img/Powerminer.png";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  
  useEffect(() => {
    if (document.getElementById("chart")) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [{
          "proName": "OANDA:SPX500USD",
          "title": "S&P 500"
        }, {
          "proName": "OANDA:NAS100USD",
          "title": "Nasdaq 100"
        }, {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        }, {
          "proName": "BITSTAMP:BTCUSD",
          "title": "BTC/USD"
        }, {
          "proName": "BITSTAMP:ETHUSD",
          "title": "ETH/USD"
        }],
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "in"
    });
    document.body.appendChild(script);;
    }
  }, []);
  const compound= [
    { address: "ry26ds*",  amount: "1.78", staked: "71.15%"},
    { address: "master*",  amount: "0.67", staked: "26.74%"},
    { address: "intrna*",  amount: "0.03", staked: "1.14%"},
    { address: "ghost3*",  amount: "0.01", staked: "0.52%"},
    { address: "ightcg*",  amount: "0.00", staked: "0.16%"},
    { address: "hwdebo*",  amount: "0.00", staked: "0.15%"},
    { address: "edmiw3*",  amount: "0.00", staked: "0.04%"},
    { address: "poopys*",  amount: "0.00", staked: "0.03%"},
    { address: "fuufuu*",  amount: "0.00", staked: "0.02%"},
    { address: "mastod*",  amount: "0.00", staked: "0.02%"}
  ];
  const volatile= [
    { address: "ry26ds*",  amount: "1.78", staked: "71.15%"},
    { address: "master*",  amount: "0.67", staked: "26.74%"},
    { address: "intrna*",  amount: "0.03", staked: "1.14%"},
    { address: "ghost3*",  amount: "0.01", staked: "0.52%"},
    { address: "ightcg*",  amount: "0.00", staked: "0.16%"},
    { address: "hwdebo*",  amount: "0.00", staked: "0.15%"},
    { address: "edmiw3*",  amount: "0.00", staked: "0.04%"},
    { address: "poopys*",  amount: "0.00", staked: "0.03%"},
    { address: "fuufuu*",  amount: "0.00", staked: "0.02%"},
    { address: "mastod*",  amount: "0.00", staked: "0.02%"}
  ];
  const { ...rest } = props;
  return (
    // <div style={{backgroundImage: "url(" + image + ")"}}>
    <div className={classes.container}>
      <Snowfall color="yellow" speed="100" />
      <Header
        color="transparent"
        background={vdcLogo}
        routes={dashboardRoutes}
        brand={ <img src={vdcLogo} alt="profile" style={{float:'left',height:'100px', marginTop:'10px'}} />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <div class="Uniswap container" style={{'padding-top':'0%'}}>
        <div className="row text-center margin-auto">
                <div className="col-md-12">
                    <h1 className="componenet-title">PMINE</h1>
                    <h1 className="componenet-title">Virtual Deposit Contracts</h1>
                </div>
            </div>
            <div className="row text-center margin-auto" style={{'padding-top': '25px'}}>
                <div className="col-md-6 col-md-offset-3 vdc-balance-div">
                    <p className="text-white margin-bottom-zero" style={{'display': 'flex','justify-content': 'space-between'}}>IOST
                        Balance : <span id="iostBalance">0</span></p>
                    <p className="text-white margin-bottom-zero" style={{'display': 'flex','justify-content': 'space-between'}}>PMINE
                        Balance : <span id="pmineBalance">0</span></p>
                    <p className="text-white margin-bottom-zero" style={{'display': 'flex','justify-content': 'space-between'}}>PER
                        Balance : <span id="perBalance">0</span></p>
                </div>
            </div>
            <div className="row margin-auto">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="loans-page_orange-color" style={{'margin-bottom': '0px'}}>COMPOUND</h2>
                            <p className="loans-page_orange-color">1% PMINE Daily drip pool</p>
                        </div>
                    </div>

                    <div className="row text-center vdc-alert" id="statusVDC1Msg">
                    </div>

                    <div className="uniswap-container">
                        <div className="swap">
                            <form action="" autocomplete="off">
                                <div className="containers">
                                    <div className="row text-center">
                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc1-deposit-amount" />
                                            <br />
                                            <div align="center" style={{'margin-top': '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                   id="vdc1-deposit-btn">
                                                    <div className="default">Deposit</div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                          <img src={vdcCompound} alt="profile" style={{height:'70px', marginTop:'10px'}}/>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc1-withdraw-amount" />
                                            <br/>
                                            <div align="center" style={{'margin-top': '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                   id="vdc1-withdraw-btn">
                                                    <div className="default">Withdraw</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-6 col-md-offset-3">
                                        <b className="loans-page_orange-color">YOUR HOLDINGS</b>
                                        <br/>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-6 col-md-offset-3" id="pmine-holdings-1">
                                        <p className="loans-page_orange-color"><span
                                                    id="vdc1-holding-pmine">0.00000000</span> PMINE</p>
                                    </div>
                                </div>

                                <div align="center">
                                    <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                       id="vdc1-claim-btn">
                                        <div className="default">CLAIM REWARDS</div>
                                    </a>
                                   

                                    <div className="row text-center">
                                        <div className="col-md-6 col-md-offset-3">
                                            <b className="loans-page_orange-color">YOUR REWARDS</b>
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="row text-center">
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{'margin-bottom': '0px'}}>PMINE</p>
                                            <p className="loans-page_orange-color" id="vdc1-pmine-reward">0.00000000</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{'margin-bottom': '0px'}}>IOST</p>
                                            <p className="loans-page_orange-color" id="vdc1-iost-reward">0.00000000</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="loans-page_orange-color" style={{'margin-bottom': '0px'}}>PER</p>
                                            <p className="loans-page_orange-color" id="vdc1-per-reward">0.00000000</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <p className="loans-page_orange-color">
                                <b className="loans-page_orange-color">Total PMINE In Contract : </b> <span
                                        id="totalPmineVDC1">0.00000000</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="loans-page_orange-color" style={{'margin-bottom': '0px'}}>VOLATILE</h2>
                            <p className="loans-page_orange-color">5% PMINE Daily drip pool</p>
                        </div>
                    </div>

                    <div className="row text-center vdc-alert" id="statusVDC2Msg">
                    </div>

                    <div className="uniswap-container">
                        <div className="swap">
                            <form action="" autocomplete="off">
                                <div className="containers">
                                    <div className="row text-center">
                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc2-deposit-amount" />
                                            <br/>
                                            <div align="center" style={{'margin-top': '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                   id="vdc2-deposit-btn">
                                                    <div className="default">Deposit</div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <img src={vdcVolatile} alt="profile" style={{height:'70px', marginTop:'10px'}}/>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <input type="number" placeholder="0.0" id="vdc2-withdraw-amount"/>
                                            <br />
                                            <div align="center" style={{'margin-top': '10px'}}>
                                                <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                                   id="vdc2-withdraw-btn">
                                                    <div className="default">Withdraw</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-6 col-md-offset-3">
                                        <b className="loans-page_orange-color">YOUR HOLDINGS</b>
                                        <br/>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <div className="col-md-6 col-md-offset-3" id="pmine-holdings-1">
                                        <p className="loans-page_orange-color"><span
                                                    id="vdc2-holding-pmine">0.00000000</span> PMINE</p>
                                    </div>
                                </div>

                                <div align="center">
                                    <a href="javascript:void(0);" className="rocket-button gold-rocket-button"
                                       id="vdc2-claim-btn">
                                        <div className="default">CLAIM REWARDS</div>
                                    </a>
                                  
                                    <div className="row text-center">
                                        <div className="col-md-6 col-md-offset-3">
                                            <b className="loans-page_orange-color">YOUR REWARDS</b>
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="row text-center">
                                        <div className="col-md-4 col-md-offset-4" id="unclaimed-pmine-1">
                                            <p className="loans-page_orange-color" style={{'margin-bottom': '0px'}}>PMINE</p>
                                            <p className="loans-page_orange-color" id="vdc2-pmine-reward">0.00000000</p>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <p className="loans-page_orange-color">
                                <b className="loans-page_orange-color">Total PMINE In Contract : </b> <span
                                        id="totalPmineVDC2">0.00000000</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        <GridContainer style={{margin:'auto'}}>
          <GridItem xs={4} sm={4} md={3} className="text-center">
            <table className="table-dark richlist-table margin-auto">
              <thead>
                <tr>
                  <th scope="col" data-label="RANK">RANK</th>
                  <th scope="col" data-label="ADDRESS">ADDRESS</th>
                  <th scope="col" data-label="AMOUNT">AMOUNT</th>
                  <th scope="col" data-label="HOLDING">STAKED</th>
                </tr>
              </thead>
              <tbody id="compound-richlist-table-body">
              {
                compound.map((row, index) => (
                  <tr>
                    <td scope="col" data-label="RANK">{index}</td>
                    <td scope="col" data-label="ADDRESS">{row.address}</td>
                    <td scope="col" data-label="AMOUNT">{row.amount}</td>
                    <td scope="col" data-label="HOLDING">{row.staked}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </GridItem>
          <GridItem xs={4} sm={4} md={6} className="text-center">
            <p className="loans-page_orange-color">
              <span style={{'font-size': '1.3rem', 'font-weight': 'bold'}}>PMINE Virtual Deposit Contract fee's and information</span><br/>
                Compound VDC fees are 11% in and 11% out, they<br/>
                are distributed in the following way:<br/>
                8% to drip pool<br/>
                1% PMINE Bankroll<br/>
                1% Dev fee<br/>
                1% Volatile VDC<br/>
                Receives IOST and PER divs daily from PMINE staking<br/><br/>

                Volatile VDC fees are 33% in and 33% out, they are<br/>
                distributed in the following way:<br/>
                30% to drip pool<br/>
                2% PMINE Bankroll<br/>
                1% Dev fee<br/>
                Does not receive IOST and PER divs daily but does<br/>
                receive 1% of all PMINE deposited into Compound VDC<br/><br/>

                THIS DECENTRALIZED APPLICATION HAS BEEN MADE<br/>
                FOR ENTERTAINMENT PURPOSES AND IS A GAME, NOT<br/>
                AN INVESTMENT PLATFORM. NO GUARANTEES OR<br/>
                WARRANTIES ARE ISSUED TO ANY PARTICIPANTS.<br/>
                PLEASE DO NOT PARTICIPATE IN THIS GAME IF IT IS NOT<br/>
                LEGAL TO DO SO IN YOUR PARTICULAR LOCALITY.</p>
          </GridItem>
          <GridItem xs={4} sm={4} md={3} className="text-center">
            <table className="table-dark richlist-table margin-auto">
              <thead>
                <tr>
                  <th scope="col" data-label="RANK">RANK</th>
                  <th scope="col" data-label="ADDRESS">ADDRESS</th>
                  <th scope="col" data-label="AMOUNT">AMOUNT</th>
                  <th scope="col" data-label="HOLDING">STAKED</th>
                </tr>
              </thead>
              <tbody id="volatile-richlist-table-body">
              {
                volatile.map((row, index) => (
                  <tr>
                    <td scope="col" data-label="RANK">{index}</td>
                    <td scope="col" data-label="ADDRESS">{row.address}</td>
                    <td scope="col" data-label="AMOUNT">{row.amount}</td>
                    <td scope="col" data-label="HOLDING">{row.staked}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
