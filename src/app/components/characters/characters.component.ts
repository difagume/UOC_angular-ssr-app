import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { FinalSpaceService } from 'src/app/services/finalspace.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(private finalSpaceService: FinalSpaceService) { }

  ngOnInit(): void {
    this.finalSpaceService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

}
