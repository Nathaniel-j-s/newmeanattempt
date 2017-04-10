import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokeplanner',
  templateUrl: './pokeplanner.component.html',
  styleUrls: ['./pokeplanner.component.css']
})
export class PokeplannerComponent implements OnInit {
  name: String;
  nature: String;
  ability: String;
  move1: String;
  move2: String;
  move3: String;
  move4: String;
  plan: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onPlannerSubmit() {
    const poke = {
      name: this.name,
      nature: this.nature,
      ability: this.ability,
      move1: this.move1,
      move2: this.move2,
      move3: this.move3,
      move4: this.move4,
      plan: this.plan
    }

    // Required fields
    if(!this.validateService.validatePokemon(poke)) {
      console.log(poke);
      this.flashMessage.show('Please fill in all fields.', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.authService.registerPoke(poke).subscribe(data => {
      if(data.success){
        this.flashMessage.show('This pokemon has now been placed in the box.', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show('Something went wrong.', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/pokeplanner']);
      }
    });
  }

}
