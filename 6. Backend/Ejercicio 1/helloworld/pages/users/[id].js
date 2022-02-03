import Head from "next/head";
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Users(props){
  const router = useRouter();
  const {id} = router.query;
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Users detail page</title>
      </Head>
      <h1>User ID: {id}</h1>
    </div>
  )
}

{/* export async function getStaticPath(){

}

export async function getStaticProps({params }){
  console.log(params);
} */}