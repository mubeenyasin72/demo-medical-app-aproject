



export const setSuperAdminData = (Data) =>{
    localStorage.setItem("SuperAdminData",JSON.stringify(Data));
}
export const getSuperAdminData = ()=>{
    const SuperAdminData = JSON.parse(localStorage.getItem("SuperAdminData"))
    return SuperAdminData;
}
export const logoutSuperAdmin = ()=>{
    localStorage.removeItem("SuperAdminData");
}