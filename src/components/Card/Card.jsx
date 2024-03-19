import styles from './card.module.css'
import Image from "next/image"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>03.19.2024</span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius doloremque ullam illo similique. Quod, non?</h1>
            </Link>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint harum laborum quia minima impedit dolor reprehenderit voluptatem officiis praesentium, velit ea quisquam reiciendis fugiat?</p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card