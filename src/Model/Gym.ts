import { Activities } from "./Activities";

export interface Gym {
    imageUrl: string;
    name: string;
    location: string;
    activities: Activities [];
    access: string;
    openOnWeekends: string ;
  }