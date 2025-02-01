import { Project } from "@/types/Project";

export const projects: Project[] = [
    {
        name: "Payments Application",
        domain: "Finance",
        duration: {
            start: {
                month: 8,
                year: 2019
            },
            end: {
                month: 6,
                year: 2021
            },
            isOngoing: false
        },
        techStack: [
            "React Native",
            "TypeScript",
            "Jest",
        ],
        highlights: [
            "Analyzed client requirements and delivered solutions supported by POCs.",
            "Led a development stream, coordinating with team members to ensure successful delivery.",
            "Owned 2 Major Business flows and implemented by myself.",
            "Collaborated closely with clients, adhering to Agile and XP practices such as Pair Programming, Clean Code, Refactoring, Stand-ups, Retrospectives and Feedback.",
        ]
    },
    {
        name: "Legacy modernization of Pricing Application",
        domain: "Ecommerce",
        duration: {
            start: {
                month: 7,
                year: 2021
            },
            end: {
                month: 7,
                year: 2022
            },
            isOngoing: false
        },
        techStack: [
            "Spring Boot",
            "WebFlux",
            "Java",
            "JUnit",
            "Microsoft SqlServer"
        ],
        highlights: [
            "Took ownership of 2 micro services and made them for deployment.",
            "Developed JMX performance scripts for API testing.",
            "Improved sonar code quality and added more UNIT and INTEGRATION tests over Legacy service.",
            "Conducted onboarding sessions and knowledge-sharing sessions for new team members.",
            "Did spikes on Webflux and It’s libraries, shared learnings with the team members.",
        ]
    },
    {
        name: "Source control management system with Stacked Diffs approach",
        domain: "Internal tool",
        duration: {
            start: {
                month: 12,
                year: 2022
            },
            end: {
                month: 4,
                year: 2023
            },
            isOngoing: false
        },
        techStack: [
            "TypeScript",
            "ExpressJS",
            "Mocha",
            "Chai",
            "git",
        ],
        highlights: [
            "Took ownership of the Command Line Interface (CLI) team and successfully developed Phase 1 features.",
            "Learned internals of GIT and proposed a couple of solutions to implement Stacks and Diffs on top of git and finalized one solution.",
        ]
    },
    {
        name: "Legacy Modernization: Data Exchange Between University Applications",
        domain: "Education",
        duration: {
            start: {
                month: 11,
                year: 2023
            },
            end: {
                month: 3,
                year: 2024
            },
            isOngoing: false
        },
        techStack: [
            "TypeScript",
            "Serverless",
            "AWS Lambda",
            "AWS RDS",
        ],
        highlights: [
            "Transitioned clients from a SOAP-based architecture to REST.",
            "Migrated the authentication mechanism from API keys to Auth0.",
            "Optimized Jenkins build time, reducing it from 25+ minutes to 12 minutes.",
        ]
    },
    {
        name: "Residential and Office property Application",
        domain: "Real Estate",
        duration: {
            start: {
                month: 4,
                year: 2023
            },
            end: {
                month: 7,
                year: 2023
            },
            isOngoing: false
        },
        techStack: [
            "TypeScript",
            "React Native",
        ],
        highlights: [
            "Enhanced the application by onboarding office users to the platform.",
            "Increased test coverage by adding comprehensive UNIT tests.",
        ]
    },
    {
        name: "Jobs Portal",
        domain: "",
        duration: {
            start: {
                month: 3,
                year: 2024
            },
            end: {
                month: 7,
                year: 2024
            },
            isOngoing: false
        },
        techStack: [
            "TypeScript",
            "React",
            "ExpressJs",
            "AWS SQS",
            "AWS Aurora Postgres",
            "Redis",
        ],
        highlights: [
            "Migrated clients Jobs and Candidates Management system from Excel to a robust web application.",
            "Built a platform for Hiring Consultants to shortlist profiles based on job requirements and forward them to Hiring Company Recruiters.",
            "Designed features for Hiring Company Recruiters to manage shortlisted candidates, including scheduling interviews and making decisions.",
            "Developed end-to-end tests for the application using Playwright.",
        ]
    },
] satisfies Project[]
