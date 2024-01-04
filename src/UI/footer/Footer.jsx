import React from "react";
import classes from "./Footer.module.css";
import IconGit from "../../assets/icons/IconGit";
import IconVk from "../../assets/icons/IconVk";
import IconTg from "../../assets/icons/IconTg";

const Footer = function() {
  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <a className={classes.link} href="https://github.com/Ivsmcrew">
          <IconGit />
        </a>
        <a className={classes.link} href="https://t.me/IVS_M">
          <IconVk />
        </a>
        <a className={classes.link} href="https://vk.com/son_of_korzh">
          <IconTg />
        </a>
      </div>

      <div className={classes.departments}>
        <div className={classes.department}>
          <h4 className={classes.h4}>Support</h4>
          <a href="/">Help</a>
          <a href="/">Advisories</a>
          <a href="/">Contacts</a>
          <a href="/">Status</a>
        </div>

        <div className={classes.department}>
          <h4 className={classes.h4}>Company</h4>
          <a href="/">About</a>
          <a href="/">Blog</a>
        </div>

        <div className={classes.department}>
          <h4 className={classes.h4}>Terms & Policies</h4>
          <a href="/">Policies</a>
          <a href="/">Terms of use</a>
          <a href="/">Privacy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer