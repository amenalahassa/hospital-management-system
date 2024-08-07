import { useRouter } from "next/router";
import { useAuthUser } from "../../contexts/authUserContext"
import Loading from "../Loading/Loading";

function AlreadyLogin({ children }) {
    const { currentUser } = useAuthUser();
    const router = useRouter();

    if (currentUser) {
        router.replace('/user');
        return <Loading />
    }

    return (
        children
    )
}

export default AlreadyLogin