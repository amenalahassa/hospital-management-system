import classes from './sale.module.css';
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
import { columns_sale } from '../../../components/DataTabel/Sales/Column';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Link from "next/link";

const Sales = () => {
  const router = useRouter();
  const [medicineData, setMedicineData] = useState([]);
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
      .then((res) => {
          if (res.data.sales){
              setMedicineData(res.data.sales)
          }

      })
  }, [])

  return (
    <>
      <Head>
        <title>MedAssist | Sales</title>
      </Head>
      <div className={classes.main_container}>
        <Navbar title="Sales" />
        <div className={classes.dataTabelContainer}>
          <div className={classes.input_container}>
            <div className={classes.btn}>
              {<Button startIcon={<RemoveCircleIcon />} fullWidth={true} variant="contained" color="error" onClick={() => router.replace('/user/sale-medicine')}>
                Sale
              </Button>}
            </div>
          </div>
          {medicineData.length !== 0 ? <DataTable data={medicineData} col={columns_sale} /> : <>
            <h2 style={{ opacity: ".5" }}>You haven&apos;t sold any medicine yet.</h2>
            <span style={{ opacity: '.5', fontWeight: '500' }}>Click here for sell medicine - <Link href='/user/sale-medicine' style={{ color: 'blue' }}>sell medicine</Link></span>
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