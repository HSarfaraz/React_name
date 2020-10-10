1. Check Node is installed node -v, if no install or yes than step 2
2. Create the create-react-app skeleton
    npx create-react-app sarfaraz-app
    cd sarfaraz-app
    npm start
3. Add material-ui, react-redux, redux, redux-form in package.json
4. Go to the folder location and install the dependencies using npm install 
5. create store.js and export it.
6. Do the provider in index.js
7. Create MyForm.js and copy the field array example from redux-form website url:https://redux-form.com/7.3.0/examples/simple/
8. Remove validate the form and keep only 2 feilds as firstname, lastname
9. Populate the data in Matrial Ui table SimplaTable.js url: https://material-ui.com/components/tables/ 
10. We can use connect component(Grab state from redux) as redux used its data, so data is coming from redux url:https://redux-form.com/7.3.0/docs/api/selectors.md/
11. In SimplaTable values are field array and we can iterate the value using alias name m
12. Deploy using url:https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f