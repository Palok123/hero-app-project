import { useNavigate } from 'react-router';
import errorImg from '../../assets/error-404.png';
export default function ErrorPage(){
    const navigate = useNavigate();
    return (
        <div className='mt-20  flex items-center flex-col'>
            <div>
                <img src={errorImg} className='max-w-[300px] max-h-[250px]' />
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h3 className=' text-3xl sm:text-5xl font-semibold mt-4'>Oops, page not found!</h3>
                <p className='text-[#627382]'>The page you are looking for is not available.</p>
                <button onClick={()=>navigate(-1)} className='btn bg-[#632EE3] text-white'>Go Back!</button>
            </div>
        </div>
    )
}