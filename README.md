# Setup and Running Instructions

## Setting up environment for Frontend

1. Open a terminal inside the project folder
2. Run `yarn install` (Recommended) or `npm install` to install required `node_modules`
3. Run `yarn start` (Recommended) to start the Frontend Project.


## 1. Introduction

a. The Problem Statement was to create a simple Single page application that calculates and displays labor costs based on crew schedules.
...

## 2. Architecture

- The Architecture for the solution is straight forward.

1. User will open the the base url.
2. The base url will show a Table aka Catalog of all the Crew along with their Hourly rates.
3. User will click on Create Job to create a Job.
4. User will have to fill the form as per the required and click on calculate.
5. User will now be able to see a Receipt for the total charges.
6. User can also see a Pie Chart displaying the Insights for the Job.

## 3. Technology Stack

1. `React.js` for Frontend
2. `TypeScript` for Type checking
3. `Node.js` for Local development
4. `Mobx` for Global State Management.
5. `Git` for version controlling.
6. `Github` for Code commit and Deployment.

## 4. Known Limitations (Time Constraints)
1. Save Jobs.
2. Persist Jobs when page refreshed.
3. Show additonal types of Insights for users.