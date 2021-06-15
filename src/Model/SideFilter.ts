import { Activities } from "./Activities";

export class SideFilter {
    constructor(
        public activities: string[],
        public access: string[],
        public openOnWeekends: string[]
        ) { }
}