import { Status } from "./characters-response";

export interface SimpleCharacter {
  id: string;
  name: string;
  status: Status;
  species: string;
  origin: string;
  location: string;
  Image: string;
}
