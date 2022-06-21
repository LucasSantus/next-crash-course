import styles from '../styles/Layout.module.css';
import { Nav } from './Nav'

export const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}