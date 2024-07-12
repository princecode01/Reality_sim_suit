import { NextUIProvider } from "@nextui-org/react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import User from "./pages/User";
// import SignUp from "./pages/SignUp";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000, // 1 minute
      staleTime: 0, //refetch once the data has changed
    },
  },
});

function App() {

  const [userData, setUserData] = useState(null);
  const saveUserData = () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setUserData(user);
    }
  }

  let logout = () => {
    localStorage.removeItem('user');
    setUserData(null)
    return <Navigate to='/' />
  }

  useEffect(() => {
    saveUserData();
  }, [])


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <>
        <ScrollToTop />
        <Layout logout={logout} userData={userData} />
      </>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        { path: "/user/:userID", element: <ProtectedRoute userData={userData}><User /></ProtectedRoute> },
        { path: "/login", element: <Login saveUserData={saveUserData} /> },
        // { path: "/signup", element: <SignUp /> },
      ],
    },
  ]);


  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Toaster
          position="bottom-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#FED8B1",
              color: "#6F4E37",
            },
          }} />

        <RouterProvider router={routes} />

      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default App;
