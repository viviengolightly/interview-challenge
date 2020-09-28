# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email lyz@feedr.co.

Good luck!

# Quick Start
Fork the repository, clone it to your local system, then:

## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)

## Explanation:

The application is divided into 4 components: 

- 3 functional, that provide the html structure to the app:

1. Renders header, total items chosen count, and dietaries count. 
<Header 
    df={number}
    gf={number}
    n={number}
    rsf={number}
    total={number}
    v={number}
    ve={number}
/>
2. Renders search box and lists all the items from db.
<ItemsListComponent 
    items={array}
    handleAdd={function}
    handleChange={function}
    value={string}
/>
3. Renders preview of the menu - list of all the items choosen by the user. 
<MenuPreviewComponent 
    handleDelete={function}
    menuItems={string}
/>

- 1 class component, that renders the functional components and manipulate data. 

<ItemsContainer />

Functions:

componentDidMount() - Lifecycle method, that calls a method to query data from db, after the component has been mounted.

getItemsData() - function to query data from db

handleAdd(id) - handels the on button ADD click. It adds an item to Menu Preview list and updates the dietaries and total count. 

handleChange(event) - handle the onChngeEvent on the input box, and update its value.

handleDelete(event) - handels the on button (X) click. It deletes an item from Menu Preview list and updates the dietaries and total count. 

The data is fetched using request-promise-native module, saved into a state, passed down the ItemsListComponent as props, where it is rendered. 

Search on the data is perforrmed, by reading the input value and based on that the items in ItemsListComponent are filtered. The data could have been searched by querying the specific name every single time the search button was clicked, but that would create a lot of more requests to db and filtering the data queried is much efficient solution. 

Testing scripts are saved in /src/tests. 

