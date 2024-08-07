import { useRouter } from 'next/router';
import { useAuthUser } from '../../contexts/authUserContext';
import Loading from '../Loading/Loading';

function ProtectedRoute({ children }) {
    const { currentUser } = useAuthUser();
    const router = useRouter();
    if (!currentUser) {
        router.replace('/login');
        return <Loading />
    }

    return (
        children
    )
}

export default ProtectedRoute;