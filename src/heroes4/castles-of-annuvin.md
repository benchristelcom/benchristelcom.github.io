# Castles of Annuvin

A 6-player map that removes the tedious parts of the game and presents many
PvP and PvE opportunities!

## Special features

- No taverns after you hire your two starting heroes. Additional heroes can be
  obtained from prisons.
- Creature dwellings revert to the red (Might) player every turn, removing the
  need for caravan micro. Red's starting towns can't build caravans.
- Lots of hero leveling and multiclassing opportunities. It should be possible
  to get grandmaster in 2 or 3 skills.

## Victory condition

- Capture 3 of the 6 castle towns on the map (6 of the 12 towns start with
  Castles, 6 have the Castle disabled)

## Map sketch

![](castles-of-annuvin-sketch.png)

## Globals

### Timing

- It should be possible to get out of starting area on normal difficulty by the
  end of week 2.

### Army Values

- Starting troops have a value of 160 PEONS.
- Gates leading out of starting areas are guarded by 444 PEONS

### Events

- A continuous event calls a triggerable event `RevertDwellingOwner`, which all
  dwellings should handle by changing their owner to Red if it is not Nobody.

## Playtest notes

- I want a bow!
- random item generates potions
- want more treasure chests. At least 2 per monster
- items, treasure, powerups
- 2nd level monsters exhausted by day 3 wk 2 (turn 10)
- On turn 10, I had 2 lvl 6 barbarians, 50 centaurs, 12 harpies, and 4 cyclopes
- = 545 peons (not counting heroes)

### Play 2

- cleared red starting area by turn 18
- 2 lvl 10 barbarians, 47 centaurs, 6 harpies, 7 cyclopes by day 4 of week 3 (turn 18)
- grandmaster archery by turn 18
- a good monster distribution for progression and challenge seems to be: 7-8 monster 1s, 7-8 monster 2s, some 3s

### Play 3

- treasure by veteran's hall can be stolen
- the guard radius is only 2, not 3!
- want more multiclassing opportunities (scouting, nobility, tactics, life magic)

### Play 4

- Nomad tents start as owned by red!
- 370 PEONS for gate guard is too easy.
  - Attacked with: lvl 10 barbarian with expert combat, expert melee, GM archery, and basic magic resistance, plate mail, gambler's deck, crossbow, 13 harpies, 4 cyclopes, and 49 centaurs.
