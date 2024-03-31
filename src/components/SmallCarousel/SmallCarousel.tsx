import styles from './SmallCarousel.module.css'
import Image from 'next/image'

const SmallCarousel = () => {
  return (
    <div className='a fade-left'>
        <div className={styles.blueBlock}>
                <h2>Нас уже выбрали</h2>
                <div className={styles.slider}>
                    <div className={styles.slideTrack}>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                    
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                        <div className={styles.slide}>
                            <Image className={styles.sliderImg} width={500} height={300} alt='1c' src='/1c.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SmallCarousel