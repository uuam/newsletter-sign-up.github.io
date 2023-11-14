import Attribution from "../../dashboard/attribution/page";
import SubMessage from "../../dashboard/subscribeMessage/page";
import styles from './page.module.scss';

export default function Success() {
    return(
        <main className={styles.main}>
        <SubMessage/>
        <Attribution/>
        </main>
    )
}