import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  //primo metodo
  autentica = (userid:string, password: string) : boolean => {
    const retVal = (userid === 'Carmine' && password === 'pass') ? true : false;
    if(retVal){
      sessionStorage.setItem("User", userid);
    }
    return retVal;
  }

  //metodo che ci dice chi è loggato
  loggedUser = () : string | null => (sessionStorage.getItem("User")) ? sessionStorage.getItem("User") : "";

  //metodo che ci dice se siamo loggati o no
  isLogged = () : boolean => (sessionStorage.getItem("User")) ? true : false;

  //metodi per svuotare l'archiviazione della sessione
  clearUser = () : void => sessionStorage.removeItem("User");
  clearAllData = () : void => sessionStorage.clear();

}
