import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetail, CharactersService } from '../characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character!: CharacterDetail;

  constructor(private route: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      this.character = await this.characterService.findCharacter(params.name);
    });
  }
}