import classes from './history.module.css';
import React, { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import Navbar from '../../../components/subNavbar/navbar';
import axios from 'axios';
import { auth } from '../../../ressources/firebase';
import HistoryTable from '../../../components/HistoryTable/HistoryTable';
import { StateContext } from '../../../contexts/StateContext';


function History() {
    const [data, setData] = useState([]);
    const { state, dispatch } = useContext(StateContext);

    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                const { history } = res.data;
                setData(history);
                dispatch({ type: 'reset history badger' });
            })
    })

    return (
        <>
            <Head>
                <title>MedAssist | History</title>
            </Head>
            <Navbar title="History" />
            <div className={classes.main_container}>
                {data.length !== 0 ? <HistoryTable rows={data} /> : <>
                    <h2 style={{ opacity: ".5" }}>No history recorded.</h2>
                </>}
            </div>
        </>
    )
}

export default History;