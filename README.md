# Traversal Tree React - Cesar Gamboa Avellan

Project created with Create React App.
Documentation for this project/description will be added to the end of this file


## DEMO URL

For easy testing, the project is running on Vercel: https://tree-traversal-react.vercel.app/
![image](https://user-images.githubusercontent.com/35382861/119753868-bce00a00-be5c-11eb-90e6-2d06c3c10302.png)


## Dependencies

Dirty Json (Added for easier parsing of text to json)
`dirty-json`

## Commands

### `npm install`

To install required dependencies

### `npm start`

This project will Run Locally on:
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

For production build

## Documentation

###Onchange tree generation

We can generate the tree when we modify the text in the textarea, we can turn on/off this functionality by check/uncheck the following input
![image](https://user-images.githubusercontent.com/35382861/119754095-311aad80-be5d-11eb-943f-0fd026936c7a.png)


If you hover on each node, you will see the subtrees of that specific node. 
![image](https://user-images.githubusercontent.com/35382861/119754446-c3bb4c80-be5d-11eb-9201-d3bf05ae1ef5.png)


### Uploading files

You can upload a json file that contains either JSON object or an array [id, leftChild, rightChild] and the click on Generate Tree to show the tree,
you can also, just copy and pasted the json in the textarea. There are some json files in the src/assets folder that you can use for testing. 

###Error when parsing
As mentioned, we can enable onchange tree generation, if there is a problem with parsing, we will see the following 
![image](https://user-images.githubusercontent.com/35382861/119753981-eef16c00-be5c-11eb-8ec5-ed051da3128c.png)

## Assumptions 

1. We only will be uploading files in .json, those files will contain an array or a json object

## Project Structure

![image](https://user-images.githubusercontent.com/35382861/119754867-4b08c000-be5e-11eb-8766-46650d74fc69.png)

For this project was not actually required to use a state managment library (like mobx, redux, context Api, as the nesting of components is not high and the application is not big), however to show the use of one, i added the Context Api, you can see the state in the src/context folder

Problem 1. Code can be found in the helpers folder
Problem 2. Is overral the whole application, integrating problem 1 and 2.
Problem 3. Code for this will be in the home file (src/Modules/home.js) and in TreeOutput file (src/Components/TreeOutput.js)

