// Example from https://beta.reactjs.org/learn

import { Fragment, useState } from 'react'
import styles from './counters.module.css'
import Image from 'next/image'


function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <div className={styles.text}>Loggin with your AutomateX Cloud</div>
      <div className={styles.container}>
        <div className={styles.counter}>
          <Image
            width={800}
            height={500}
            src="/images/cloud.png"
            alt=" "
            unoptimized={true}
          />
        </div>
      </div>

      <div className={styles.text}>U can Upload Your Office Document</div>
      <div className={styles.container}>
        <div className={styles.counter}>
          <Image
            width={800}
            height={500}
            src="/images/cloud_upload.png"
            alt=" "
            unoptimized={true}
          />
        </div>
      </div>
    
      <div className={styles.text}>Cloud User Setting</div>
      <div className={styles.container}>
        <div className={styles.counter}>
          <Image
            width={800}
            height={500}
            src="/images/cloud_setting.png"
            alt=" "
            unoptimized={true}
          />
        </div>
      </div>
    </>
  )
}


export default function MyApp() {
  return <MyButton />
}
