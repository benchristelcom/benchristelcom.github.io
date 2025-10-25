# How far away from a town do you need to be to cast Town Gate?

tl;dr: in order to cast Town Gate in combat, your army must be at least 9
squares away from the entrance of at least one of your towns.

More precisely, you can use Town Gate to escape to a town only if your army is
outside the circle with radius 9 squares centered on the northernmost entrance
square of that town.

---

I did a series of experiments using a setup with a single town and a Scroll
of Town Gate.

There are a few questions we need to answer in developing a theory of how Town
Gate works.

- Does the distance measurement use Euclidean or taxicab distance?
- Is distance measured from the center of the town, or from the entrance?
- Is distance measured to the hero's army, or to the enemy army?

My starting assumptions, which I will attempt to falsify, are:

- ~~Taxicab distance~~ falsified
- ~~Measured from the center of the town~~ falsified by Experiments 7–8
- Measured to the hero's army

Note: when I use the word "diagonal" in this writeup, I mean diagonal
relative to the grid lines of the Adventure Map. Since the map is presented in
isometric perspective, "diagonal" lines appear horizontal/vertical on the
screen.

## Experiment 1

- Setup: Hero is 9 squares diagonally away from the corner of the town (8 empty
  squares in between), attacking an army on the 10th square away from the
  corner.
- Result: You **can** cast Town Gate to escape from combat.

## Experiment 2

- Setup: hero is 9 squares orthogonally away from the entrance of the town (8
  empty squares in between), attacking an army on the 10th square away from the
  corner.
- Result: You **can** cast Town Gate to escape from combat.

## Experiment 3

- Same as experiment 2, except the hero is only 8 squares away from the town
  entrance, not 9
- Result: You **cannot** cast Town Gate to escape from combat.

## Experiment 4

- Same as experiment 1, except the hero is only 8 squares away from the corner
  of the town, not 9
- Result: You **can** cast Town Gate to escape from combat.

This implies that one of my hypotheses is wrong! This result appears
inconsistent with the results of experiments 2 and 3.

## Experiment 5

- Hero is 8 squares orthogonally away from the wall of the town (7 empty
  squares in between), on the side of the town opposite the entrance.
  (note similarity to Experiment 3)
- Result: You **can** cast Town Gate to escape from combat.

This implies that distance is measured from some point other than the geometric
center of the town.

## Experiment 6

- Hero is 2 squares orthogonally away from the wall of the town (1 empty square
  in between), on the side opposite the entrance.
- Result: You **cannot** cast Town Gate to escape from combat.

## Experiment 7

- Same as Experiment 6, but hero is 4 squares away
- Result: You **can** cast Town Gate to escape from combat.

## Experiment 8

- Same as Experiment 6, but hero is 3 squares away
- Prediction: you cannot cast Town Gate, because distance is measured from the
  nearest square containing a town entrance and you must be 9 squares away to
  cast.
- Result: You **cannot** cast Town Gate to escape from combat.
