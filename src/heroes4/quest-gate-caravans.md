# What Quest Gate Criteria Admit Caravans Recruited from Dwellings?

- `TRUE` - can pass
- `FALSE` - cannot pass
- `HAS ALIGNMENT (Order)` - Neither Gold Golems nor Pikemen can pass
- `PLAYER HAS COLOR (Blue)` - Allows Blue player's caravans to pass
- `TOTAL NUMBER OF CREATURES IN ARMY > 1` - cannot pass
- `TOTAL NUMBER OF CREATURES IN ARMY > 0` - cannot pass

Interesting: a gate that requires `TOTAL NUMBER OF CREATURES IN ARMY > 0 OR TOTAL NUMBER OF HEROES IN ARMY > 0`
would not allow caravans through, but would allow any army through.

Is there a criterion that allows caravans between towns to pass, but not
caravans from dwellings?

- `RANDOM D6 ROLL > 3` - the routes appear to be computed daily, independently of one another.
