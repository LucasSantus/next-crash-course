import { server } from '../../../config'
import Link from 'next/link'
import { Meta } from '../../../components/Meta'
import styles from '../../../styles/ArticleID.module.css'

const article = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p className={styles.body}>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });

  let articles = []
  
  articles = res.json()

  const ids = await articles.map((item) => item.id )

  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export default article