export interface ContributionDay {
    contributionCount: number;
    date: string;
    x: number;
    y: number;
}

export interface ContributionsData {
    contributions: ContributionDay[][];
    totalContributions: number;
}

interface ApiContribution {
    date: string;
    count: number;
    level: number;
}

interface ApiResponse {
    total: Record<string, number>;
    contributions: ApiContribution[];
}

const DAY_IN_MS = 24 * 60 * 60 * 1000;

export function normalizeContributions(response: ApiResponse): ContributionsData {
    const firstDate = response.contributions[0]
        ? new Date(`${response.contributions[0].date}T00:00:00Z`)
        : new Date(0);
    const firstWeekStart = firstDate.getTime() - firstDate.getUTCDay() * DAY_IN_MS;
    const weeks: ContributionDay[][] = [];

    for (const contribution of response.contributions) {
        const date = new Date(`${contribution.date}T00:00:00Z`);
        const weekIndex = Math.floor((date.getTime() - firstWeekStart) / (7 * DAY_IN_MS));
        const dayIndex = date.getUTCDay();
        weeks[weekIndex] ??= [];
        weeks[weekIndex][dayIndex] = {
            contributionCount: contribution.count,
            date: contribution.date,
            x: weekIndex,
            y: dayIndex,
        };
    }

    return {
        contributions: weeks,
        totalContributions: response.total.lastYear ?? 0,
    };
}