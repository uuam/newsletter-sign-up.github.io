import styles from './button.module.scss'
export default function Button({children, click}) {

    return(
        <button className={styles.btn} onClick={click} type='submit'>{children}</button>
    )
}