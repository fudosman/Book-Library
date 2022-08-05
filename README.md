# Book Library Backend

Backend server service for a book Library web application
## Technologies  
* [Node Js](https://nodejs.org/en/)
* [Express Js](https://expressjs.com/)
* [MongoDB Database (Mongoose)](https://www.mongodb.com/)  
## About the project
### this is a simple backend service for the following functions
  
* 1. You can add a book

* 2. You can browse through all books

* 3. You can view details of each book

* 4. You can edit a book

* 5. You can delete a book

*`please feel free to add more functionalities to this code base`*

## Code Base Folder Structure  

**``/src``** :- contains all the application codes

**``/config``** :- contains Data base configuration settings

**``/controllers``** :- contains all files that handles request and interaction with the database

**``/middlewares``** :- contains all the middleware functions

**``/db``** :- contains database connection code snippet

**``/models``** :- contains database model schemas

**``/routes``** :- guides the server requests to the appropriate controller functions

**``/services``** :- added services to the codebase

**``/validation``** :- contains all the validation codes

**``app.js``** :- contains express app setups and routing logics

**``server.js``** :- connects the database and starts the server

**``.env``** :- contains the secure environmental variables used in the application

## How to Contribute  
### Prerequisites  
Make sure you have the following prerequisites installed on your operating system before you start contributing:  
* Nodejs and npm

  To verify run:

  ```
  node -v
  ```

  ```
  npm -v
  ```  
  
  ### Set up your Local Development Environment  
  Follow the following instructions to start contributing.

  **1.** Fork [this](https://github.com/fudosman/Book-Library.git) repository.

  **2.** Clone your forked copy of the project.

  ```
  git clone https://github.com/<your-github-username>/Book-Library.git
  ```

  **3.** Navigate to the project directory.

  ```
  cd portfolio-project-from-Odin_Project
  ```

  **4.** Add a reference(remote) to the original repository.
  
  ```
  git remote add upstream https://github.com/fudosman/Book-Library.git
  ```

  **5.** Check the remotes for this repository.

  ```
  git remote -v
  ```

  **6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project (updated repository).

  ```
  git pull upstream dev
  ```

  **7.** Create a new branch.

  ```
  git checkout -b <your_branch_name>
  ```

  **8.** Install the dependencies for running the server.

  ```
  npm install --save
  ```

  **9.** Start the server in development or in production.  
  
   ```
  npm run dev
  ```
  ```
  npm run start
  ```

  **10.** Make necessary changes to the codebase and and lint the code using.
  
  ```
  npm run lint:fix
  ```

  **11.** Track your changes.

  ```
  git add .
  ```
  
  ```
  git commit -m <commit message> .
  ```


  **12.** While you are working on your branch, other developers may update the `dev` branch with their branch. This action means your branch is now out of date with the `dev` branch and missing content. So to fetch the new changes, follow along:

  ```
  git checkout dev
  git fetch origin dev
  git merge upstream/dev
  git push origin
  ```

  Now you need to merge the `dev` branch into your branch. This can be done in the following way:

  ```
  git checkout <your_branch_name>
  git merge dev
  ```

  **13.** Push the committed changes in your feature branch to your remote repo.

  ```
  git push -u origin <your_branch_name>
  ```

  **14.** Once you’ve committed and pushed all of your changes to GitHub, go to the page for your fork on GitHub, select your development branch, and click the pull request button. Please ensure that you compare your feature branch to the desired branch of the repo you are supposed to make a PR to. If you need to make any adjustments to your pull request, just push the updates to GitHub. Your pull request will automatically track the changes in your development branch and update it.
# Book-Library
