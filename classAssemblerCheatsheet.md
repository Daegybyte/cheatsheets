# Simple Assembler Cheatsheet
```load A, r0``` - Loads value in A to register 0
```load B, r1``` - Loads value in A to register 1

```store R0, e``` - Stores hex 'e' into memory


```add r0,r1,r0``` - adds r1+r0 and stores the sum to r0 
```sub r1,r0,r1``` - subtracts r1 - r0 and a stores value to r1. 

## Set variables
```A: 1``` ```B: 2``` - Creates two vars A and B and sets them to 1 and 2

## Loopy bits
```cmp r0, r1``` - Compares the value in r0 to r1
```bgt X``` - branch greater than. Looks if current branch is greater than
```L: add r0,r1,r0``` - sers L to the value in r0

### Basic loop example
This loop will count to 20

```load i, r0``` <br>
```load N, r1```<br>

```LOOP:  cmp r0, r1```<br>

```bgt END```<br>
```load ONE, r1```<br>
```add r0,r1,r0```<br>
```store r0, i```<br>
```load N, r1```<br>
```jump LOOP```<br>

```END:   halt```<br>

```N:     10```<br>

```i:     1```<br>

```ONE:   1```<br>

## Misc.
```halt``` - stops operation of SC == hex code 'a1'
```clear r0``` - clears the value in r0 (sets r0 to 0)