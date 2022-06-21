import styles from './styles/Layout.module.css';

export const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}