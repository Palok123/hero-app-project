import { Link } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import iconRating from '../../assets/icon-ratings.png'
export default function App({app}){
    const download = app.downloads;
    const downloadsData = download.toString()[0];
   
    return (
      <Link to={`/apps/${app.id}`}>
        <div className="p-5 bg-white rounded-lg shadow-sm transition-transform duration-200 hover:scale-102">
           <div >
                 <img src={app.image} className="w-full h-75 rounded-lg" alt="app-imag" />
           </div>
           <div className="my-4">
             <p>{app.title} : {app.companyName}</p>
           </div>
           <div className='flex justify-between'>
              <div className='flex items-center gap-1 bg-[#F1F5E8] text-[#00D390] p-1 rounded-sm'>
                <img src={downloadIcon} className='h-3 w-3'/>
                <p>{downloadsData}M</p>
              </div>
              <div className='flex items-center gap-1 bg-[#FFF0E1] text-[#FF8811] p-1 rounded-sm'>
                <img src={iconRating} className='h-3 w-3'/>
                <p>{app.ratingAvg}</p>

              </div>
           </div>
        </div>
      </Link>
    )
}