import ExpandableLogo from "./ExpandableLogo/ExpandableLogo";
import styles from "./Hero.module.css"
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";

const Hero = () => {
    return <div className={styles.hero_main_container}>
        <div className={styles.hero_heading}>
            <span className={styles.hero_text}>
                Helpful products, built with <ExpandableLogo />  in mind
            </span>
            {/* <span>And also Google</span> */}
        </div>

        <InfiniteScroll />
    </div>
}

export default Hero;