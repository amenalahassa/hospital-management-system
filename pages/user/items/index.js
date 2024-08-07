import classes from './items.module.css';
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
import { columns } from '../../../components/DataTabel/Items/Column';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";

const Items = () => {
    const router = useRouter();
    const [medicineData, setMedicineData] = useState([]);
    const { state, dispatch } = useContext(StateContext);
    // console.log(medicineData);

    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                setMedicineData(res.data.stock)
            })
    }, [])

    return (
        <>
            <Head>
                <title>MedAssist | Items</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Items" />
                <div className={classes.dataTabelContainer}>
                    <div className={classes.input_container}>
                        {/* <div className={classes.btn}>
                            <Button startIcon={<AddIcon />} fullWidth={true} variant="contained" onClick={() => router.replace('/user/add-medicine')}>
                                Add
                            </Button>
                        </div> */}
                        <div className={classes.btn}>
                            <Button startIcon={<DeleteIcon />} fullWidth={true} variant="contained" color="error" onClick={() => router.replace('/user/remove-medicine')}>
                                Remove
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
export default Items;