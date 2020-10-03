## Clang++ cheatsheet

### Overview
How to create an executable to run your new programme using Terminal and Clang++

- navigate to .cpp .hpp file location using terminal
- link all the files into .o executable

$clang++ -c main.cpp
//produces main.o

### option 1
$clang++ main.o
//produces a.out


### option 2
$clang++ -o myProgramme main.o 
//produces myprogramme

### run
$./myProgramme
//runs myProgramme
