// Example from https://beta.reactjs.org/learn
import { useState } from 'react'
import styles from './counters.module.css'
import Image from 'next/image'
 


function MyButton(props) {
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
            src="/images/giturl_method.png"
            alt=" "
            unoptimized={true}
          />
        </div>
        <div>Drop your Git Url </div>
        <div className={styles.counter}>
          <Image
            width={800}
            height={500}
            src="/images/link_git.png"
            alt=" "
            unoptimized={true}
          />
        </div>
        <div>Click on Submit Button</div>
        <div className={styles.counter}>
          <Image
            width={800}
            height={500}
            src="/images/submit.png"
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
