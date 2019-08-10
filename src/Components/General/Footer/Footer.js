import React, { PureComponent } from 'react'
import styles from './footer.module.scss'

export default class Footer extends PureComponent {
  getYear() { 
    var today = new Date();
    return today.getFullYear();
  };

  render() {
    let year = this.getYear();
    return (
      <footer className={styles['footer'] + ' ' + styles['small-footer']} onLoad={() => {this.getYear()}}>
        <p className={styles['footer-copyright']}>{"© " + year + " IEEE University of Toronto Student Branch"}</p>
        <a className={styles['footer-copyright'] + ' ' + styles['email']} href="mailto:uoft@ieee.org">uoft@ieee.org</a>
      </footer>
    )
  }
}

