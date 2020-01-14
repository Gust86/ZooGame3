import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animals';
import { Chore } from '../models/chores';
import { animals } from '../list/animal-list';
import { chores } from '../list/chore-list';

@Component({
  selector: 'app-zookeeper',
  templateUrl: './zookeeper.component.html',
  styleUrls: ['./zookeeper.component.css']
})
export class ZookeeperComponent implements OnInit {
  animalList: Animal[] = animals;
  choreList: Chore[] = chores;

  constructor() { }

  ngOnInit() {
  }

}
