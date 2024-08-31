# Automatic Project Management: A Manifesto

For the last couple of years, my professional work has placed me in the role of "engineering lead" on teams of 3 to 6 people. A lot of my responsibilities fall under the umbrella of what you might call "project management": making sure that we're working on the highest-priority tasks, that requirements are clearly communicated, that everyone has something to do, that no one's work is blocked, that progress is visible, and that forecasted completion dates align with deadlines.

It sounds like a lot of work. But here's the secret:

## Project management can be almost completely automated

I had the good fortune to spend several years of my early career at Pivotal Software. Pivotal is probably best known, now, for its project management software Pivotal Tracker.[^1] Tracker automated project management. There were no project managers at Pivotal. Project management, like adding columns of numbers or carrying water from a well, simply wasn't viewed as a job for humans living in a modern society. We have _machines_ to do that for us now.

[^1]: (Pet peeve: the correct abbreviation of Pivotal Tracker is _Tracker._ I hear people calling it "Pivotal" a lot, which makes no sense — Pivotal is just the company that made Tracker.)

We didn't completely eliminate project management work, but we did concentrate it enough that it definitely wasn't a full-time or even part-time job. Project management activities were distributed throughout the team and took no more than a few minutes each day.

### ...and no, I'm not talking about "AI"

It's inevitable, in 2024, that when people hear statements like "we automated this work that humans used to do!" they immediately think of LLMs. If that was what you thought, please unthink it as thoroughly as you can. I do not think there is any place for that kind of AI in project management.[^2]

[^2]: LLMs are machines that spout a pastiche of platitudes mixed with random unsubstantiated nonsense. The best they can do is trick you into believing that useful, novel work has been accomplished, when in fact they are either regurgitating tired old ideas, or concocting hallucinatory drivel. The speculation that there is some useful middle ground between halluciation and regurgitation, which LLMs could reach if only they had more training data or different hyperparameters, is pure pseudoscience.

When I talk about _automation_ I'm only partly talking about software. The automation of project management extends into people-space and includes team norms and habits. Those norms and habits are in turn defined by:

- The definition of team members' roles and responsibilities.
- The structured conversations and meetings that happen week-to-week.
- The communication channels that people tend to use for less formal conversations.
- The data structures enforced by those channels.[^3]
- The shared workspace.

[^3]: For example, Slack enforces chronological ordering of messages in channels, and lets you group related messages into chronologically-ordered threads. Pivotal Tracker enforces a single, ordered backlog of work per project.

## What this document is about

In this document, I want to describe how Pivotal automated software project management. In accordance with my expansive definition of "automation" above, I'll have to describe the roles people played on the team and how those roles interacted. The hope is that someone else could use this document to reduce the effort their own team spends on project management activities.

## Project Management != Product Management

I want to make a very clear distinction between "project managment" and "_product_ management." Product management is valuable, difficult, human work. It involves:

- Understanding the problem to be solved, and the available solutions
- Understanding stakeholder needs and balancing tradeoffs between them
- Clearly communicating to the engineering team what needs to be done
- Stack-ranking the priority of upcoming work
- Managing stakeholders' expectations; balancing deadlines, priorities, and team capacity

Project management, by contrast, is stuff like:

- Ensuring the team is working on the highest-priority tasks
- Ensuring everyone has something to do
- Resolving dependencies and keeping people unblocked
- Making progress visible
- Figuring out how much we can get done this week or this month
- Forecasting release dates

Product management is all about _what_. Project management is all about _how_.

## Team roles

When I talk about a "team" I mean a small group of people responsible for building and maintaining a software product. **Each person belongs to a single team** — assigning fractional people to teams is a recipe for madness. A team comprises the following roles:

### Product Manager

 A team has **exactly one** product manager.

- Orders user-facing work items in the backlog according to priority.
- Signs off on completed work after giving it a quick test drive.
- Responsible for deciding what features to build and setting expectations with stakeholders outside the team.
- Triages requests coming from outside the team and records them in the backlog.

### Designer

- Describes what the software should look like and how it should work from the user's perspective.

A team typically has one designer, though very complicated products might have more.

### Engineer

- Writes code for one backlog item at a time, starting from the top of the backlog.

A team typically has between 2 and 6 engineers. If you add more than that, communication overhead starts to outweigh the productivity gains of each new engineer. If your product is too big and complicated for 6 engineers, it should be architected so that separate teams can work _independently_ on different areas ("verticals").[^verticals]

[^verticals]: The constraint that teams should be mostly _independent_ advises against splitting a project into frontend and backend teams. Each team should be responsible for a "vertical slice" of the product — that is, a slice that includes all the technological layers.

### Engineering Lead

Does everything that an engineer does, plus:

- Maintains the schedule of weekly [activities](#activities).
- Facilitates meetings by default.
- Answers questions about technical aspects of the project.
- Is encouraged to delegate any of these responsibilities.

### Note on testing

Where is QA in all of this? At Pivotal, we had some QA testers, but not a lot. Engineers wrote comprehensive automated tests for all production code, so there wasn't much room for "traditional" QA (the kind that follows a predetermined test plan.)

I do think there is room in this process for **exploratory testing** to add a lot of value. However, my goal in this document is not to speculate on what an ideal software development process might look like, but to focus on _what we actually did at Pivotal_. Accordingly, I won't be describing how exploratory testing could fit into the process — but you should consider it a potentially fruitful area for future research and experimentation.

### Note on people managers

Product managers don't make hiring/firing decisions, and engineers don't report to PMs. I call the people with hiring/firing authority "people managers." At Pivotal, engineers' people managers were also engineers who spent about 20% of their time on management stuff. The other 80% of the time, they worked on a project backlog like every other engineer. An engineer's manager was typically not on the same team as them.

Your company probably works differently from this. People managers at a typical software company often do a combination of product management, project management, issue triaging / firefighting, and facilitation. They also spend much of their time in low-value meetings. They usually don't write much production code.

The details of how you do people management aren't crucial, but note that if you follow the process I've described here, people managers can do a lot less:

- Project management work mostly goes away.
- Product management is the responsibility of the PM. This includes triaging emergencies and requests from outside the team.
- Meeting facilitation is typically done by the engineering lead, or delegated to another team member.

### Note on sales, marketing, technical writers, lawyers, translators, etc.

Ideally (I think), a team would have _all_ the roles needed to build a successful product. At some point, as you think about this more holistically, it turns into "all the roles needed to build a successful company." I hear it's possible to run teams almost as independent startups, but that's not what Pivotal did. See Matt K. Parker's book _A Radical Enterprise_ if you're curious to learn more about how this can work.

## Artifacts

### Backlog

The backlog is an ordered TODO list. At Pivotal, we called the things in the backlog "stories," but here I'll use the more common term "issues."

Pivotal Tracker recognizes three types of issues:

- Features
- Bugs
- Chores

These are described below.

#### Features

#### Bugs

#### Chores

#### Estimates

Some teams like to estimate the amount of work required to complete each issue. This isn't actually necessary to get good forecasts of delivery dates, but there are side benefits to the process of estimating. One benefit is that the act of estimating forces the team to think through what will be involved in implementing the issue and discuss different implementation paths. The activity of estimation can lead the team to clarify the requirements of a feature. It often leads to the discovery of risks and edge cases, as well as better implementation paths.

To avoid 

<!--
A recurring thread in my software development philosophy is _empiricism_, the idea that we ought to do things for reasons. Changes to software should be motivated by needs, wishes, or problems that we can articulate. Otherwise, we're just faffing around.

Accordingly, an issue should represent an _improvement_ to the product or codebase _from some person's perspective_. A common mistake, which violates this principle, is to split features into "frontend" and "backlog" issues. When you think about it, a backend API on its own doesn't help anyone. It doesn't help engineers — in fact, it hinders them, because it necessarily makes the codebase bigger and more complicated. Without a frontend, it doesn't help the software's users either. Furthermore, splitting work into "frontend" and "backend" makes it more difficult to adjust the design of the API as development proceeds and the team learns more about what's needed, what's easy, and what's hard.
-->
### Icebox

Pivotal Tracker projects have an "icebox" section for issues that the team doesn't want to forget about but also doesn't want to do right now. I'm not totally convinced that this was a good idea. In my experience, iceboxes just tend to grow and grow; it's very rare that an issue gets pulled out and worked on. Usually the impetus for pulling it out is a feature request or bug report that could have simply generated a new issue if there hadn't been one in the icebox already.

Instead of having an icebox, I prefer to delete issues that the team isn't planning to do in the foreseeable future. Still, every team I've been on has had an icebox full of issues that are years old, so it seems that most people prefer to keep old issues around. In any case, an overflowing icebox is preferable to a cluttered backlog. If you don't like throwing stuff out, better get an icebox.

<!--
### Codebase

Without a codebase, your software ain't gonna do much.

The purpose of each of the artifacts described in this section is to preserve knowledge in a usable form. On a software development team, the most usable format for knowledge is often software, so whenever possible, knowledge should be encoded in executable form. At Pivotal, we documented the behavior of each function and module in tests, not in comments. We built tools instead of writing extensive developer documentation.[^docs] To the extent feasible, we made our codebases self-verifying and self-modifying: that is, we imbued them with all of the novel machinery needed to build, run, test, deploy, configure, update, and change the software product.

The level of automation in the codebase made it possible for any engineer to work on any feature. This 

[^docs]: We still wrote brief documentation describing how to use the tools.

### Entrypoint document

The entrypoint document should contain:

- A _very brief_ (3 sentence) description of the software's purpose.
- A list of links to other resources that people need to be able to access in order to work on the project.

### Note on documentation

Some areas where Pivotal could have maybe done better:

- lightweight decision records
- 

-->

## Activities

### Daily standup (15 minutes)

- new faces, helps, interestings, events
- parking lot
- go through each in-progress work item and identify how to move it forward

### Weekly pre-IPM (1 hour)

In this meeting, the engineering lead and PM go over the backlog together and make sure that:

- The highest-priority issues are at the top of the backlog.
- The issues are sufficiently well described that the engineers on the team can gauge the relative difficulty of implementing them.

"Priority" is a loaded term. When I say "priority," I simply mean "sequence." The priority of an item determines the order in which it will be worked on relative to other items. Urgency, importance, dependency, cost, and risk are all factors that go into determining priority. In general:

- Important work should be done before unimportant work
- Urgent work should be done before it causes a crisis
- Dependencies need to be done before their dependents
- Less expensive work ("quick wins") should often be done before more expensive work
- It may be a good idea to attempt the riskiest work first, in order to falsify assumptions about the project or product as quickly and cheaply as possible. If the project is doomed from the start because a crucial feature can't be built, you want to know that early on. That way, you can cut your losses, kill the project, and do something else that has a higher chance of success.

The PM has the final say in determining the priority of bugs and features. The engineering lead can intersperse chores as necessary to keep the development process running smoothly.

### Weekly IPM (1 hour)

IPM (iteration planning meeting) involves the PM, designer, and engineers. In this meeting, the team gathers around the backlog and discusses the next week or so of upcoming work. The engineers make sure they understand what needs to be done; the answers to any questions they have are recorded in the relevant issue.

During the IPM, engineers also estimate the upcoming work.

### Weekly Retrospective (1 hour)

### Daily Engineering Work (37 hours per week)

When engineers aren't in meetings, they're writing code. The workflow goes like this:

- Assign yourself to the issue at the top of the backlog.
- Mark the issue "in progress."
- Write the code.
- Integrate it with the latest `main` branch and deploy it to a staging environment.
- Mark the issue "delivered."
- Repeat.

This workflow implies that no engineer is ever idle, unless the backlog is empty.

As the engineers write code, the PM is doing "acceptance" on the delivered features. This means running through the basic functionality in the staging environment, and making sure the feature works as intended. If the PM finds a problem, they mark the issue "rejected" and it goes back to the top of the backlog. Otherwise, they mark the issue "accepted," which is the final state.

When the product manager deems the software ready for release, the code from the staging environment is promoted to production.

## Work item definition

## Velocity

## Estimation

## Forecasting

## Can you use just part of this process?

## TODO

Rename IPM and pre-IPM. Ideas:

- backlog tour, planning
- briefing, planning
- estimation

---