import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePokemon(poke){
    if(poke.nickname == undefined || poke.nature == undefined || poke.ability == undefined || poke.move1 == undefined || poke.move2 == undefined || poke.move3 == undefined || poke.move4 == undefined || poke.plan == undefined) {
      return false;
    } else {
      return true;
    }
  }

}
