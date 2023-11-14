import Image from "next/image";
import styles from "./page.module.scss";
import iconList from "../../../public/icon-list.svg";
import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import BeatLoader from "react-spinners/BeatLoader";

import crypto from "crypto";
import Button from "../../ui/button";

function generateUUID() {
  return crypto.randomBytes(16).toString("hex");
}

export default function LeftPart() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const emailRef = useRef();
  const router = useRouter();

  const emailHandle = async (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const uuid = generateUUID();
    const userData = {
      email: emailValue,
      id: uuid,
    };
    setLoading(true);
    setError(false)
    let res;
    try {
      res = await fetch("/api/emailHandler", {
        method: "POST",
        body: JSON.stringify({ ...userData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(`${data.message}`);
    } catch (error) {
      setError(true);
      if (res && res.status === 422) {
        setErrorMessage('Registered!');
      }
      if (res && res.status === 402) {
        setErrorMessage('Valid email required');
      }
    }
    setLoading(false);
    if(res && res.status === 201) router.push('/success')

  };

  return (
    <div className={styles.leftPart}>
      <div className={styles.subContent}>
        <h1>Stay updated!</h1>
        <h3>Join 60,000+ product managers receiving monthly updates on:</h3>
        <div className={styles.listItem}>
          <Image
            height={20}
            width={20}
            src={iconList}
            priority={true}
            alt="icon"
          />
          <p>Product discovery and building what matters</p>
        </div>
        <div className={styles.listItem}>
          <Image
            height={20}
            width={20}
            src={iconList}
            priority={true}
            alt="icon"
          />
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className={styles.listItem}>
          <Image
            height={20}
            width={20}
            src={iconList}
            priority={true}
            alt="icon"
          />
          <p>And much more!</p>
        </div>
        <BeatLoader
          className={styles.loaderOverlay}
          color="#888888"
          speedMultiplier={1}
          loading={loading}
        />
        <form method="post" onSubmit={emailHandle}>
          <label htmlFor="email">Email address</label>
          {error && <p>{errorMessage}</p>}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="company@email.com"
            ref={emailRef}
            className={error ? styles.error : ''}
          />
          <Button>Subscribe to monthly newsletter</Button>
        </form>
      </div>
    </div>
  );
}
