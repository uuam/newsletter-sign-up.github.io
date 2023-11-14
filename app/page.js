"use client";
import styles from "./page.module.scss";
import SubSection from "../dashboard/subscribeSection/page";
import Attribution from "../dashboard/attribution/page";

export default function Home() {

  return (
    <main className={styles.main}>
      <SubSection />
      <Attribution />
    </main>
  );
}
