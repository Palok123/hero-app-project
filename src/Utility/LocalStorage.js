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

}
const removeFromDb = (id)=> {
    const storedIds = getStoredId();
    const newIds = storedIds.filter(i => i!=id);
     localStorage.setItem('installAppsId',JSON.stringify(newIds));


}
export {setIdToDb,getStoredId,removeFromDb}