# Metrics for benchristel.com

July 4, 2023

## Background

The goal of the [web portal](/portal.html) page is twofold:

- **Goal 1:** Contain my internet addiction. The analogy is to wildfire containment: the idea is to define a perimeter around the bad thing, so it can't expand, and then rachet it slowly inwards. To that end, I generate a [LeechBlock NG](https://www.proginosko.com/leechblock/) [configuration file](/leechblock.txt) that I use to block all sites not in the web portal.
- **Goal 2:** Preserve links to the websites I use, in case web search [becomes unusable](https://waywardweb.org/why.html). A side effect / subgoal is that the portal can serve as a starting point for a web crawler, which will come in handy if/when I want to build my own search engine.

## Data collected

The metric for **Goal 1** is **"number of webpages visited per month"** as measured by my browser history. This number should remain stable or decrease over time. It's unclear what an ideal value for this metric would be — maybe around 300? As of June 2024, it's around 2000.

A few webpages that I consider mostly harmless are excluded from this metric. Those include:

- the [Web Portal](/portal.html) itself
- [Bastion](https://bastionhome.github.io/)
- my [meditation timer](https://benchristel.github.io/meditation/)

I might add to this list in the future.

The metric for **Goal 2** is **"number of web searches performed per month."** Google and DuckDuckGo searches are counted separately because Google is more prone to enshittification. Lower numbers are better.

## How to gather metrics

Run `tools/metrics`

## Historical Data

**Lower numbers are better.**

| Month    | Webpages | Google searches | DDG searches |
| -------- | -------- | --------------- | ------------ |
| Jun 2024 | 2028     | 6               | 217          |