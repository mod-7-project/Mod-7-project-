# Mod 7 Project

Created by Abdullah Khan, and Chris Jimenez.

## 🚀 Mission statement

Our application, is for Pokemon enjoyers. It allows users to search for pokemon and add it to their team.

## API & React Router

This application will use the Pokemon API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: (PokeApi)(https://pokeapi.co/api/v2/)
- (Pokemon)(https://pokeapi.co/api/v2/ability/{id or name}/)
  - List of pokemon
  - For each pokemon I want the `type`, and `moves`
- (Pokedex-Entres)(https://pokeapi.co/api/v2/pokemon-species/${pokemonNum}/)
  - Pokedex entries
  - From this we can get the pokemon genus and a short synopsis of the pokemon.
- (Pokemon sprites)(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon-id}.png)
  - Sprites of pokemon

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

- On the `/home` page, users can see several popular pokemon characters
- On the `/search` page, users can search for a specific character and click on the character to view their information
- On the `/team` builder page, users can see a search form where they can add pokemon and builder their own team.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

- use a soundboard to add pokemon cries to the website
- Able to make their own pokemon and add it to the website
- Users will see animations gifs of characters

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**

- [ ] Research the api further
- [ ] Render a list of characters in any order
- [ ] Work on nav bar
- [ ] Used Context at least once
- [ ] Used Vite for this project
- [ ] Used React
- [ ] Made a fetch to get multiple resources
- [ ] Created at least 3 components
- [ ] Have all components in their own files (1 export per file)
      [ ] There is a `main` element on _each_ page
- [ ] There is a `nav` element on _each_ page
- [ ] The `nav` contains a `ul` of links
- [ ] At least one `h1` element on _each_ page
- [ ] At least one `section` is used properly on _each_ page

**Day 2**

- [ ] Finish home page
- [ ] Work on search form for pokemon for the information page
- [ ] Render searched pokemon information on a new page
- [ ] Heading tag hierarchy is always correct
- [ ] `div` is never used in place of `ul` and `li`
- [ ] Every `form` `input` has a proper `label`
- [ ] Each `form` is `aria` labelled properly to make it a landmark
- [ ] Every `img` has a unique `alt` (if applicable, get points if no image)
- [ ] All colors have a AAA difference
  - https://color.a11y.com can check your site for you!
- [ ] All buttons look like buttons, all links look like links
- [ ] Made a fetch to get a single, specific resource
- [ ] Made a third fetch for whatever you want
- [ ] Passed props to a component at least 3 times
  - [ ] 1st check box
  - [ ] 2nd check box
  - [ ] 3rd check box
- [ ] Used the `useState` hook at least 3 times
  - [ ] 1st check box
  - [ ] 2nd check box
  - [ ] 3rd check box
- [ ] Used the `useEffect` hook at least 2 times
  - [ ] 1st check box
  - [ ] 2nd check box
- [ ] Used the `useContext` hook at least once

**Day 3** (MVP due by the end of the day)

- [ ] Finish search page
- [ ] Work on team builder page
- [ ] Finish team builder page
- [ ] Handled at least 2 non-submission events (clicking on something causes a UI change)
  - [ ] 1st check box
  - [ ] 2nd check box
- [ ] Handled form submission event properly with React syntax
- [ ] At no point did you ever use any vanilla DOM JS methods
- [ ] Rendered an array of items to the screen at least once
      **Day 4**

- [ ] Had at least 2 different pages in the application
- [ ] Used the proper `Link` components to navigate between pages
- [ ] Used the `useParams` hook at least once
- [ ] Demonstrated a working controlled Form
- [ ] Lifted state up out of a component at least once
  - That is a fancy way of saying that you had the state of a component and then passed down the getter and setter functions for the hook to a child component. You've seen us do this!

**Day 5**

- [ ] Navigation bar fits cleanly on mobile and desktop
- [ ] Navigation visually indicates what page you are on
  - Think underlines, bolding, etc. this should change as you move around the site
- [ ] Used Flexbox or Grid to style list of components
- [ ] Repeated elements have a consistent "card" style
- [ ] Site has a primary color
- [ ] Site has a secondary color
- [ ] Site has an accent color
  - This is for things like buttons, links, etc.
- [ ] No more than 2 different fonts were used on any one page
- [ ] Buttons have altered visual states for hover, active, and focus
- [ ] Links have altered visual states for hover, active, and focus

- [ ] Includes a README.md file
- [ ] The README file describes the purpose and audience for the application
- [ ] The README file describes the user stories
- [ ] The README file include screenshots of the final project

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

WireFrame link:

https://miro.com/welcomeonboard/NFZhR2tlWWNXRUNJRWNUT1dSdlhzT29rYVFtMEJ1Y3l3STFPc3FRTjBiM2RlRkFacFVjYWxabXh0cGFIcm15WHwzNDU4NzY0NTk3NTI5NDgyNDA1fDI=?share_link_id=740930823197
