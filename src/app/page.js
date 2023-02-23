import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import reactionSvg from '../../assets/images/icon-reaction.svg'
import memorySvg from '../../assets/images/icon-memory.svg'
import verbalSvg from '../../assets/images/icon-verbal.svg'
import visualSvg from '../../assets/images/icon-visual.svg'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.result__content}>
          <p className={styles.result__title}>Your Result</p>
          <div className={styles.result__score}>
            <span>76</span>
            <p>of 100</p>
          </div>
          <h2 className={styles.result__great}>Great</h2>
          <p className={styles.result__text}>You scored higher than <span>65%</span> of the people who have taken these tests.</p>
        </div>
        <div className={styles.summary}>
          <h3 className={styles.summary__title}>Summary</h3>
          <ul className={styles.summary__list}>
            <li className={styles.summary__items}>
              <div className={styles.summary__items_container}>
                <div className={styles.summary__items_container_svg}>
                  <span className={styles.summary__items_svg}>
                    <Image src={reactionSvg} alt="reaction" />
                  </span>
                  <p className={styles.summary__items_reaction}>Reaction</p>
                </div>
                <div className={styles.summary__items_rating}>
                  <span className={styles.summary__items_rating_score}>80</span>
                  <p className={styles.summary__items_rating_total}>/ 100</p>
                </div>
              </div>
            </li>
            <li className={styles.summary__items}>
              <div className={styles.summary__items_container}>
                <div className={styles.summary__items_container_svg}>
                  <span className={styles.summary__items_svg}>
                    <Image src={memorySvg} alt="memory" />
                  </span>
                  <p className={styles.summary__items_memory}>Memory</p>
                </div>
                <div className={styles.summary__items_rating}>
                  <span className={styles.summary__items_rating_score}>92</span>
                  <p className={styles.summary__items_rating_total}>/ 100</p>
                </div>
              </div>
            </li>
            <li className={styles.summary__items}>
              <div className={styles.summary__items_container}>
                <div className={styles.summary__items_container_svg}>
                  <span className={styles.summary__items_svg}>
                    <Image src={verbalSvg} alt="verbal" />
                  </span>
                  <p className={styles.summary__items_verbal}>Verbal</p>
                </div>
                <div className={styles.summary__items_rating}>
                  <span className={styles.summary__items_rating_score}>61</span>
                  <p className={styles.summary__items_rating_total}>/ 100</p>
                </div>
              </div>
            </li>
            <li className={styles.summary__items}>
              <div className={styles.summary__items_container}>
                <div className={styles.summary__items_container_svg}>
                  <span className={styles.summary__items_svg}>
                    <Image src={visualSvg} alt="visual" />
                  </span>
                  <p className={styles.summary__items_visual}>Visual</p>
                </div>
                <div className={styles.summary__items_rating}>
                  <span className={styles.summary__items_rating_score}>72</span>
                  <p className={styles.summary__items_rating_total}>/ 100</p>
                </div>
              </div>
            </li>
          </ul>
          <div className={styles.button__container}>
            <button className={styles.button}>Continue</button>
          </div>
        </div>
      </div>
    </main>
  )
}
