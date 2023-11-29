import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Help from "./Components/Help";
import Error from "./Components/Error";
import Restaurant from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
//Provider is required to access the redux store.
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
import Fav from "./Components/Fav";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import { AuthProvider } from "./context/AuthContext";
// PageLayout

const PageLayout = ({ children }) => {
  return (
    <main className="page_wrapper" id="main-content">
      {children}
    </main>
  );
};

function AppBody() {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Toaster />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PageLayout>
        <Login />
      </PageLayout>
    ),
  },
  {
    path: "/",
    element: <AppBody />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <PageLayout>
              <Home />
            </PageLayout>
          </PrivateRoute>
        ),
      },

      {
        path: "/help",
        element: (
          <PrivateRoute>
            <PageLayout>
              <Help />
            </PageLayout>
          </PrivateRoute>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <PrivateRoute>
            <PageLayout>
              <Restaurant />
            </PageLayout>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <PageLayout>
              <Cart />
            </PageLayout>
          </PrivateRoute>
        ),
      },
      {
        path: "/fav",
        element: (
          <PrivateRoute>
            <PageLayout>
              <Fav />
            </PageLayout>
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <RouterProvider router={appRouter} />
  </AuthProvider>
);
