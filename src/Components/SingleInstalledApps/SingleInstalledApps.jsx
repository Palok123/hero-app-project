import { useState } from 'react';
import downloadLogo from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

export default function SingleInstalledApps({apps,handleUnInstalled}){
    const downloads = apps.downloads.toString()[0];
    
    return (
        <div className={` bg-white p-4 rounded-sm flex justify-between items-center mt-4`}>
            <div className="flex gap-4 mt-2">
                <div>
                    <img src={apps.image} className="w-20 h-20 rounded-sm" />
                </div>
                <div>
                    <div>
                        <h3 className="text-[20px] font-medium text-[#001931]">{apps.title} : {apps.description}</h3>
                    </div>
                    <div className='flex gap-4 items-center mt-3'>
                        <div className='flex gap-1 items-center'>
                            <div><img src={downloadLogo} className='w-[14px] h-[14px]' /></div>
                            <div className='text-[#00D390]'>{downloads}M</div>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <div><img src={ratingIcon} className='w-[14px] h-[14px]' /></div>
                            <div className='text-[#FF8811]'>{apps.ratingAvg}</div>
                        </div>
                        <p className='text-[#627382]'>{apps.size} MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>handleUnInstalled(apps.id)} className='btn font-semibold text-white  bg-[#00D390]'>Uninstall</button>
            </div>
        </div>
    )
}