import { Education } from "@/types/Education";

export const educationDetails: Education[] = [
    {
        institutionName: "RGUKT IIIT Basar",
        course: "B. Tech",
        specification: "Electronics and Communications Engineering",
        cgpa: 8.5,
        duration: {
            start: {
                month: 5,
                year: 2015
            },
            end: {
                month: 5,
                year: 2019
            }
        }
    },
    {
        institutionName: "RGUKT IIIT Basar",
        course: "Pre-University Course",
        specification: "MPC",
        cgpa: 9.8,
        duration: {
            start: {
                month: 5,
                year: 2013
            },
            end: {
                month: 5,
                year: 2015
            }
        }
    },
] satisfies Education[]
