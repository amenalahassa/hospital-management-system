import classes from './welcome.module.css';
import Head from 'next/head';

export default function Welcome() {

    return (
        <>
            <Head>
                Sample header
            </Head>
            <div className={classes.main_container}>
                Welome home !
            </div>
        </>
    )
}