# Searching the Web Portal

## Introduction

The searchbar on the [Web Portal](/portal.html) page has multiple uses and some hidden functionality. This is admittedly not ideal for software designed for general consumption, but the web portal is only partly intended for general consumption. I figure I'm probably the only person who would care about the hidden features. I'm going to document them here anyway, though, for my own benefit and perhaps for yours.

## Autofocusing the search bar

You can make the searchbar focus automatically when the page loads, so you don't have to click it before you type your query. Check the box under [Settings](/portal.html#settings).

## Filtering

The first function of the searchbar is to filter the portal page. You've probably discovered this if you've ever typed anything into the search bar.

Filtering uses **"and"** logic: in order for an item to be shown in the search results, it must match _all_ the words in the search.

The matching is **case-insensitive**. Search terms are matched against the **beginnings of words** on the page, so if you search for `script`, you will find words like "scripts" and "scripting". However, a search for `script` will _not_ match a word like "JavaScript" — only words that _start_ with "script" will match.

If your search matches the text of a **heading** on the page, everything under that heading will be shown.

## DuckDuckGo Search

The second function of the searchbar is to search the web with DuckDuckGo. This function can be invoked by pressing the `enter` key, or by clicking the `DuckDuckGo` button.

## Other Search Engines

Several other search engines are available; to use them, type your search term and click the appropriate button.

If your favorite search engine isn't in the list, you can use a [DuckDuckGo bang](https://duckduckgo.com/bangs) to invoke it. For example, typing "fruit bat !g" and then pressing `enter` will search Google for the term "fruit bat."

## Shortcuts

I have hard-coded a few shortcuts into the searchbar for my own use. Typing a shortcut and pressing `enter` takes you directly to the corresponding URL.

| Shortcut | URL | Description |
| -------- | --- | ----------- |
| tv       | https://benchristel.github.io/tv/ | Culture Machine
| zen      | https://benchristel.github.io/meditation/ | Meditation timer
| bliki    | https://github.com/benchristel/benchristel.github.io/wiki | My digital garden

<div class="space-32"></div>


<div class="centered-text">

[Back to the Portal Page](/portal.html)

</div>