'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from './page.module.scss'
import subSuccess from "../../public/icon-success.svg";
import Button from "../ui/button";



export default function SubMessage() {
  const router = useRouter()

  return (
    <section className={styles.subscribeMessage}>
      <Image priority={false} src={subSuccess} alt="subscribe message" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to
        <b> ash@loremcpmpany.com.</b> Please open it and click the button inside to confirm your subscription.
      </p>
      <Button type="button" click={() => router.push('/', { scroll: false })}>Dismiss message</Button>
    </section>
  );
}
