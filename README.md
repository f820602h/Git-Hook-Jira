# git-hook-jira

use git hook to add jira worklog

## Usage

1. Initialize git, if you didn’t do it.
   ```
   git init
   ```
2. Install `git-hook-jira`.
   ```
   yarn add https://github.com/f820602h/git-hook-jira.git#1.0.0 --dev
   ```
3. Enable `pre-push` git hook, and set your jira user config.
   ```
   yarn git-hook-jira
   ```
4. Try to make some changes in your project, and `git push` by using command-line.
   ```
   git add .
   git commit -m "hello git-hook-jira"
   git push
   ```
5. Follow the procedure, login jira and log work.

6. Add `package.json` script, it will be executed after package install.
   ```
   // package.json
   {
     "scripts": {
       "postinstall": "git-hook-jira"
     }
   }
   ```

