import React from 'react'
import Image from "next/image"
import styles from "./menuPost.module.css"
import Link from "next/link"

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" atl="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.textContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ad.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>03.21.2024</span>
            </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" atl="" fill className={styles.image}></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>Culture</span>
          <h3 className={styles.textContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ad.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>03.21.2024</span>
            </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" atl="" fill className={styles.image}></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.textContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ad.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>03.21.2024</span>
            </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" atl="" fill className={styles.image}></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
          <h3 className={styles.textContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ad.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>03.21.2024</span>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPost