import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import { server } from '../config/'

export const ArticleItem = ({ article }) => {
    return (
        <Link href={`${server}/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}