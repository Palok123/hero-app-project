import { useNavigate } from 'react-router'
import errorAppsLogo from '../../assets/App-Error.png'
export default function AppsNotFound(){
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <img src={errorAppsLogo} className='max-w-[320px] max-h-[250px] mx-auto' />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='text-3xl sm:text-5xl font-semibold text-center mt-10'>OPPS!! APP NOT FOUND</h2>
                <p className='text-[20px] text-[#627382] mt-4 text-center'>The App you are requesting is not found on our system.  please try another apps</p>
                <button onClick={()=>navigate(-1)} className='btn bg-[#632EE3] text-white mt-5'>Go Back!</button>
            </div>
        </div>
    )
}