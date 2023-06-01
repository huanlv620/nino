import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from '~/routes';
import { Default as DefaultLayout } from '~/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

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
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
