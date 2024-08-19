import { useRouter } from 'next/router';
import { useAuthUser } from '../contexts/authUserContext';
import Loading from '../components/Loading/Loading';
import Login from "../pages/login";

function AuthUserGuard({ children }) {
    const { currentUser } = useAuthUser();
    const router = useRouter();

    let currentRoute = router.route;

    if (!currentUser) {
        router.replace(Login.route);
        return <Loading />
    }

    return (
        children
    )
}

export default AuthUserGuard;