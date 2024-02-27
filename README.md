# Sofar Ocean Take Home Assignment: Personal Expense Tracker

## Getting Started

First, clone the repo and install the dependencies with

```bash
npm i
```


 Next start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Finally open [http://localhost:3000](http://localhost:3000) with your browser to see the app running

## Using the App

Starting the app takes you to the home directory of the dashboard. This dashboard however is completely empty expect for a div element. You can use the side nav to navigate to the Expenses page by clicking on it. For development Next.js can take a few seconds to load but you'll see logs in your console that things are compiling and the page will render once its done. Once you've arrived at the Expense list page you will be able to see a preset list of Expenses in the list and click on a number of the table headings to sort the list. These headers are:

- Number (#)
- Amount
- Category
- Vender
- Date Created

Clicking on the headers will update the URL params and in turn re-render the table to be sorted.

None of the buttons to add expenses are implemented. If you wish to add or remove them you should navigate the the `expenses.json` file in the `__fixtures__` directory of the project and make appropriate changes there.

## Focus

I chose to focus my time solely on the frontend of the application. While The backend is important in my opinion you should take more time planning, discussing potential trade-offs, working with stakeholders to define requirements and figuring out the 'least worst' implementation for easiest change in the future. We all know that companies of today live and die by how fast they make it to market, their uptime / maintainability, how well they scale, etc... so in this manner I decided that while the backend discussions could be going on, significant progress could begin on the frontend if designs were already created. Working off a fixtures file I was able to make significant progress on an MVP of a sortable table serving as the list view as well as implementing a basic side bar for navigation.

Another thought behind the focus on frontend was that focusing on basic navigation and the sortable table would let stakeholders quickly demo the application, get user feedback and drive development of some of the core UI / UX functionality. This would allow for any quick pivots before painful tech debt could be created in the backend.

## Technology Decisions

I chose to use Next.js instead of just React as the [current React docs](https://react.dev/learn/start-a-new-react-project) now recommends using a framework like Next.js instead of simply installing React. Next.js has built in functionality of routing and navigation that would prove to be useful in implementing sorting of a table via search params in the URL. Prior to Next.js this functionality would have to be managed by a single or multiple libraries leading to more code complexity, higher potential for defects as well as longer development time overall by means of creating a custom framework for routing on-top of React.

Additionally I chose TypeScript over vanilla JavaScript due to its proven bug catching abilities and for the reason that new Next.js apps are automatically built with it.

For styling I chose to go with tailwind css. Using existing component libraries or templates made available for free on the internet helped me rapidly develop and in a real life scenario would potentially help get a product to market faster.

## Things I would do if time permitted

If time permitted I would highly prioritize testing. I'm sure many of us have heard the phrase "tests are the best kind of documentation". Comments can be good too but as Clean Code explains they should be used sparingly. I've come across a number of old comments saying classes do 'x' but really have not done that in many years. Prioritizing testing would encourage smaller components, classes, etc, which in turn improves maintainability, and general readability of the code.

Additionally it would have been convenient to have the TypeScript and ESLint linting set up prior to starting this project or as part of a template when building this. There were a number of issues I had in development that would have been easily caught in a production ready TypeScript / JavaScript repo with proper linting set up. I chose not to focus on this as it would have been a significant time sink to have this setup and in many cases this sort of thing would normally be standardized across a company's repos by a Platform team and not done on an individual repo by repo basis.

I would also have liked to do more on rendering optimizations & edge case handling of sorting of the list. There are a number of ways that you'd run into issues with it by way of attempting to render a large list of expenses all at once. If this were built for a short demo with a small amount of expenses it would work fine but there would be additional steps needed before this should go in front of a large number of people in production.

Lastly there is a bug I would like to fix with the sorting of the list such that it will always swap `asc` with `desc` regardless of switching between the different sortable options.

## Future improvements

Some notables would be:

- The bug fix on the sorting of the list
- UI / UX feedback on the list so a user knows which property is being sorted
- Testing (unit, integration, visual, end to end)
- Connecting of the Backend
- Implement the `add` functionality
- Explore the `import` functionality
- Add additional ways filtering of the list like perhaps you only want to see expenses for the day, the month, the year, etc...
- Implement search for the list
- Implement the dashboard
- Implement User profile / user settings
  - One fun user setting could be the ability to let users create their own categories and colors for them
- Refactor a number of the components into more common components like for Fonts, Colors, table rows, etc. This could be the start of future a design system for this application and has the benefit of preventing UI bugs due to duplication of styling all over the place.