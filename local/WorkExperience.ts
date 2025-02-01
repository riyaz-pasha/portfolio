import { WorkExperience } from "@/types/WorkExperience";

export const workExperiences: WorkExperience[] = [
    {
        organization: {
            name: "Everest Engineering",
            url: ""
        },
        role: "Software Craftsperson",
        duration: {
            start: {
                month: 10,
                year: 2022
            },
            isOngoing: true,
        },
        competencies: [
            "Requirements analysis and articulation",
            "Business solutioning",
            "Delegation",
            "Drives to outcomes",
        ]
    },
    {
        organization: {
            name: "ThoughtWorks",
            url: ""
        },
        role: "Application Developer | Consultant",
        duration: {
            start: {
                month: 7,
                year: 2020
            },
            end: {
                month: 10,
                year: 2022
            },
            isOngoing: false
        },
        competencies: [
            "Ownership and accountability",
            "Prioritization",
            "Business solutioning",
            "Mentoring",
        ]
    },
    {
        organization: {
            name: "ThoughtWorks",
            url: ""
        },
        role: "Application Developer | Consultant Graduate",
        duration: {
            start: {
                month: 7,
                year: 2019
            },
            end: {
                month: 7,
                year: 2020
            },
            isOngoing: false
        },
        competencies: [
            "Test driven development",
            "Clean code",
            "Estimation",
            "Getting code into production",
        ]
    },
] satisfies WorkExperience[]
