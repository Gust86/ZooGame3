import { Animal } from './animals';
import { Chore } from './chores';

export interface Zookeeper {
    animalList: Animal[];
    choreList: Chore[];
    resources: number;
}