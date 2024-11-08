import React from 'react';
import Logo404 from '../../assets/icon-404.webp';
import styles from './notfound.module.scss'

function NotFound() {
  return (
    <main style={styles.pageMain404}>
      <img src={Logo404} alt="icon-404" />
      <h1>Página no encontrada</h1>
    </main>
  )
}

export default NotFound