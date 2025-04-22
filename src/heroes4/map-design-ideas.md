# Ideas for the design of a Heroes IV map

## Observations

- The AI is not very good. It needs a leg up to be an interesting opponent.
- The sweet spot for battle difficulty is when victory is assured, but you have
  to play tactically to avoid losing units.
- Small armies can be just as fun as big ones.
- With a few exceptions, rank 1 units are boring. I mostly don't use them once
  I get higher-rank units. The exceptions are:
  - sprites, and any ranged unit (halflings, crossbowmen, centaurs, orcs).
  - One-unit stacks are good for taking retaliation
  - Units with a magic ability (leprechauns, imps) can be very useful in certain
    situations.
  - Units with two attacks (berserkers, wolves) are good for taking down Citadel
    or Castle gates.
- The people I play with are less familiar with the details of the game than I
  am, and prefer a casual experience to a challenging one.
- We all get a kick out of exploration.
- Micromanagement is annoying. Optimal caravan play is especially tedious.
- If you're optimizing for fun, the right number of towns to have is about 2.
  3 is okay. More than that is too much to keep track of.
- Similarly, the best number of heroes is probably about 3.
- Castles are OP. Probably only Death should be allowed to have one.\
- One of my least favorite features of the game is the "the enemy turns to flee
  at your approach" dialog.
  - If you choose to fight, it's a boring fight.
  - If you use "quick combat," the stupid AI may lose units or spend more mana
    than needed.
  - If you let them run, you miss out on XP and any items the mobs were holding.
- A common problem with existing maps is that on low difficulty settings, the
  late-game fights are too easy, but on high difficulty settings, the early
  fights are too hard. How to make the army strength curve match the mob
  strength curve?
  - Mob armies grow over time. I wonder if the growth rate depends on the
    difficulty setting?
- In a multiplayer game, losing your main hero _really_ sucks. It's basically
  game over.

## Ideas

- Start with a few rank 2 units instead of rank 1s. The early game can be about
  keeping these units alive.
- Start each player with 2 heroes, but don't allow taverns to be built. Or give
  each player two adventure-map taverns, 4000 gold, and a one-way portal, so
  they can choose their heroes.
- Additional heroes could be obtained from prisons.
- What if heroes are imprisoned?
  - Trigger an event on the player's home town that builds the tavern and gives
    them a bunch of gold and maybe units. "The people organize to free their
    hero from prison!"
- Incentivize exploration by scattering free goodies over the map.
- How to prevent players from having too many towns?
  - You win when you capture your fourth town.
- Maybe each player's second town should be from a neighboring alignment? Makes
  things more interesting. Consider how players could choose which alignment
  they get (or just let it be random).
- How to prevent armies from growing too large?
  - limit gold income
  - whirlpools
  - kill off units somehow (with difficult battles at chokepoints?)
    - but how to encourage players to go into the fight before their army is
      big enough to win with no losses?
  - quest hut that buys units, perhaps offering a stackable item (lucky charms
    or viewing crystal?)
- How to prevent caravan micro?
  - Timed event: each day, all creature dwellings change their owner to a
    computer player. This computer player is not allowed to build caravans.
    The only way to recruit from a dwelling is to travel there with a hero.
  - This also nerfs the strategy of having a small army stand next to the
    creature dwelling and recruit creatures each day.
- How to make "the enemy turns to flee at your approach" less annoying?
  - Incentivize Charm (Order magic) and Diplomacy (Nobility) somehow so there's
    at least some reward for attacking outnumbered creatures
  - Give mobs items? Could cut both ways.
  - ~~Give mobs heroes? Maybe they won't run then.~~ Doesn't work.

## Research questions

- Do neutral armies with a hero ever flee from combat?
  - Yes.
- Can an army without a hero free a hero imprisoned in a town?
  - No.
