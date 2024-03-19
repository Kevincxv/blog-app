import React from 'react'
import styles from "./categoryList.module.css"
import Link from "next/link"
import Image from 'next/image'

const categoryList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          <Link href="/blog" className={`${styles.category} ${styles.style}`}>
            <Image src="/style.png" alt="" width={32} height={32} className={styles.image}></Image>
            Style
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.style}`}>
            <Image src="/fashion.png" alt="" width={32} height={32} className={styles.image}></Image>
            Fashion
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.style}`}>
            <Image src="/food.png" alt="" width={32} height={32} className={styles.image}></Image>
            Food
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.style}`}>
            <Image src="/travel.png" alt="" width={32} height={32} className={styles.image}></Image>
            Travel
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.style}`}>
            <Image src="/culture.png" alt="" width={32} height={32} className={styles.image}></Image>
            Culture
          </Link>
          <Link href="/blog" className={`${styles.category} ${styles.style}`}>
            <Image src="/coding.png" alt="" width={32} height={32} className={styles.image}></Image>
            Coding
          </Link>
        </div>
    </div>
  )
}

export default categoryList