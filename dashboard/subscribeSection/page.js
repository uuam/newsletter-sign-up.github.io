import styles from "./page.module.scss";
import LeftPart from "./left-part/page";
import RightPart from "./right-part/page";
export default function SubSection() {
  return (
    <section className={styles.subscribeEmail}>
      <LeftPart />
      <RightPart />
    </section>
  );
}
