import assert from "node:assert/strict";
import test from "node:test";
import { normalizeContributions } from "./githubContributions.ts";

test("normalizes the public API calendar into weeks and contribution totals", () => {
    const data = normalizeContributions({
        total: { lastYear: 9 },
        contributions: [
            { date: "2025-12-28", count: 2, level: 1 },
            { date: "2025-12-29", count: 3, level: 2 },
            { date: "2026-01-03", count: 4, level: 2 },
            { date: "2026-01-04", count: 5, level: 3 },
        ],
    });

    assert.equal(data.totalContributions, 9);
    assert.equal(data.contributions[0][0].contributionCount, 2);
    assert.equal(data.contributions[0][0].y, 0);
    assert.equal(data.contributions[0][1].contributionCount, 3);
    assert.equal(data.contributions[0][1].y, 1);
    assert.equal(data.contributions[0][6].contributionCount, 4);
    assert.equal(data.contributions[0][6].y, 6);
    assert.equal(data.contributions[1][0].contributionCount, 5);
    assert.equal(data.contributions[1][0].y, 0);
});