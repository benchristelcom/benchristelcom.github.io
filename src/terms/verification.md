# Verification

Software **verification** is the process of assessing whether the code does what you (the programmer) meant it to do. It contrasts with **validation**, which assesses whether the code does what the customers or users want.

In general, verification is as hard as writing the code in the first place. No perfect verification techniques exist. In practice, we typically use a combination of techniques to reach a desired level of confidence:

- Testing (automated, manual, unit, system)
- Static checks
  - Type checking
  - Linting
  - Inspection / code review
  - Formal proofs
- Runtime checks
  - Assertions
  - Logging and monitoring
