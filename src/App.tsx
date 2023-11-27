import {Routes, Route} from 'react-router-dom';

import './App.css';
import { publicRoutes } from './routes';

function App() {

    // fetch('https://62a4da9f259aba8e10ef2d23.mockapi.io/api/v1/users/1')
    // .then(response => response.json())
    // .then(json => {
    //             localStorage.removeItem("user-profile");
    //             localStorage.setItem("user-profile", JSON.stringify(json));
    //         })
    
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Layout = route.layout;
                const Page = route.component;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })
            }
        </Routes>
    );
}

export default App;
