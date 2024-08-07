import classes from './welcome.module.css';
import Head from 'next/head';
import Navbar from "../../components/subNavbar/navbar";

export default function Welcome() {

    return (
        <>
            <Head>
                <title>MedAssist | DashBoard </title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Dashboard" />
                Welome home !
            </div>
        </>
    )
}