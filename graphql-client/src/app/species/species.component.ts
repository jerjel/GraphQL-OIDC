import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService, Species } from '../characters.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species!: Species;

  constructor(private route: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      this.species = await this.characterService.findSpecies(params.name);
    });
  }
}