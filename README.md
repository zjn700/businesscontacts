
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 

Run 

    ng serve --host 0.0.0.0 --port 8080 

solved it for me

//https://community.c9.io/t/angular-2-angular-cli-problem/9684/3

git to bitbucket - use https

zjn700:~/workspace/businesscontacts (master) $ git remote add bc-origin https://zjn700@bitbucket.org/zjn700/businesscontacts.git
zjn700:~/workspace/businesscontacts (master) $ git push -u bc-origin --all                      Password for 'https://zjn700@bitbucket.org': 
Counting objects: 51, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (47/47), done.
Writing objects: 100% (51/51), 15.75 KiB | 0 bytes/s, done.
Total 51 (delta 8), reused 0 (delta 0)
To https://bitbucket.org/zjn700/businesscontacts.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from bc-origin.

// http://stackoverflow.com/questions/16074832/cannot-push-to-git-repository-on-bitbucket

github:
//echo "# businesscontacts" >> README.md
//git init
//git add README.md
//git commit -m "first commit"
git remote add origin https://github.com/zjn700/businesscontacts.git
git push -u origin master


git add *
git commit -m "Commit message"

then push


Hi there! Welcome to Cloud9 IDE!

To get you started, create some files, play with the terminal,
or visit http://docs.c9.io for our documentation.
If you want, you can also go watch some training videos at
http://www.youtube.com/user/c9ide.

Happy coding!
The Cloud9 IDE team