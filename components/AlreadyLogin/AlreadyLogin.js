import { useRouter } from "next/router";
import { useAuthUser } from "../../contexts/authUserContext"
import Loading from "../Loading/Loading";
import Home from "../../pages/workspace/home";

function AlreadyLogin({ children }) {
    const { currentUser } = useAuthUser();
    const router = useRouter();

    if (currentUser) {
        router.replace(Home.route);
        return <Loading />
    }

    return (
        children
    )
}

export default AlreadyLogin