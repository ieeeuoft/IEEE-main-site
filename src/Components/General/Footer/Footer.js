import React, { PureComponent } from 'react'
import styles from './footer.module.scss'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className={styles['footer' && 'small-footer']}>
        <p className={styles['footer-copyright']}>© 2019 IEEE University of Toronto Student Branch</p>
        <a className={styles['footer-copyright' && 'email']} href="mailto:uoft@ieee.org">uoft@ieee.org</a>
      </footer>
    )
  }
}

