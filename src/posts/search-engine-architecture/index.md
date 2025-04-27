# Architecture of a Possible Future Search Engine

## Why

- Google turns up lots of spam, and you can't turn off its AI features
- DuckDuckGo turns up lots of spam
- Even Marginalia results are full of spammy listicles for queries like
  "linux video editor".
- It's becoming increasingly hard to to find:
  - the official websites of products and businesses (i.e. legit for-profit
    websites)
  - not-for-profit personal sites
- Instead, search engine results are full of parasitic third-party advertisers,
  affiliate-linkers, and keyword stuffers.

## Forces

- Must be cheap to run - crawling and building the index should be able to run
  on my laptop
- Must be spam-resistant

## Searching

The process goes something like this:

- You type in your search query and hit "go"
- The query is analyzed into n-grams, where n is maybe 1 to 3.
- additional n-grams may be synthesized by lemmatizing the search terms, fixing
  typos, or finding synonyms. [winkjs](https://winkjs.org/) might be a good tool
  to use, but it's too big for clientside use.
  [stemmer](https://www.npmjs.com/package/stemmer) is much smaller.
  [wordnet](https://wordnet.princeton.edu/) would be really useful but its
  database is also probably too big to use clientside.
- For each n-gram, the browser requests an `index` file from the server. E.g. if
  the 2-gram "penguin hat" is in your query, it would request `/index/penguin-hat.txt`.
  There might not be an index for unusual n-grams. That's okay.
- The index file for an n-gram lists web pages related to that n-gram. Each page is
  associated with a depth score. The score is determined by the minimum number
  of hops needed to reach that page from the crawl root. Fewer hops are better.
  Possibly the score will be determined using a formula like `2^(-n)`, where `n`
  is the number of hops.
- The index files are unioned to get a combined list of pages.
- For each page in the combined list, the `rank` is calculated, by:
  - counting how many indexes mention that page, possibly with a weight so
    indexes for longer n-grams are worth more, and indexes for synthetic n-grams
    are worth less.
  - multiplying the count of indexes by the page's depth score.
- Finally, the 10 results with the highest `rank` are displayed.

## Crawling

- Maybe use [supercrawler](https://github.com/brendonboshell/supercrawler).
- We'll want to take care not to flood domains with requests. Some kind of
  per-domain rate limiting will be needed.
- Crawling will be breadth-first.
- Crawling will be limited to a depth of 2 cross-domain links and 3 in-domain
  links.
- If a page has more than 10 (new-to-us) links, we'll log the fact and only
  crawl the first 10 links, unless the page is in an allowlist.
  - This means that by default, we'll crawl a maximum of 1000 pages per domain.
  - It also means that the order of page traversal will affect what pages get
    crawled, which is annoying. The crawl could be made deterministic by
    dropping the "new to us" condition and just crawling the first 10 links that
    appear on the page.

With these parameters, we will crawl a maximum of 1 million pages for every
seed page. That seems like it might be too many.
