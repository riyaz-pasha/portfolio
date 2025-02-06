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
            },
            isOngoing: false
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
            },
            isOngoing: false
        }
    },
    {
        institutionName: "Navodaya Model High School",
        course: "SSC",
        specification: "",
        cgpa: 9.8,
        duration: {
            start: {
                month: 6,
                year: 2003
            },
            end: {
                month: 4,
                year: 2013
            },
            isOngoing: false
        }
    },
] satisfies Education[]
