import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Counter from '../components/counter/Counter'
import MockComp from '../components/mockComp/MockComp'

const Home: NextPage = () => {
  const propFunc = ():void => {
    console.log('prop function')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Counter desc={'counter comp'} initCount={0} />
     <MockComp propFunc={propFunc}/>
    </div>
  )
}

export default Home
