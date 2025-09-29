# Battle of the Bards Devlog

## Objective

For Red: Eliminate other players.

For all other players: Reach the tavern you started from with your main hero at
level 30 (level requirement TBD).

## Player Setup

Each player except for Red starts with a level 1 bard (Basic Herbalism and
Basic Stealth) and a town with nothing constructed (not even a Fort).
**The town allows heroes to retreat.**

The player alignments are fixed.

- Purple: Life
- Green: Nature
- Orange: Chaos
- Teal: Death
- Blue: Order
- Red: Might

## Global Events

- Day 1 - zero resources for all human players but Red

## Map Structure

- Players start near the center of the map and can explore outwards or toward
  each other.
- Players start with only a level 1 hero. No towns, money, or creatures.
- Free resources and campfires are scattered around to reward exploration.
- There are placed events scattered around the map that give XP to the first
  hero to encounter them.
- Each player starts near a Sanctuary so they can resurrect heroes who die.
- Each player starts near a town that they should be able to capture within a
  few weeks.

## Ideas

- scroll of Town Gate
- a higher-level combat hero who can help you through the early battles (but
  takes half the XP!) and resurrect you if you die.

## Victory Script

```
if (current army has hero named Bob) AND (experience level of most powerful hero in this army >= 30) {
    if number of heroes in current army > 1 {
        display "Bob must enter the Battle of the Bards alone (there are too many heroes in your army)."
    } else {
        display "You wow the judges with your epic performance and your tales of
        daring-do. You are, hands down, the winner of the Battle of the Bards!"
    }
}
```

## Connascence

The level needed to win is hardcoded in the "(Color) Victory" scripts, and in
the "Explain Special Rules" timed event.