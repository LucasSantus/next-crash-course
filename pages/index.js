import Head from 'next/head'

export default function Home({ articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>NextJS Crash Course</title>
        <meta name="keywords" content="nextjs crash course" />
        <meta name="description" content="NextJS Crash Course " />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-scale=1" />
      </Head>

      <h1>Welcome to NextJS</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}