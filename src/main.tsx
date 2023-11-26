import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Page1 from './routes/admin/Page1.tsx';
import Page2 from './routes/admin/Page2.tsx';
import AdminRoot from './routes/admin/root.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import HomePage from './routes/HomePage.tsx';
import { LoginPage } from './routes/LoginPage.tsx';
import ProductPage from './routes/ProductPage.tsx';
import ProductsPage from './routes/ProductsPage.tsx';
import { PrivateRoute } from './shared/auth/PrivateRoute.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <HomePage />,

      },
      {
        path: "demo",
        async lazy() {
          const { DemoPage } = await import("./routes/DemoPage.tsx");
          return { Component: DemoPage }
        }
      },
      // products with Loaders
      {
        path: "products",
        element: <ProductsPage />,
        loader: async () => {
          return fetch(`https://jsonplaceholder.typicode.com/users`);
        },
      },
      {
        path: "products/:id",
        element: <ProductPage />,
        loader: async ({ params }) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        },
      },

      // Admin area
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "admin",
        element: <PrivateRoute redirectTo="/"><AdminRoot /></PrivateRoute>,
        children: [
          {
            path: "page1",
            element: <Page1 />,
          },
          {
            path: "page2",
            element: <Page2 />,
          }
        ]
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
