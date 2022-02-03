import React, { useEffect }from 'react';
import Head from "next/head";
import axios from "axios";
import styles from '../../styles/Home.module.css'

export default function Users(){
  useEffect()
  return (
    <div className={styles.container}>
      <Head>
        <title>Users page</title>
      </Head>
      <h1>Page Users !!!</h1>
      <ul>
        {
          users.map(user => (<li key={user.key}>{user.firstName}</li> ))
        }
      </ul>
    </div>
  )
}
export async function getServerSideProps({users}){
  const users = await axios.get('https://dummyapi.io/data/v1/user', 
  {headers: {'app-id':'61f32a73cd194a08bfc0ac6e'}}
  )
  users.data
  return {
    props: {
      users: users.data.data
    }
  }

}