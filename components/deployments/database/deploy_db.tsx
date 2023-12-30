// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from '../../counters.module.css'
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
                        src="/images/database_type.png"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>
            <div>After that, take a look at your project dashboard</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/dashboard.png"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>
            <div>With the tabs of the project</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/deploy_tab.png"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>
            <div>Overview : is the details of your project</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/frontend_OV.png"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>
            <div>Resource : showing your code within the project</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/frontend_Resource.png"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>
            <div>Activities : showing you your logs of each build</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/deploy.png"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>
            <div>Report : list down all of your vulnerabilities</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/frontend_Report.png"
                        alt=" "
                        unoptimized={true}
                    />
                </div>
            </div>
            <div>Setting : place for edting your project</div>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <Image
                        width={800}
                        height={500}
                        src="/images/frontend_Setting.png"
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
