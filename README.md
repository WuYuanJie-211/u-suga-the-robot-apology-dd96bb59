# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/WuYuanJie-211/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/WuYuanJie-211/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

## Entry

**Title:** The Robot Apology

> I ran the vacuum at full power during the baby's nap because I had forgotten the nursery was on quiet hours.
> I have learned to check the household schedule before starting any loud job, and from now on I will run the vacuum on silent mode whenever anyone in the house is asleep.

Two lines, one sentence each. A robot apologizes for one exact mistake —
running the vacuum at full power during the baby's nap — and the lesson
follows directly from it: check the schedule before any loud job, and use
silent mode whenever anyone is asleep.

## How it works

`main.ts` writes the two-line entry to `/output/entry.txt`, enforcing the gate
(exactly two non-empty lines, each exactly one sentence ending with a period)
before writing and re-verifying the file on disk after writing.
