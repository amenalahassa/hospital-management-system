import classes from './user.module.css';
import Navbar from "../../components/subNavbar/navbar";
import Head from 'next/head';
import { useAuthUser } from '../../contexts/authUserContext';
import Widget from '../../components/Widget/Widget';
import Feature from '../../components/Feature/Feature';
import Chart from '../../components/Chart/Chart';
import { StateContext } from "../../contexts/StateContext";
import { useContext, useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material/';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useRouter } from 'next/router';
import axios from 'axios';
import { auth } from '../../ressources/firebase';


export default function User() {
    const router = useRouter();
    const { currentUser } = useAuthUser();
    const { state, dispatch } = useContext(StateContext)
    const [fetchData, setFetchData] = useState({
        purchase: 0,
        sale: 0
    });

    // console.log(auth.currentUser.uid);


    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                const { totalPurchase, totalSale } = res.data;
                setFetchData({ purchase: totalPurchase, sale: totalSale })
            })
        // dispatch({ type: 'set number of notifications', payload: 2 });
    }, [])

    return (
        <>
            <Head>
                {currentUser && <title>MedAssist | DashBoard | {currentUser.displayName}</title>}
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Dashboard" badger={state.badger_history} />
                <div className={classes.widgets}>
                    {/* <Widget type="profit" /> */}
                    <div className={classes.btn_container}>
                        <div className={classes.btn_sub_container}>
                            <IconButton btn_type="purchase" title="purchase medicine" onClick={async () => {
                                await router.push('/user/purchase-medicine')
                            }}>
                                <ShoppingCartIcon />
                            </IconButton>
                            <span>Purchase Medicine</span>
                        </div>

                        {/* sale */}
                        <div className={classes.btn_sub_container}>
                            <IconButton title="sale medicine" btn_type="sale" className={classes.sale} onClick={async () => {
                                await router.push('/user/sale-medicine')
                            }}>
                                <StorefrontIcon />
                            </IconButton>
                            <span>Sale Medicine</span>
                        </div>

                        {/* remove medicine */}
                        <div className={classes.btn_sub_container}>
                            <IconButton title="remove medicine" btn_type="remove" onClick={async () => {
                                await router.push('/user/remove-medicine')
                            }}>
                                <RemoveCircleIcon />
                            </IconButton>
                            <span>Remove Medicine</span>
                        </div>
                    </div>
                    <Widget type="purchase" amount={fetchData.purchase} />
                    <Widget type="sales" amount={fetchData.sale} />
                    {/* <Widget type="balance" /> */}
                </div>
                <div className={classes.charts}>
                    <Feature />
                    <Chart />
                </div>
            </div>
        </>
    )
}