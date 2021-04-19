# Simple Assembler Cheatsheet
```load A, r0``` - Loads value in A to register 0

```load B, r1``` - Loads value in A to register 1

```store R0, 0``` - Stores r0 to memory address 0


```add r0,r1,r0``` - adds r1+r0 and stores the sum to r0 

```sub r1,r0,r1``` - subtracts r1 - r0 and a stores value to r1. 

## Set variables
```A: 1```

```B: 2``` - Creates two vars A and B and sets them to 1 and 2

## Loopy bits
```cmp r0, r1``` - Compares the value in r0 to r1

```bgt``` - branch greater than requires an additional input ```bgt

```L: add r0,r1,r0``` - sets L to the value in r0

```jump ``` - jump skips over code to a scecfic place. In a loop, jump is placed at the end<br>of the loop to go back to the top of the loop to (maybe) run again.




## Misc.
```halt``` - stops operation of SC == hex code 'a1'

```clear r0``` - clears the value in r0 (sets r0 to 0)


# Useful loops
### basic swap
```load A, r0```<br>
```load B, r1```<br>
```store r1, A```<br>
```store r0,B ```<br>
```halt```<br>
```A: 2```<br>
```B: 4```<br>


### basic sort bge
```load A, r0```<br>
```load B, r1```<br>

```cmp r0,r1```<br>

   ```bgt swap```<br>
   ```store r1, B```<br>
   ```store r0, A```<br>

```halt```<br>
```swap: ```<br>
   ```store r0, B```<br>
   ```store r1, A```<br>
```halt```<br>

```A: 8```<br>
```B: 16```<br>


### count i++
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