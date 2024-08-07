import { useAuthUser } from "../../contexts/authUserContext"
import classes from './navbar.module.css';
import Loading from "../Loading/Loading";

export default function Navbar({ title, badger }) {
    const { currentUser } = useAuthUser();

    function isLogging() {
        return currentUser.loading
    }

    return (
        <>
            {!isLogging() && <nav className={classes.nav}>
                <h2>{title}</h2>
                <ul>
                    <li>Welcome, <span>{currentUser && currentUser.displayName}</span></li>
                </ul>
            </nav>}
            {isLogging() && <Loading />}
        </>
    )
}