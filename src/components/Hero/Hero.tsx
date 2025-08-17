import ExpandableLogo from "./ExpandableLogo/ExpandableLogo";
import styles from "./Hero.module.css"

const Hero = () => {
    return <div className={styles.hero_main_container}>
        <span className={styles.hero_text}>
            Helpful products, built with <ExpandableLogo/>  in mind
        </span>
        <span>And also Google</span>
    </div>
}

export default Hero;