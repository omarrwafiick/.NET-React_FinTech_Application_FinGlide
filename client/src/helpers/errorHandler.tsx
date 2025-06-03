 
export const HandleError = (errors:any)=>{
    if(errors.status == 401){
        console.error("User is authorized");
        window.history.pushState({},"Login", "/login")
    }
    errors.forEach(error => {  
        console.error(error);
    });
    return errors;
}