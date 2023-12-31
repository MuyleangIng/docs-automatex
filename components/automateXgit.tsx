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
      <div className={styles.container}>
        <div className={styles.counter}>
          <Image
            width={800}
            height={500}
            src="/images/gitx_method.jpeg"
            alt=" "
            unoptimized={true}
          />
        </div>
        <div>AutomateX Git - Click on Submit Button</div>
        <div className={styles.counter}>
          <Image
            width={800}
            height={500}
            src="/images/submit.png"
            alt=" "
            unoptimized={true}
          />
        </div>
        <div>AutomateX Git - Click on resource, following our git commands and get your code into our platform</div>
        <div className={styles.counter}>
          <Image
            width={800}
            height={500}
            src="/images/gitx_resource.png"
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
