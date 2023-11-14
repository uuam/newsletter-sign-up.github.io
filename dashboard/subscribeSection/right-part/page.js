import Image from "next/image";
import singUpDeskop from '../../../public/illustration-sign-up-desktop.svg'
import styles from './page.module.scss'
export default function RightPart() {
  return (
    <div className={styles.rightPart}>
      <Image
      priority={true}
        height={100}
        width={100}
        className="svg"
        src={singUpDeskop}
        alt="sign up"
      />
    </div>
  );
}
