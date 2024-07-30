function signIn (e){
  
  e.preventDefault();
  const formData = new FormData(e.target);
  const dataObjc=Object.fromEntries(formData);
  console.log(dataObjc);

}
export {signIn}

