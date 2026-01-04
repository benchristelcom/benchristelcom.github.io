# Neutral Army Growth

Neutral monster armies in Heroes IV grow over time. I did some experiments to
figure out the growth rate.

## Data

| turn | 50 peasants | 100 | 1000 |
| ---- | ----------- | --- | ---- |
| 1    | 50 | 100 | 1000 |
| 2    | 50 | 101 | 1005 |
| 3    | 51 | 102 | 1010 |
| 4    | 52 | 104 | 1015 |
| 5    | 52 | 105 | 1020 |
| 6    | 53 | 107 | 1025 |
| 7    | 54 | 108 | 1030 |
| 8    | 55 | 110 | 1035 |
| 9    | 55 | 111 | 1041 |
| 10   | 56 | 113 | 1046 |
| 11   | 57 | 115 | 1051 |
| 12   | 58 | 116 | 1056 |
| 13   | 59 | 118 | 1061 |
| 14   | 60 | 120 | 1066 |
| 15   | 60 | 121 | 1071 |
| 16   | 61 | 123 | 1077 |
| 17   | 62 | 125 | 1082 |
| 18   | 63 | 127 | 1087 |
| 19   | 64 | 128 | 1092 |
| 20   | 65 | 130 | 1097 |
| 21   | 66 | 132 | 1102 |
| 22   | 67 | 134 | 1107 |
| 23   | 68 | 136 | 1113 |
| 24   | 69 | 138 | 1118 |
| 25   | 70 | 140 | 1123 |

| turn | 50 catapults | 100 | 1000 |
| ---- | ----------- | --- | ---- |
| 1    | 50 | 100 | 1000 |
| 2    | 50 | 100 | 1000 |
| 3    | 50 | 100 | 1000 |
| 4    | 51 | 101 | 1001 |
| 5    | 51 | 101 | 1001 |
| 6    | 52 | 102 | 1002 |
| 7    | 52 | 102 | 1002 |
| 8    | 52 | 102 | 1002 |
| 9    | 53 | 103 | 1003 |
| 10   | 53 | 103 | 1003 |

## Hypothesis

The growth rate seems to be about 1.4% per day, rounded to the nearest whole
number of creatures. That is, given an initial number of creatures `C_i`, the
number of creatures `C` in the army on day `D` is given by the formula

```
C = round(C_i * 1.014 ^ (D - 1))
```

However, there seems to be a cap on the growth rate. For peasants, it is
about 5.125 creatures per day. For catapults, it seems to be around 1/3 of a
creature per day. I don't know how the cap is determined.
