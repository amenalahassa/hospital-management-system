import classes from './purchase.module.css';
import Navbar from "../../../components/subNavbar/navbar";
import Head from 'next/head';
import DataTable from '../../../components/DataTabel/DataTabel';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { auth } from '../../../ressources/firebase';
import { StateContext } from '../../../contexts/StateContext';
import SnackbarTag from '../../../components/Snackbar/Snackbar';
import { columns } from "../../../components/DataTabel/Purchase/Column";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";

const Sales = () => {
    const router = useRouter();
    const [medicineData, setMedicineData] = useState([]);
    const { state, dispatch } = useContext(StateContext);

    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                const fetch_data = res.data.history;
                { fetch_data && setMedicineData(fetch_data.filter((medicine) => medicine.type === "add")) }
            })
    }, [])


    return (
        <>
            <Head>
                <title>MedAssist | Purchase</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Purchase" />
                <div className={classes.dataTabelContainer}>
                    <div className={classes.input_container}>
                        <div className={classes.btn}>
                            <Button startIcon={<ShoppingCartIcon />} fullWidth={true} variant="contained" color="primary" onClick={() => router.replace('/user/purchase-medicine')}>
                                Purchase
                            </Button>
                        </div>
                    </div>
                    {medicineData.length !== 0 ? <DataTable data={medicineData} col={columns} /> : <>
                        <h2 style={{ opacity: ".5" }}>You haven&apos;t added any medicine yet.</h2>
                        <span style={{ opacity: '.5', fontWeight: '500' }}>Click here for add medicine - <Link href='/user/purchase-medicine' style={{ color: 'blue' }}>Purchase medicine</Link></span>
                    </>}
                </div>
            </div>
            <SnackbarTag
                open={state.isPopUpOpen}
                msg={state.popupMsg}
                type={state.popupType}
                close={(reason) => {
                    if (reason === 'clickaway') {
                        return;
                    }
                    dispatch({ type: 'close popup' })
                }} />
        </>
    )
}
export default Sales;