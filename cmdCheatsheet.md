## Command Line Cheat Sheet

### Display
```pwd``` - (Present Working Directory) see your current folder and branch from root 
```ls``` - displays name of files in a directory
```ls -a``` - lists all entries in a directory
```ls -l``` - long list
```ls -g``` - shows colours
```ls desktop``` - displays what is on the desktop
```cat``` <file> - print the contents of a file into terminal
```head <file>``` - prints the first 10 lines
```tail <file>``` - prints the last 10 lines
```nano <file>``` - allows you to change contents of a file (like a text editor!)
```open <file>``` - "double click"

### Navigate CLI
```cd``` - go home
```cd``` <folder> - change directory e.g. cd Documents
```cd ..```- back one level
```cd ../..``` - back two levels

### Create/Delete Files
```mkdir <dir>``` - makes a directory
```rmdir <dir>``` - deletes an empty directory
```touch <filename>``` - creates a new empty file
```rm -R <dir>``` - deletes a directory and contents
```rm -i <file>``` - deletes file only when confirmed
```rm -rf <file>``` - ((-r recursive) (-f force)) deletes everything *very dangerous *beware**
### Copy/Move Files
```cp <file> <dir>``` - copy file to folder
```cp <file> <newFile>``` - copy file to current folder
```mv <file> <newFile>``` - move/rename

### Git
```git add .``` - puts all files currently not saved to upload on deck
    ```git add -u``` - adds any edited files, but *not* newly created files 
```git commit``` - takes a snapshot of your work
```git push``` - copies the snapshot *to* GitHUb
```git pull``` - copies the snapshot *from* Github
```git status``` - helps diagnose potential problems

### Misc.
```ssh``` - "secure shell" allows remote control/access of offsite machines

```find . -name ".DS_Store" -print -delete``` - finds a file called .DS store, prints its locations and deletes them all

### Chmod

```chmod 755 -R fileName``` - turns file into executable
Chmod commands can be found [here] [https://chmodcommand.com/chmod-755/]

