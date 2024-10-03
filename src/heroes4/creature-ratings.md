# Heroes IV Creature Ratings in PEONs

PEON = Peasant Equivalent Opponent Number

| Creature            | Tier | PEONS | Gold Cost | PEONS/1k GP  | Growth/wk | PEONS/wk |
| ------------------- | ---- | ----- | --------- | ------------ | --------- | -------- |
| **peasant**         | **1**| **1** | 15        | 67           | 36        | 36       |
| imp                 | 1    | 1.25  | 18        | 69           | 28        | 35       |
| bandit              | 1    | 1.5   | 20        | 75           | 26        | 39       |
| skeleton            | 1    | 1.5   | 22        | 68           | 25        | 37.5     |
| halfling            | 1    | 1.75  | 
| leprechaun          | 1    | 1.75  |
| pirate              | 1    | 1.75  | 22        | 80           | 24        | 42       |
| squire              | 1    | 1.75  |
| sprite              | 1    | 1.75  | 22        | 80           | 23        | 40.25    |
| berserker           | 1    | 2     |
| dwarf               | 1    | 2     |
| troglodyte          | 1    | 2     |
| crossbowman         | 1    | 2.25  |
| orc                 | 1    | 2.5   |
| zombie              | 1    | 2.5   |
| wolf                | 1    | 2.75  | 36        | 76           | 15        | 41.25    |
| centaur             | 1    | 4.5   |
| ghost               | 2    | 8.25  | 140       | 59           | 9         | 74.25    |
| pikeman             | 2    | 8.75  |
| gargoyle            | 2    | 9.5   |
| mage                | 2    | 9.5   |
| harpy               | 2    | 9.75  |
| mummy               | 2    | 9.75  |
| satyr               | 2    | 9.75  |
| elf                 | 2    | 10.75 | 190       | 57           | 7         | 75.25    |
| ballista            | 2    | 11    |
| cerberus            | 2    | 11    | 190       | 58           | 7         | 77       |
| evil eye            | 2    | 12.75 |
| medusa              | 2    | 13    |
| nomad               | 2    | 13    |
| minotaur            | 2    | 13.25 |
| white tiger         | 2    | 13.25 | 220       | 60           | 6         | 79.5     |
| troll               | 2    | 13.5  |
| gold golem          | 2    | 14    |
| water elemental     | 3    | 18.25 |
| air elemental       | 3    | 18.5  |
| fire elemental      | 3    | 18.75 |
| earth elemental     | 3    | 19.25 |
| ogre mage           | 3    | 25.25 |
| genie               | 3    | 26.25 |
| waspwort            | 3    | 26.25 |
| monk                | 3    | 26.75 |
| unicorn             | 3    | 30    | 650       | 46           | 5         | 150      |
| crusader            | 3    | 31    |
| nightmare           | 3    | 37    |
| griffin             | 3    | 38.5  | 800       | 48           | 4         | 154      |
| goblin knight       | 3    | 39.25 |
| ice demon           | 3    | 39.25 |
| naga                | 3    | 39.25 |
| efreeti             | 3    | 40.25 |
| venom spawn         | 3    | 50.25 |
| cyclops             | 3    | 50.75 |
| vampire             | 3    | 51.25 | 1100      | 47           | 3         | 153.75   |
| champion            | 4    | 80    |
| thunderbird         | 4    | 101.5 |
| phoenix             | 4    | 152   | 4000      | 38           | 2         | 304      |
| faerie dragon       | 4    | 153   | 4000      | 38           | 2         | 306      |
| devil               | 4    | 154   | 4000      | 39           | 2         | 308      |
| mantis              | 4    | 154   |
| hydra               | 4    | 154.3 |
| angel               | 4    | 155   |
| bone dragon         | 4    | 156   |
| behemoth            | 4    | 158   |
| dragon golem        | 4    | 158   |
| evil sorceress      | 4    | 188   |
| catapult            | 4    | 200   |
| frenzied gnasher    | 4    | 200   |
| gargantuan          | 4    | 200   |
| dark champion       | 4    | 250   |
| black dragon        | 4    | 308.25 |
| megadragon          | 4    | 376   |

## Random Army Ratings

| Random Army Type | Min PEONS | Max PEONS |
| ---------------- | --------- | --------- |
| Level 1 Monster  | 62        | 93
| Level 2 Monster  | 152       | 228
| Level 3 Monster  | 370       | 555
| Level 4 Monster  | 913       | 1421
| Random Monster   | 370       | 555

## Creature Growth

| Tier | PEONS per 1000 GP | Growth/wk in PEONS | GP cost / wk
| ---- | ----------------- | ------------------ | --------------------
| 1    | ~70               | ~38                | ~540 (x2 dwellings = 1080)
| 2    | ~60               | ~75                | 1250
| 3    | ~50               | ~150               | 3000
| 4    | ~40               | ~300               | 7500

Each tier of dwellings built in a town doubles the creature growth rate in PEONS per week. However, each tier of dwellings is less gold-efficient than the previous one. You can purchase all available creatures in tiers 1–3 with the income from a single City Hall, but to affort tier 4, you need a gold mine.

## Hero Strength

A level 1 hero is worth about 18 PEONS without Basic Combat, and 25 PEONS with Basic Combat.

```
When does an army of peasants flee from an army of 7 level 1 knights?

20 peasants - flees
21 peasants - flees
22 peasants - flees
23 peasants - doesn't flee

Will a single level 1 knight flee from an army of 100 peasants? - yes

conclusions: a level 1 knight's strength is between 15.71 and 16.43 PEONS.

Will 7 level 1 knights flee from 550 peasants? How about 575 peasants?

7 L1Ks don't flee from 550 peasants
       DO flee from 575 peasants
       don't flee from 556 peasants
       DO flee from 562 peasants
       DO flee from 561
       DO flee from 560
       DO flee from 559
       DO flee from 558
       don't flee from 557

Conclusion: a level 1 knight is worth between 15.91 and 15.95 PEONS.
```

Question: does the game try to factor in buffs from hero abilities when computing army strength, or does it just add PEON values?

```
Hypothesis: If an additive approach is used, 200 peasants should not flee from a level 1 knight + 984 peasants, but will flee from a level 1 knight + 985 peasants.

Results: 200 peasants flee from an L1K and 985 peasants.
They also flee from an L1K and 984 peasants!

Conclusion: it seems like the game doesn't just add PEON values to decide if a
neutral army will flee.

200 peasants don't flee from an L1K and 768 peasants.
             don't flee from an L1K and 960 peasants.
             don't flee from an L1K and 980 peasants.
             DO flee from an L1K and 982 peasants.
             DO flee from an L1K and 981 peasants.

That would seem to indicate that a L1K is worth at least 19 PEONS, and less than 20.
```

Question: does the class of a level 1 hero influence their army value?

```
Setup: player attacks 7 level 1 barbarians with 558 peasants.

Hypothesis: If a barbarian is worth significantly more than a knight, the barbarians should not flee. 7 L1Ks flee from 558 peasants.

Results: The barbarians don't flee!

7 barbarians also don't flee from 768 peasants!
... but do flee from 1024 peasants.
...     do flee from 896
        don't flee from 832

This implies that a level 1 barbarian is worth between 23.77 and 25.6 PEONS.
```

## "The enemy turns to flee at your approach"

A neutral army will flee if its strength is <= 20% of your army's strength. You can expect to lose at most 4% of your troops in such a fight (I say "at most" because the enemy may be weaker than 20% of your strength.)

<details>
<summary>Show/hide lab notes</summary>

```
When does this happen?

EXPERIMENTS: 1000 peasants vs....
- 750 peasants - no
- 625 peasants - no, and I lost 274 peasants in the fight
- 500 peasants -
- 250 peasants - no, and I lost 64 peasants
- 225 peasants - no, lost 54
- 206 peasants - no, lost 38
- 203
- 201 peasants - no, lost 39
- 200 peasants - yes, lost 39, second attempt lost 42
- 188 peasants - yes, lost 40
- 125 peasants - yes

conclusion: a neutral army will flee if its strength is <= 20% of your army's
strength. You can expect to lose at most 4% of your troops in such a fight (I
say "at most" because the enemy may be weaker than 20% of your strength.)

Hypothesis: a black dragon (309 PEONS) will flee if attacked by more than 1545
 peasants, but will not flee from 1544 peasants.

Results: dragon flees from 1545 peasants AND 1544 peasants! Maybe my PEON
calculations were off....

100,000 peons worth of black dragons is 324 dragons. That's 308.64 peons per
dragon. But maybe the true number is 308.

30,800 peons of black dragons is 99 dragons.
30,850 "                      is 100 "
30,825 "                      is 100 "
30,824 "                      is 99 "

so a black dragon appears to be exactly 308.25 PEONS. And the random monster generator appears to round down to a whole number of monsters.

Revised hypothesis: 4 black dragons will flee from 6165 peasants, but not from 6164. CORRECT!
```

</details>