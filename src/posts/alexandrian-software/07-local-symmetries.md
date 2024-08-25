# 7. Local Symmetries

Christopher Alexander’s principle of symmetry echoes the empirical principle that we should assume the world is uniform until we have evidence of nonuniformity.[^2] Alexander sees symmetry as the application of this principle to design: symmetrical shapes are simpler than asymmetrical ones (bilateral symmetry trivially gives you 50% compressibility) so symmetry must be the default.

[^2]: That is, we should posit hypotheses that are general, and thus predictive and falsifiable.

> Complexity (in the bad sense) consists of distinctions which unnecessarily complicate a structure. To get simplicity, on the other hand, we need a process which questions every distinction. Any distinction which is not necessary is removed. To remove a distinction we replace it by a symmetry.
> 
> \[. . .\] There is an intimate and fundamental connection between arbitrariness, necessity, and symmetry, which says, in a nutshell, this. _Everything in nature is symmetrical unless there is a reason for it not to be._ When this law is violated, we feel that something is unnatural, and that is the way in which symmetry plays such a fundamental role.
> 
> —The Process of Creating Life, p. 469

Alexander was not, however, particularly fond of the global bilateral symmetry that characterizes classical architecture. His experience was that differences in the site, or in the purpose of each wing of the building, tended to motivate asymmetry at larger scales. So instead, he emphasized _local_ symmetry. Each smaller-scale center can be symmetrical, even if the whole building is not.

If there’s an equivalent of bilateral symmetry in code, it’s probably most apparent in if-else statements. Consider the following:

```js
// Example 1:
function foo() {
  if (someCondition) {
    return "a"
  }
  return "b"
}

// Example 2:
function foo() {
  if (someCondition) {
    return "a"
  } else {
    return "b"
  }
}
```

The addition of the `else` in Example 2 doesn't impact the meaning of the program, but it does enhance its symmetry. This symmetry lets us read the code breadth-first, outside-in. If we collapse the blocks in both examples, we see:

```js
// Example 1:
function foo() {
  if (someCondition) { ... }
  return "b"
}

// Example 2:
function foo() {
  if (someCondition) { ... }
  else { ... }
}
```

Only in the symmetrical Example 2 is it clear that the two branches are mutually exclusive.[^3]

[^3]: The readability difference between the two styles of if statement is insignificant for such a simple example, but for larger chunks of code, I find that the `else` helps clarify things.

In Go, we sometimes see the following pattern, which shuns even the asymmetry of the `else` keyword, and makes `false` as primary as `true`:

```
switch someCondition {
  case true:  return "a"
  case false: return "b"
}
```

…and that’s about as close as we ever get to bilateral symmetry in programming. More frequently, we see translational symmetry, where a template-like structure is repeated several times. Here is some Ruby that downloads a code repository given a URL:

```ruby
downloader =
  case URI(url).scheme
  when "https"
    HttpsDownloader
  when "ftp"
    FtpDownloader
  when "git"
    GitDownloader
  else
    raise ArgumentError.new("Unsupported protocol in URL: '#{url}'")
  end

downloader.download(url)
```

The repeating template here is:

```ruby
when "value"
  DownloaderClass
```

The repeating structure makes it easy to see which class each string corresponds to. It’s also easy to imagine extending this code with a new type of downloader.

To drive the point home, here is some asymmetrical code that does the same thing:

```ruby
# Bad code; no symmetry
if https_url?(url) || url.start_with?("ftp://")
  Downloader.get(url)
elsif git_ssh_url?(url)
  Git.clone(url)
end
```

Here, we have a `Downloader` module that’s responsible for two different kinds of URLs, and a `Git` module that’s responsible for the other kind. Also, the way we check for an FTP URL is different from the way we check for HTTPS and git URLs. These superficial differences obscure the underlying similarities between all the types of downloads.

Asymmetry makes code harder to read. It hides regularities of behavior within irregular structures. Symmetry, on the other hand, makes similar things look similar, so the important differences stand out.[^4]

[^4]: I'm pretty sure this saying is a quote from either Sandi Metz or Katrina Owen, but I couldn't find the source. If you know where it's from, let me know?

The overall principle is this: similar or analogous behaviors should be encoded as similar / analogous structures. When there is nothing motivating the structures to be different, we should let them be the same. And more than that: when faced with complexity, we should try to unearth whatever symmetries we can. Bringing symmetry to light, and polishing it until it shines, is how we make the meaning of code luminously apparent.

<nav class="centered-text">{{prev}} | {{next}}</nav>
