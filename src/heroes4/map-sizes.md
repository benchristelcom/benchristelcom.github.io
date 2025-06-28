# Map Sizes

If a small map is 1 unit square...

- A medium map is 2 units square
- A large map 3
- An extra-large map 4

## Tile dimensions

Note: you can't multiply rows by columns to get the area of the map, because
the corners of the grid are cut off; see [Coordinate System](coordinate-system.md).
The actual area of the map is `1/2 × rows × cols`

- Small: 76 × 76
- Medium: 152 × 152
- Large: 228 × 228
- Extra-large: 304 × 304

Such odd numbers, aren't they? But that's what they are. I'm guessing they
started with 75 × 75 and then decided they'd better make it an even number.
