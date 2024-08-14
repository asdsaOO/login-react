function signIn (e){
  
  e.preventDefault();
  const formData = new FormData(e.target);
  const dataObjc=Object.fromEntries(formData);
  console.log(dataObjc);
  return new Promise ((res,rej)=>{
    setTimeout(() => {
      res ("servicio finalizado :D");  
      
    }, 2000);
  })

}
export {signIn}

