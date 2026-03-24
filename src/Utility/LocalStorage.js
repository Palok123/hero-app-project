import Swal from 'sweetalert2'
  import {  toast } from 'react-toastify';
const getStoredId = ()=>{
    const ids = localStorage.getItem('installAppsId');
    if(ids){
        return JSON.parse(ids);
    }
    else {
        return []
    }
}
const setIdToDb = (id)=>{
    const ids = getStoredId();
    if(ids.includes(id)){
        return;
    }
    ids.push(id);
    localStorage.setItem('installAppsId',JSON.stringify(ids));
    Swal.fire({
  title: "Good job!",
  text: "Apps Installed",
  icon: "success"
});

}
const removeFromDb = (id)=> {
    const storedIds = getStoredId();
    const newIds = storedIds.filter(i => i!=id);
     localStorage.setItem('installAppsId',JSON.stringify(newIds));

    toast("1 apps uninstalled successfull")

}
export {setIdToDb,getStoredId,removeFromDb}