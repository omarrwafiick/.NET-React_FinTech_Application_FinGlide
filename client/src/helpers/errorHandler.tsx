export const HandleError = (errors: any) => {
  if (errors?.status === 401) {
    console.error("User is unauthorized");
    window.history.pushState({}, "Login", "/login");
  }
 
  if (Array.isArray(errors)) {
    errors.forEach((error) => {
      console.error(error);
    });
  } 
  
  else if (typeof errors === 'object' && errors !== null) {
    console.error("Error:", errors.message || JSON.stringify(errors));
  } 
 
  else {
    console.error("Unknown error:", errors);
  }

  return errors;
};