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

## Likely Hero Classes

- Bard (nature + scouting)
  - Hero always has maximum luck
- Demonologist (nature + death)
  - +50% to all demon summoning spells
- Enchanter (nature + order)
  - +20% to all summoning and illusion spells
- Summoner (nature + life)
  - +20 XP of creatures per day (slightly less than 2 wolves or 3 sprites), or
    slightly more than 1 water elemental every 4 days
- Fire Diviner (scouting + chaos)
  - +20% to fire-based spells
- Prophet (scouting + life)
  - always has spiritual armor, defense +25%
- Seer (scouting + order)
  - +2 scouting radius
- Guildmaster (scouting + nobility)
  - stunning attack
- Beast Lord (nature + nobility)
  - +20% summon wolf and white tiger
- Warden (nature + tactics)
  - +10% creature defence
- Field Marshal (scouting + tactics)
  - +10% creature attack
- Beastmaster (nature + combat)
  - +20% summon wolf
- Warlock (nature + chaos)
  - +10 spell points, regen +1 per day
- Ranger (scouting + combat)
  - +5 ranged attack
- Ninja (scouting + death)
  - poison attack

## Strategic Artifacts

These are artifacts that synergize well with a particular hero class, strategy,
or army composition. They should be available (or at least visible, via Windows
of the Magi) somewhat early in the game so players can plan a strategy.

- Demonary
  - Doubles the effect of demon summoning spells
  - with Scarab of Summoning — triple the effect
  - with Crown of Enchantment and Mage's robe, spell costs reduced by 33% + 1 point
- 4x Viewing Crystal, Breeze the Falcon
  - gives the maximum scouting bonus (GM Scouting + Seer + these items = +17 scouting radius)
- Seaman's hat, sextant, logbook of the master sailor
  - lets the hero have a sea-based army - only good with lots of connected
    seas, lakes, rivers, islands.
- Boots of Travel, Equestrian's Gloves
  - with Pathfinding, gives ridiculous movement bonus
  - Wayfaring Boots
    - strictly better than Boots of Travel
- Ring of health, ring of regen, breastplate of regen
  - +50% health
  - 40 HP regen + 4 per level
- Adamantine Armor, Neener's Invulnerable Cloak
  - makes hero nearly unkillable — probably very OP combined with regen items
    above.
- Ring of Flares, Supreme Crown of the Magi
  - +10 spell points, -2 to all spell costs
- Ankh of Life + Saint Ranan's Staff
  - resurrects 25% of creatures after combat
  - with GM resurrection and Nobility + Life (Cardinal), 80% resurrection total
- Ring of Greater Negation
  - Counters Neener's Invulnerable Cloak - probably the only way to kill a
    high-level combat hero.
- Druid's Chain
- Staff of Summoning, Ring of Elementals, Scarab of Summoning
  - Reduces cost of summoning spells by 50%
  - +100% effect of elemental summoning spells
  - +100% power of summoning, raise, illusion spells
  - Crown of Enchantment and Mage's Robe reduce cost further, making it dirt
    cheap to summon elementals.
- Bow of the Elf King
- Mayhem Staff
  - Chaos direct damage spells do +50% damage
- Shackles of War
  - TODO: does this prevent Town Gate from working?
