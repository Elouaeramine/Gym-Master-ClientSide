import { Access } from "./Access";
import { Activities } from "./Activities";
import { Open } from "./Open";

export interface Gym {
  id: number;
  imageUrl: string;
  name: string;
  location: string;
  activities: Activities[];
  access: Access[];
  openOnWeekends: Open[];
}