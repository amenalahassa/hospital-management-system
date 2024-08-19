import image from '../../images/login.jpg'
import Image from 'next/image';
import classes from './login.module.css';
import { useRef, useState } from 'react';
import { useAuthUser } from '../../contexts/authUserContext';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Loading from '../../components/Loading/Loading';
import {useAuthService} from "../../contexts/authContext";
import {AuthActionType} from "../../reducers/authReducer";
import {Constants} from "../../utils/contants";
import Home from "../workspace/home";
import {RoutedComponent} from "../../utils/types";

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const authService = useAuthService();
    const { currentUser, authDispatcher } = useAuthUser();
    const router = useRouter();

    const isLoadingUser = () => {
        return currentUser.loading;
    }

    const authError = () => {
        return currentUser.error;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authDispatcher({ type: AuthActionType.LOAD_USER });
        authService.login(emailRef.current.value, passRef.current.value)
            .then((res) => {
                if (res.user) {
                    router.replace(Home.route);
                }
            })
            .catch((err) => {
                // Todo: handle error with appropriate message and class
                let message = "";
                switch (err.code) {
                    case 'auth/wrong-password':
                        message = 'Mot de passe incorrect.....Veuillez réessayer';
                        break;
                    default:
                        message = 'Quelque chose n\'a pas fonctionné....Veuillez réessayer';
                        break;
                }
                authDispatcher({ type: AuthActionType.RAISE_ERROR, message });
            })
    }

    // Todo: Better error handling in UI
    return (
        <>
            <Head>
                <title>S'authentifier | App Name</title>
            </Head>
            <div className={classes.main_container}>
                <div className={classes.img_container}>
                    <Image
                        src={image}
                        height={300}
                        width={300}
                        alt="App Logo"
                        priority="performance"
                    />
                </div>
                <div className={classes.outer_conatiner}>
                    <form onSubmit={handleSubmit}>
                        <h1>Authentification</h1>
                        <div className={classes.email_con}>
                            <label htmlFor="email">Entrez votre Email : </label>
                            <input type="email" ref={emailRef} required id='email' placeholder='Email'/>
                        </div>
                        <div className={classes.pass_con}>
                            <label htmlFor="pass">Entrez votre mot de passe : </label>
                            <input type="password" ref={passRef} required id='pass' placeholder='Mot de passe'
                                   autoComplete='true'/>
                        </div>
                        <label className={authError() === "" ? "hidden" : ""}>* {authError()}</label>
                        <button type='submit' disabled={isLoadingUser()}
                                className={isLoadingUser() ? classes.disable : ""}>{isLoadingUser() ? "Chargement..." : "Ouvrir une session"}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

Login.route = Constants.APP_ROUTES.LOGIN;

export default Login;
