const MINUTES_IN_HOUR = 60;

export const formatRuntime = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / MINUTES_IN_HOUR);
    const minutes = totalMinutes % MINUTES_IN_HOUR;

    return `${hours} ч ${minutes} мин`;
};
