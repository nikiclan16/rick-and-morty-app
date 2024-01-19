export interface CharactersResponse {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Result {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export type Gender = "Male" | "Female" | "Genderless" | "unknown";

export interface Location {
  name: string;
  url: string;
}

export type Status = "Alive" | "unknown" | "Dead";
