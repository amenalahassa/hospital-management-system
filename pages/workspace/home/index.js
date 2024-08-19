import {Constants} from "../../../utils/contants";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

Home.route = [Constants.APP_ROUTES.WORKSPACE, "home"].join('/');

export default Home;