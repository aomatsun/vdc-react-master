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

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import image from "assets/img/vdc-background.jpg";
import vdcCompound from "assets/img/vdc-compound.png";
import vdcVolatile from "assets/img/vdc-volatile.png";
import vdcLogo from "assets/img/vdc-logo.png";
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
      <Header
        color="transparent"
        background={vdcLogo}
        routes={dashboardRoutes}
        brand={ <img src={vdcLogo} alt="profile" style={{float:'left',height:'70px', marginTop:'10px'}} />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
       
      <div style={{width:'60%', margin:'auto  '}}>
      <div className="text-center">
          <GridItem xs={12} sm={12} md={12}>
            <h1 className="componenet-title">PMINE</h1>
            <h1 className="componenet-title">Virtual Deposit Contracts</h1>
          </GridItem>
        </div>
        <div className="text-center" style={{'paddingTop': '25px'}}>
          <GridItem xs={12} sm={12} md={6} className="vdc-balance-div" style={{color:'white', display:'inline-block'}}>
            <p className="text-white margin-bottom-zero" style={{display: 'flex','justifyContent': 'space-between'}}>IOST
                Balance : <span id="iostBalance">0</span></p>
            <p className="text-white margin-bottom-zero" style={{display: 'flex','justifyContent': 'space-between'}}>PMINE
                Balance : <span id="pmineBalance">0</span></p>
            <p className="text-white margin-bottom-zero" style={{display: 'flex','justifyContent': 'space-between'}}>PER
                Balance : <span id="perBalance">0</span></p>
          </GridItem>
        </div>
        <GridContainer style={{margin:'auto'}}>
          <GridItem xs={12} sm={12} md={6}>
            <div className="text-center">
              <GridItem xs={12} sm={12} md={12}>
                <h2 className="loans-page_orange-color" >COMPOUND</h2>
                <p className="loans-page_orange-color">1% PMINE Daily drip pool</p>
              </GridItem>
            </div>
            <Card style={{ background:'#00000052'}}>
              <div className="text-center"style={{display:'flex', border:'1px solid white','borderRadius':'15px'}}>
                <GridItem xs={12} sm={12} md={4} style={{padding:'10px'}}>
                  <input type="number" className="input-theme" style={{marginBottom:'10px'}} placeholder="0.0" id="vdc1-withdraw-amount" />
                  <a className="rocket-button gold-rocket-button">
                    <div className="default">Deposit</div>
                  </a>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <img src={vdcCompound} alt="profile" style={{height:'70px', marginTop:'10px'}}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style={{padding:'10px'}}>
                  <input type="number" className="input-theme" style={{marginBottom:'10px'}} placeholder="0.0" id="vdc1-withdraw-amount" />
                  <a className="rocket-button gold-rocket-button">
                    <div className="default">WithDraw</div>
                  </a>                   
                </GridItem>
              </div>
              <div className="row text-center">
                <div className="col-md-6 col-md-offset-3">
                  <b className="loans-page_orange-color">YOUR HOLDINGS</b>
                  <br />
                </div>
              </div>
              <div className="text-center">
                  <p className="loans-page_orange-color">
                    <span >0.00000000</span> PMINE</p>
              </div>
              <div className="text-center">
                <a className="rocket-button gold-rocket-button">
                <div className="default">CLAIM REWARDS</div>
                </a>
                <b className="loans-page_orange-color">YOUR REWARDS</b>
                <div style={{display:'flex'}}>
                  <GridItem xs={12} sm={12} md={4}>
                  <p className="loans-page_orange-color">PMINE</p>
                  <p className="loans-page_orange-color">0.00000000</p>  
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <p className="loans-page_orange-color">PMINE</p>
                  <p className="loans-page_orange-color">0.00000000</p>  
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <p className="loans-page_orange-color">PMINE</p>
                  <p className="loans-page_orange-color">0.00000000</p>  
                  </GridItem>
                </div>
              </div>
            </Card>
            <div className="text-center">
              <p className="loans-page_orange-color">
                <b className="loans-page_orange-color">Total PMINE In Contract : </b> 
                <span>0.00000000</span>
              </p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
              <div className="text-center">
              <GridItem xs={12} sm={12} md={12}>
                <h2 className="loans-page_orange-color" >VOLATILE</h2>
                <p className="loans-page_orange-color">5% PMINE Daily drip pool</p>
              </GridItem>
            </div>
            <Card style={{ background:'#00000052'}}>
              <div className="text-center"style={{display:'flex', border:'1px solid white','borderRadius':'15px'}}>
                <GridItem xs={12} sm={12} md={4} style={{padding:'10px'}}>
                  <input type="number" className="input-theme" style={{marginBottom:'10px'}} placeholder="0.0" id="vdc1-withdraw-amount" />
                  <a className="rocket-button gold-rocket-button">
                    <div className="default">Deposit</div>
                  </a>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <img src={vdcVolatile} alt="profile" style={{height:'70px', marginTop:'10px'}}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style={{padding:'10px'}}>
                  <input type="number" className="input-theme" style={{marginBottom:'10px'}} placeholder="0.0" id="vdc1-withdraw-amount" />
                  <a className="rocket-button gold-rocket-button">
                    <div className="default">WithDraw</div>
                  </a>                   
                </GridItem>
              </div>
              <div className="row text-center">
                <div className="col-md-6 col-md-offset-3">
                  <b className="loans-page_orange-color">YOUR HOLDINGS</b>
                  <br />
                </div>
              </div>
              <div className="text-center">
                  <p className="loans-page_orange-color">
                    <span >0.00000000</span> PMINE</p>
              </div>
              <div className="text-center">
                <a className="rocket-button gold-rocket-button">
                <div className="default">CLAIM REWARDS</div>
                </a>
                <b className="loans-page_orange-color">YOUR REWARDS</b>
                <div style={{display:'flex'}}>
                  <GridItem xs={12} sm={12} md={4}>
                  <p className="loans-page_orange-color">PMINE</p>
                  <p className="loans-page_orange-color">0.00000000</p>  
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <p className="loans-page_orange-color">PMINE</p>
                  <p className="loans-page_orange-color">0.00000000</p>  
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <p className="loans-page_orange-color">PMINE</p>
                  <p className="loans-page_orange-color">0.00000000</p>  
                  </GridItem>
                </div>
              </div>
            </Card>
            <div className="text-center">
              <p className="loans-page_orange-color">
                <b className="loans-page_orange-color">Total PMINE In Contract : </b> 
                <span>0.00000000</span>
              </p>
            </div>
          </GridItem>
        </GridContainer>


        <div className="row margin-auto" style={{display:'flex'}}>
                <GridItem xs={12} sm={12} md={3} className="text-center">
                    <table
                            className="table-dark richlist-table margin-auto">
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
                <div className="col-md-6 text-center">
                    <p className="loans-page_orange-color">
                        <span style={{'fontSize': '2rem'}}>PMINE Virtual Deposit Contract fee's and information</span><br/>
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
                </div>
                <div className="col-md-3 col-sm-12 text-center" >
                    <table
                            className="table-dark richlist-table">
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
                </div>
            </div>
            <div id="chart"> </div>
        {/* <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>PMINE</h1>
              <h1 className={classes.title}>VIRTUAL DEPOSIT CONTRACTS</h1>
              <h4>
                IOST Balance
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div> */}
      </div>
      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
        {/* <ProductSection /> */}
        {/* <TeamSection />
        <WorkSection /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}
