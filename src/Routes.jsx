import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";
import Catalog from "./components/Catalog/Catalog";
import Contacts from "./components/Contacts/Contacts";

const router = [
    {
        path:'/',
        element:<Layout><Main/></Layout >
    },
    {
        path:'/catalog',
        element:<Layout><Catalog/></Layout >
    },
    {
        path:'/contacts',
        element:<Layout><Contacts/></Layout >
    }
]
export const Routes = () => (<RouterProvider router={createBrowserRouter(router)}/>)
export default Routes;