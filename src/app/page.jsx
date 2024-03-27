import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/categoryList";
import CardList from "@/components/cardList/CardList";
import styles from "./homepage.module.css";
import Menu from "@/components/Menu/Menu";


export default function Home() {
  return (
  <div className={styles.conainer}>
    <Featured />
    <CategoryList />
    <div className={styles.content}>
      <CardList />
      <Menu />
    </div>
  </div>
  );
}
