import React from "react";
import classes from "./Footer.module.css";
import IconGit from "../../assets/icons/IconGit";
import IconVk from "../../assets/icons/IconVk";
import IconTg from "../../assets/icons/IconTg";
import { Link } from "react-router-dom";

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
          <Link to='/'>
            Help
          </Link>
          <Link to='/'>
            Advisories
          </Link>
          <Link to='/'>
            Contacts
          </Link>
          <Link to='/'>
            Status
          </Link>
        </div>

        <div className={classes.department}>
          <h4 className={classes.h4}>Company</h4>
          <Link to='/'>
            About
          </Link>
          <Link to='/'>
            Blog
          </Link>
        </div>

        <div className={classes.department}>
          <h4 className={classes.h4}>Terms & Policies</h4>
          <Link to='/'>
            Policies
          </Link>
          <Link to='/'>
            Terms of use
          </Link>
          <Link to='/'>
            Privacy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer