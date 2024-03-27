import styles from './card.module.css'
import Image from "next/image"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>03.19.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptate.</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt doloremque repellat provident aperiam facilis mollitia libero id a. Nisi.</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
    </div>
  )
}

export default Card