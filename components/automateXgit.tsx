// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './counters.module.css'
import Image from 'next/image'
import frontend from 'image/frontend.png'
import Link from 'next/link'


function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  
  return (
    <>
      <div className={styles.counter}>
        <div className={styles.counter}>
          <Link href={'/deployment/backend'}>
            <Image 
            width={800} 
            height={500} 
            src={frontend}
            alt="" />
            <div  className={styles.texts} >
            <span className={styles.text}>Deploy Frontend</span></div></Link>

          {/* <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button> */}
        </div>
   
      </div>

    </>
  )
}


export default function MyApp() {
  return <MyButton />
}
