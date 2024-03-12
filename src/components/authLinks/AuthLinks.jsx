import React from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'

const AuthLinks = () => {

  const status = "notauthenticated"
    
  return (
    <>
    {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
    ) : (
        <>
        <Link href="/write">Logout</Link>
        {/* <span className={styles.link}>Logout</span> */}
        </>
    )}
    </>
  );
};

export default AuthLinks