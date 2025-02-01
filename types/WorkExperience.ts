import { Duration } from "./Common";

export type WorkExperience = {
    organization: {
        name: string;
        url: string;
    },
    role: string;
    duration: Duration;
    competencies: string[];
}
