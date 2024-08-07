import classes from './report.module.css';
import Navbar from "../../../components/subNavbar/navbar";
import Head from 'next/head';

const Items = () => {
    return (
        <>
            <Head>
                <title>MedAssist | Report</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Report" />
            </div>
        </>
    )
}
export default Items;