export interface Weight {
  value: number;
  unity: string;
}

export interface Height {
  value: number;
  unity: string;
}

export interface Caracteristics {
  birth: string;
  weight: Weight;
  height: Height;
  universe: string;
}

export interface Abilities {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

export interface Hero {
  name: string;
  alterEgo: string;
  imagePath: string;
  biography: string;
  caracteristics: Caracteristics;
  abilities: Abilities;
  movies: string[];
}

export interface Weight2 {
  value: number;
  unity: string;
}

export interface Height2 {
  value: number;
  unity: string;
}

export interface Caracteristics2 {
  birth: string;
  weight: Weight2;
  height: Height2;
  universe: string;
}

export interface Abilities2 {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

export interface Villain {
  name: string;
  alterEgo: string;
  imagePath: string;
  biography: string;
  caracteristics: Caracteristics2;
  abilities: Abilities2;
  movies: string[];
}

export interface Weight3 {
  value: number;
  unity: string;
}

export interface Height3 {
  value: number;
  unity: string;
}

export interface Caracteristics3 {
  birth: string;
  weight: Weight3;
  height: Height3;
  universe: string;
}

export interface Abilities3 {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

export interface AntiHero {
  name: string;
  alterEgo: string;
  imagePath: string;
  biography: string;
  caracteristics: Caracteristics3;
  abilities: Abilities3;
  movies: string[];
}

export interface Weight4 {
  value: number;
  unity: string;
}

export interface Height4 {
  value: number;
  unity: string;
}

export interface Caracteristics4 {
  birth: string;
  weight: Weight4;
  height: Height4;
  universe: string;
}

export interface Abilities4 {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

export interface Alien {
  name: string;
  alterEgo: string;
  imagePath: string;
  biography: string;
  caracteristics: Caracteristics4;
  abilities: Abilities4;
  movies: string[];
}

export interface Weight5 {
  value: number;
  unity: string;
}

export interface Height5 {
  value: number;
  unity: string;
}

export interface Caracteristics5 {
  birth: string;
  weight: Weight5;
  height: Height5;
  universe: string;
}

export interface Abilities5 {
  force: number;
  intelligence: number;
  agility: number;
  endurance: number;
  velocity: number;
}

export interface Human {
  name: string;
  alterEgo: string;
  imagePath: string;
  biography: string;
  caracteristics: Caracteristics5;
  abilities: Abilities5;
  movies: string[];
}

export interface RootObject {
  heroes: Hero[];
  villains: Villain[];
  antiHeroes: AntiHero[];
  aliens: Alien[];
  humans: Human[];
}



