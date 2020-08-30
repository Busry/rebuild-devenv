# Rebuild js DEV ENV

## Git versioning

Create project folder and initialize it to be a git folder,That creates a local repo.
Then create a remote repos from any provider and link the two repo up.

```
$ mkdir project
$ git init
$ git remote add origin <remote repo url>
$ git pull origin master --allow-unrelated-histories
$ git merge origin origin/master
$ git add .
$ git commit -m " initial commit"
$ git push -u origin <local branch name>

```
