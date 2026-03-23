import App from "./App";

export default function AllApps({data}){
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                data.map(app=><App app={app}></App>)
            }
        </div>
    )
}