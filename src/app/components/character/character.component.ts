import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { FinalSpaceService } from 'src/app/services/finalspace.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(
    private finalSpaceService: FinalSpaceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id-->', id);

    this.finalSpaceService.getCharacterById(Number(id))
      .subscribe(character => {
        if (!character) {
          return this.router.navigateByUrl('/');
        }

        this.character = character;
        console.log('character --> ', this.character);
      })
  }

}
