#  Git Commands

### Git
```git add .``` - puts all files currently not saved to upload on deck <br />
```git add -u``` - adds any edited files, but *not* newly created files <br />
```git commit``` - takes a snapshot of your work <br />
```git push``` - copies the snapshot *to* GitHub <br />
```git pull``` - copies the snapshot *from* Github <br />
```git status``` - helps diagnose potential problems <br />
```echo .DS_Store >> .gitignore ``` - creates a .gitignore for .DS_Store<br />

### New Branch
```git branch -d newBranchName``` - delete the 'work' branch <br />
```git branch newBranchName``` - create 'work' branch <br />
```git checkout newBranchName``` - switch to work branch <br />

### Working state, switch back to main
```git checkout``` - Lists all branches.<br />
        ```q``` - exit branch list
```git checkout main``` - Switches to ```main``` branch.<br />
```git merge --squash work``` - merges main and work, deletes work<br />
```git commit -m "Nice message for others to read"```<br />

