import '../styles/globals.css'
import Home from '.';
import TopLayout from '../components/TopLayout/TopLayout';
import Login from './login';
import SignUp from './signup';
import SideLayout from '../components/SideLayout/SideLayout';
import AuthUserProvider from '../contexts/authUserContext';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import AlreadyLogin from '../components/AlreadyLogin/AlreadyLogin';
import { StateContextProvider } from '../contexts/StateContext';
import {NextUIProvider} from "@nextui-org/react";
import AuthServiceProvider from "../contexts/authContext";


// function MyApp({ Component, pageProps }) {
//   switch (Component) {
//     case Home: {
//       return (
//         <AuthProvider>
//           <StateContextProvider>
//             <AlreadyLogin>
//               <TopLayout>
//                 <Component {...pageProps} />
//               </TopLayout>
//             </AlreadyLogin>
//           </StateContextProvider>
//         </AuthProvider>
//       );
//     }
//     case (Login):
//       return (
//         <AuthProvider>
//           <StateContextProvider>
//             <AlreadyLogin>
//               <Component {...pageProps} />
//             </AlreadyLogin>
//           </StateContextProvider>
//         </AuthProvider>
//       );
//     case (SignUp):
//       return (
//         <AuthProvider>
//           <StateContextProvider>
//             <AlreadyLogin>
//               <Component {...pageProps} />
//             </AlreadyLogin>
//           </StateContextProvider>
//         </AuthProvider>
//       );
//     default:
//       return (
//         <AuthProvider>
//           <StateContextProvider>
//             <ProtectedRoute>
//               <SideLayout>
//                 <Component {...pageProps} />
//               </SideLayout>
//             </ProtectedRoute>
//           </StateContextProvider>
//         </AuthProvider>
//       )
//   }
// }

function MyApp({ Component, pageProps }) {
  return (
      <NextUIProvider>
          <AuthServiceProvider>
              <AuthUserProvider>
                  {/*<AlreadyLogin>*/}
                  <Component {...pageProps} />
                  {/*</AlreadyLogin>*/}
              </AuthUserProvider>
          </AuthServiceProvider>
      </NextUIProvider>
  );
}

export default MyApp
