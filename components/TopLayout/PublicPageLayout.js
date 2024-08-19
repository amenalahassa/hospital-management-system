import classes from "./publicPageLayout.module.css";
import Link from "next/link";

// Todo:
// 1. Load app config like name, logo, etc

export default function PublicPageLayout(props) {
    return (
        <>
            <header className={classes.navbar}>
                <nav>
                    <div className={classes.hnavbar_name}>
                        <h1><Link href="/"><span>Med</span>Assist.io</Link></h1>
                    </div>
                    <ul className={classes.links}>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/signup">SignUp</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <small>&copy; Copyright 2022, MedAssist.io</small>
            </footer>
        </>
    )
}