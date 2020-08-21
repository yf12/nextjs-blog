// import Link from "next/link";
// import Head from "next/head";
// import Layout from "../../components/layout";

// export default function FirstPost() {
//   return (
//     <Layout>
//       <Head>
//         <title>First Post</title>
//       </Head>
//       <h2>
//         <Link href='/'>
//           <a>back to home</a>
//         </Link>
//       </h2>
//     </Layout>
//   )
// }


import Head from 'next/head'
import Link from "next/link"
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function FirstPost({allPostsData}) {
  return (
    <Layout home>
      <Head>
        ...
      </Head>
      <section className={utilStyles.headingMd}>
        ...
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))
          }
        </ul>
      </section>    
    </Layout>
  )
}
