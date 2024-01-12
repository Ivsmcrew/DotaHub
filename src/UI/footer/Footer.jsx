import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { footerDataMap } from "./FooterData";

const Footer = function() {
  //variables
  const iconsDataArray = footerDataMap.get('iconLinks');
  const supportDataArray = footerDataMap.get('supportLinks');
  const companyDataArray = footerDataMap.get('companyLinks');
  const termsDataArray = footerDataMap.get('termsLinks');

  //functions
  function getIcons(dataArray) {
    return dataArray.map((item, index) => {
      return(
        <a key={index} className={classes.link} href={item.href}>
          {item.icon}
        </a>
      )
    })
  }
  function getLinks(dataArray) {
    return dataArray.map((item, index) => {
      return(
        <Link key={index} to={item.to}>
          {item.title}
        </Link>
      )
    })
  }

  //component
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.links}>
          { getIcons(iconsDataArray) }
        </div>

        <div className={classes.departments}>
          <div className={classes.department}>
            <h4 className={classes.h4}>Support</h4>
            { getLinks(supportDataArray) }
          </div>

          <div className={classes.department}>
            <h4 className={classes.h4}>Company</h4>
            { getLinks(companyDataArray) }
          </div>

          <div className={classes.department}>
            <h4 className={classes.h4}>Terms & Policies</h4>
            { getLinks(termsDataArray) }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer