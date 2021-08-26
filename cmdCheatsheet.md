## Command Line Cheat Sheet

### Display
```pwd``` - (Print Working Directory) see your current folder and branch from root<br />
```ls``` - displays name of files in a directory <br />
```ls -a``` - lists all entries in a directory <br />
```ls -l``` - long list <br />
```ls -g``` - shows colours <br />
```ls ~/Desktop``` - displays what is on the desktop <br />
```cat``` <file> - print the contents of a file into terminal <br />
```head <file>``` - prints the first 10 lines <br />
```tail <file>``` - prints the last 10 lines <br />
```nano <file>``` - allows you to change contents of a file (like a text editor!) <br />
```open <file>``` - "double click" <br />

### Navigate CLI 
```cd``` - go home <br />
```cd``` <folder> - change directory e.g. cd Documents <br />
```cd ..```- back one level <br />
```cd ../..``` - back two levels <br />

### Create/Delete Files
```mkdir <dir>``` - makes a directory <br />
```rmdir <dir>``` - deletes an empty directory <br />
```touch <filename>``` - creates a new empty file <br />
```rm -R <dir>``` - deletes a directory and contents <br />
```rm -i <file>``` - deletes file only when confirmed <br />
```rm -rf <file>``` - ((-r recursive) (-f force)) deletes everything *very dangerous **beware** <br />

### Copy/Move Files
```cp <file> <dir>``` - copy file to folder <br />
```cp <file> <newFile>``` - copy file to current folder <br />
```mv <file> <newFile>``` - move/rename <br />
 
### Git
```git add .``` - puts all files currently not saved to upload on deck <br />
```git add -u``` - adds any edited files, but *not* newly created files <br />
```git commit``` - takes a snapshot of your work <br />
```git push``` - copies the snapshot *to* GitHub <br />
```git pull``` - copies the snapshot *from* Github <br />
```git status``` - helps diagnose potential problems <br />
```echo .DS_Store >> .gitignore ``` - creates a .gitignore for .DS_Store<br />

### Misc. <br />
```ssh``` - "secure shell" allows remote control/access of offsite machines <br />
```find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch``` - finds a file called .DS store, prints its locations and deletes them all <br />

### Chmod <br />
```chmod 755 -R fileName``` - turns file into executable <br />
Chmod commands can be found [here](https://chmodcommand.com/chmod-755/) 

