// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './method.module.css'
import Image from 'next/image'
import frontend from 'image/frontend.png'
import backend from 'image/backend.png'
import db from 'image/db.png'
import Link from 'next/link'


function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  return (
    <>
      <div className={styles.method}>
        <div className={styles.method}>
          <Link href={'/deployment/backend'}>
            <Image 
            width={500} 
            height={500} 
            src={frontend}
            alt="" />
           </Link>
        </div>
        <div className={styles.method}>
          <div>
          <Link href={'/deployment/frontend'}>
            <Image 
            width={500} 
            height={500} 
            src={backend}
            alt="" />
           </Link>
          </div>
        </div>
        <div className={styles.method}>
          <div>
          <Link href={'/deployment/database'}>
            <Image 
            width={500} 
            height={500} 
            src={db}
            alt="" />
            </Link>
          </div>
        </div>
        <div className={styles.method}>
          <div>
          <Link href={'/deployment/database'}>
            <Image 
            width={500} 
            height={500} 
            src={db}
            alt="" />
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}


export default function MyApp() {
  return <MyButton />
}
