# Metrics for benchristel.com

Created: July 4, 2024.<br>
Updated: October 2, 2024.

## Background

The goal of the [web portal](/portal.html) page is twofold:

- **Goal 1:** Contain my internet addiction. The analogy is to wildfire containment: the idea is to define a perimeter around the bad thing, so it can't expand, and then ratchet it slowly inwards. To that end, I generate a [LeechBlock NG](https://www.proginosko.com/leechblock/) [configuration file](/leechblock.txt) that I use to block all sites not in the web portal.
- **Goal 2:** Preserve links to the websites I use, in case web search [becomes unusable](https://waywardweb.org/why.html). A side effect / subgoal is that the portal can serve as a starting point for a web crawler, which will come in handy if/when I want to build my own search engine.

## Data collected

The metric for **Goal 1** is **"number of webpages visited per month"** as measured by my browser history. This number should remain stable or decrease over time. It's unclear what an ideal value for this metric would be — maybe around 300? (EDIT: 900 pages per month feels about right.) As of June 2024, it's around 2000.

A few webpages that I consider mostly harmless are excluded from this metric. Those include:

- the [Web Portal](/portal.html) itself
- [Bastion](https://bastionhome.github.io/)
- my [meditation timer](https://benchristel.github.io/meditation/)
- my email inbox

I might add to this list in the future.

The metric for **Goal 2** is **"number of web searches performed per month."** Google and DuckDuckGo searches are counted separately because Google is more prone to enshittification. Lower numbers are better.

## How to gather metrics

Run `tools/metrics HISTORYFILE`

## Historical Data

**Lower numbers are better.**

| Month    | Webpages | Google searches | DDG searches |
| -------- | -------- | --------------- | ------------ |
| Sep 2024 | 902      | 0               | 25           |
| Aug 2024 | 1591     | 1               | 87           |
| Jul 2024 | 1072     | 1               | 101          |
| Jun 2024 | 1974     | 6               | 217          |
| May 2024 | 2122     | 30              | 168          |
| Apr 2024 | 1221     | 0               | 136          |
| Mar 2024 | 1593     | 0               | 170          |
| Feb 2024 | 1435     | 6               | 160          |

## Notes

### September 2024

This month felt balanced. Just over 900 pages. Many of them were personal websites, notably [Skyhold](https://skyhold.org/) and [maya.land](https://maya.land).

Next goal: hold pages per month at 900 while driving web searches to zero.

### August 2024

That one Google search doesn't count - I was using Unicode.org's search feature, which I thought was a first-party thing, but it turned out to just be a link to Google. Why the Unicode Consortium can't build a search tool for _Unicode characters, which they presumably already have an exhaustive, in-memory-sized database of,_ is beyond me. But there it is.

I felt like I visited a _lot_ of pages this month, but I guess it wasn't that many. I did discover many new websites through [the Wayward Web](https://waywardweb.org), and had to wait through the 20-second delay that LeechBlock imposes for each one. Maybe the delay made it feel like there were more of them.