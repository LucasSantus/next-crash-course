import Link from 'next/link'
import styles from '../styles/Article.module.css'
import { server } from '../config/'

export const ArticleItem = ({ article }) => {
    return (
        <Link href={`${server}/article/${article.id}`}>
            <a className={styles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}