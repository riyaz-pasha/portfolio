export type Year = {
    month: number;
    year: number;
}

export type Duration = {
    start: Year
    end?: Year
    isOngoing: boolean
}
