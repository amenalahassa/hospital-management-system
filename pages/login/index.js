import image from '../../Images/login.jpg'
import Image from 'next/image';
import classes from './login.module.css';
import { useRef, useState } from 'react';
import { useAuth } from '../../firebase/Context/AuthContext';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Loading from '../../Components/Loading/Loading';

export default function Login() {
    const emailRef = useRef();
    const passRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        login(emailRef.current.value, passRef.current.value)
            .then((res) => {
                if (res.user) {
                    router.replace('/welcome')
                }
                setLoading(false);
            })
            .catch((err) => {
                switch (err.code) {
                    case 'auth/wrong-password':
                        setError('Mot de passe incorrect.....Veuillez réessayer')
                        break;
                    default:
                        setError('Quelque chose n\'a pas fonctionné....Veuillez réessayer')
                        break;
                }
                setLoading(false);
            })
    }

    return (
        <>
            <Head>
                <title>S'authentifier | App Name</title>
            </Head>
            {!loading && <div className={classes.main_container}>
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
                            <input type="email" ref={emailRef} required id='email' placeholder='Email' />
                        </div>
                        <div className={classes.pass_con}>
                            <label htmlFor="pass">Entrez votre mot de passe : </label>
                            <input type="password" ref={passRef} required id='pass' placeholder='Mot de passe' autoComplete='true' />
                        </div>
                        <label className={error === "" ? "hidden" : ""}>* {error}</label>
                        <button type='submit' disabled={loading} className={loading ? classes.disable : ""}>{loading ? "Chargement..." : "Ouvrir une session"}</button>
                    </form>
                </div>
            </div >}
            {loading && <Loading />}
        </>
    )
}
