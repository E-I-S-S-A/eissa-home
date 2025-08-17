import { EissaTextLogo } from "react-reusable-elements";
import { ReactComponent as EissaLogo } from "../../assets/svgs/brand-logo-curved.svg"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return <div className={styles.main_container}>
        <EissaTextLogo BrandLogo={<EissaLogo height={30} width={30} />} text='issa' />
        <div className={styles.nav_options}>
            <div className={`${styles.action_conatiner} ${styles.active}`}>
                <a href="" className={styles.action}>About</a>
            </div>
            <div className={styles.action_conatiner}>
                <a href="" className={styles.action}>Products</a>
            </div>
            <div className={styles.action_conatiner}>
                <a href="" className={styles.action}>Contact</a>
            </div>
        </div>
    </div>
}

export default Navbar;