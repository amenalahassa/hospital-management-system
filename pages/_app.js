import '../styles/globals.css'
import Welcome from '.';
import PublicPageLayout from '../components/TopLayout/PublicPageLayout';
import Login from './login';
import SideLayout from '../components/SideLayout/SideLayout';
import AuthUserProvider from '../contexts/authUserContext';
import AuthUserGuard from '../guards/AuthUserGuard';
import AlreadyLogin from '../components/AlreadyLogin/AlreadyLogin';
import {NextUIProvider} from "@nextui-org/react";
import AuthServiceProvider from "../contexts/authContext";

function AppWrapper({ children }) {
    return (
        <NextUIProvider>
            <AuthServiceProvider>
                <AuthUserProvider>
                    {children}
                </AuthUserProvider>
            </AuthServiceProvider>
        </NextUIProvider>
    )
}

function MyApp({ Component, pageProps }) {
    switch (Component) {
        case Welcome:
            return (
                <AppWrapper>
                    <PublicPageLayout>
                        <Component {...pageProps} />
                    </PublicPageLayout>
                </AppWrapper>
            );
        case Login:
            return (
                <AppWrapper>
                    <AlreadyLogin>
                        <Component {...pageProps} />
                    </AlreadyLogin>
                </AppWrapper>
            );
        default:
            return (
                <AppWrapper>
                    <AuthUserGuard>
                        <SideLayout>
                            <Component {...pageProps} />
                        </SideLayout>
                    </AuthUserGuard>
                </AppWrapper>
            );
    }
}

export default MyApp
