import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AllApplication from "../Pages/AllApplication/AllApplication";
import AppDetails from "../Pages/AppDetails/AppDetails";
import InstalledApps from "../Pages/InstalledApp/InstalledApp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children :[
            {
                index:true,
                path:'/',
                loader:()=>fetch('/AppsData.json'),
                Component:Home
            },
            {
                path:'apps',
                loader:()=>fetch('/AppsData.json'),
                Component:AllApplication
            },
            {
                path:'/apps/:id',
                loader :()=>fetch('/AppsData.json'),
                Component:AppDetails
            },
            {
                path:'installation',
                loader: ()=>fetch('/AppsData.json'),
                Component:InstalledApps
            },
            {
        path:'*',
        Component:ErrorPage
    }
            

        ]
        
    }
    
])