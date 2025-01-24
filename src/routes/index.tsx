import {RouteObject} from "react-router-dom";
import {SignIn} from "../page/SignIn.tsx";


// const lazyLoad = (Component: Any) => (
//     <Suspense fallback={<CircularProgress />}>
//         <Component/>
//     </Suspense>
// )
//
// const SignIn = lazily(() => import('../page/SignIn.tsx'));


export const reactRouter: Array<Partial<RouteObject>> = [
    {
        path: '/signin',
        index: false,
        element: <SignIn/>
    }
]

