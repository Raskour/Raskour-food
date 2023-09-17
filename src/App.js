import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Help from "./Components/Help";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

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
    path: "/",
    element: <AppBody />,
    children: [
      {
        path: "/",
        element: (
          <PageLayout>
            <Home />
          </PageLayout>
        ),
      },

      {
        path: "/help",
        element: (
          <PageLayout>
            <Help />
          </PageLayout>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <PageLayout>
            <RestaurantMenu />
          </PageLayout>
        ),
      },
      {
        path: "/cart",
        element: (
          <PageLayout>
            <Cart />
          </PageLayout>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
