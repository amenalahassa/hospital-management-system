import classes from './vnavbar.module.css';
import { FaBell, FaShapes, FaCartPlus, FaFileInvoice, FaChartPie } from 'react-icons/fa';
import { MdDashboardCustomize } from 'react-icons/md'
import $ from 'jquery';
import logo from '../../../images/MedAssist.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StateContext } from '../../../contexts/StateContext';
import { useContext } from 'react';

export default function Navbar() {

    const router = useRouter();
    const { state } = useContext(StateContext);
    console.log(state.number_of_notifications);

    // console.log(router.pathname.split('/')[2]);

    $(document).ready(function () {
        $(`[page*=${!router.pathname.split('/')[2] ? "welcome" : router.pathname.split('/')[2]}]`).addClass(`${classes.active}`).siblings().removeClass(`${classes.active}`);
    })

    return (
        <main className={classes.main}>
            <nav className={classes.sidebar}>
                <div className={classes.text}>
                    <Image
                        src={logo}
                        width={150}
                        alt="logo"
                        priority="performance"
                    />
                </div>
                <ul>
                    <li page="home"><Link href='/user'><MdDashboardCustomize style={{ marginRight: "1em" }} /> Dashboard</Link></li>
                    <li page="items"><Link href='/user/items'><FaShapes style={{ marginRight: "1em" }} />Items</Link></li>
                    <li page="purchase"><Link href='/user/purchase'><FaCartPlus style={{ marginRight: "1em" }} />Purchase</Link></li>
                    <li page="sale"><Link href='/user/sale'><FaFileInvoice style={{ marginRight: "1em" }} />Sale</Link></li>
                    <li className={classes.noti} page="notification">
                        <Link href='/user/notification'><FaBell style={{ marginRight: "1em" }} />Notification</Link>
                        {state.number_of_notifications !== 0 && <span className={classes.count}>
                            {state.number_of_notifications >= 10 ? "9+" : state.number_of_notifications}
                        </span>}
                    </li>
                    {/* <li page="report"><Link href='/user/report'><FaChartPie style={{ marginRight: "1em" }} />Report</Link></li> */}
                </ul>
            </nav >
        </main>
    )
}