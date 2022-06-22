import styles from '../styles/Header.module.css'

export const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span>Crash Course</span> Next JS
            </h1>
            <p className={styles.description}>
                Keep up to date with the latest web dev news
            </p>
        </div>
    )
}
