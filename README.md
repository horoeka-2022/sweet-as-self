# Sweet As Organics

The Sweet As team have diversified! They are now selling a variety of organic foods, but have this time chosen to store their stock data in a database.

## Setup

After cloning this repo

```sh
cd sweet-as-organics-api
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

Check that everything is running on [localhost:3000](http://localhost:3000). The app should look quite familiar, but let's check out how it differs from Sweet As Beers.

## Release 0: Understanding the codebase
This is the first time we've seen the full stack in play, redux included. With some features already complete, the code base is bigger than it has been in previous challenges.

Take some time to familiarise yourself with how it's all working together by exploring the `ProductList` component, specifically how the array of products is being retrieved from our API and stored in Redux. Feel free to step through it yourself if you're feeling confident/up for a challenge, or:

<details><summary>Try exploring these things:</summary>

* How the `products` getting on to `ProductList` component.
* How that `products` array gets into the Redux store in the first place. What's happening in `ProductList`'s `useEffect` method?
* Check out that `fetchProducts` async action creator. It calls a `getProducts()` function asynchronously. What does that function do?
* On our server side, we have `/api/v1/products` GET route that uses a DB function - you could fire up a tool like Postman or Insomnia to see if this route works like you expect.
* Follow the path back to the client side. How does the `products` data get back to that `fetchProducts` async action creator? What happens to the data then?
* Check out the `extraReducers` in `productsSlice`. What does `fetchProducts.fulfilled` return?
* Open your Redux devtools, and as you refresh the Shop (ProductList) page, see how those dispatched actions update the store state. Can you confirm that understanding by taking a look at the slices?
* What does setting the `waiting` state do in terms of UI? Using the timeline slider at the bottom of your Redux devtools is a good way to see how the UI is changing based on different actions.
* Notice `waiting` slice is watching for an action type that ends with `pending`, `fulfilled` or `rejected`.

</details>

<br>

Both the Shop and Cart pages are completed, with their data managed in the Redux store.

Your job will be to implement the functionality for the My Orders page. The React components and the database functions are already in place, so you'll be working with the stuff in the middle - Redux, API calls with Superagent and server side routes.

## Release 1: Add an order
Once a user has their cart ready, they should be able to place their order with Sweet As Organics. Let's get the Place Order button working in `Cart`.

A potential approach could be:
* Create a new routes file (`server/routes/orders.js`) and configure your server to use those routes with an `/api/v1/orders` prefix.
* Create a new POST route that uses the `addOrder` function from `server/db/orders.js`.
  * `addOrder` accepts an order. It should have the same shape as the `cart` array we have in Redux on our client side (i.e. you shouldn't need to reformat the cart data).
  * This route doesn't need to return anything, so it would make sense for your route to simply respond with a `201 (Created)`, and then return `null`.
* Test your route works as expected with a tool like Postman or Insomnia before continuing to the client side. Also browse your `dev.sqlite3` file to ensure your order is being inserted. You should see rows added to both the `orders` and `orders_products` tables.

<br>

* Add a `client/api/orders.js` file, and create a `postOrder` function that uses `superagent` to make a POST request to the route you just made. (Remember it's going to need to send some order data.)
* Create a `client/slices/orders.js` file and use `createAsyncThunk` to hold your new async action creator. Call it `placeOrder`.
  * The first parameter will be the name of the action creator, perhapse `orders/placeOrder`.
  * The second parameter will be a `async` function that takes in order as a parameter.
  * Inside the body of the function call `postOrder` function from `client/api/orders.js` to make the POST request.
  * We know our route only sends back a `201` status, so we won't have any data to deal with when the `postOrder` promise resolves.
  * Notice that this slice doesn't require any logic to be added in `reducers` or `extraReducers`. We'll add new logic in `extraReducers` in the next release.
  * Don't forget to export the reducer and the async action.
* For the final piece of the puzzle, let's dispatch this `placeOrder` action from the `Cart.jsx` Dispatch it within a submit handler function – and don't forget to pass in the `cart`!).
* Try it! Add something to your cart and place your order. Can you see the pending and success actions in your Redux devtools? Has your order been added to the database?

<br> 

* Notice that even when placing the order occurs successfully, the cart doesn't empty. When a user starts shopping again, they would have to manually remove the previous order items from their cart, or end up with double ups! Perhaps the `cart` reducer could also be watching for a `placeOrder.fulfilled` action?
* It would also be great to navigate the user to the My Orders page once their order had been placed. However, we'd only want to redirect if the API call succeeds.
  * Use `unwrap()` on the `dispatch` function and then chain it with a `.then()` and a `catch()` as below:
   ```js
    dispatch(myAsyncActionCreator())
      .unwrap() // 👈
      .then((value) => ...)
      .catch(error => ...)
  ```
  * Here is a link to [Redux-toolkit](https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions) explaining error handling when dispatching async actions from the UI.

## Release 2: View your orders
We've placed an order (WOO!)... but we need a way to see all the orders we've placed! This flow should be very similar to the `fetchProducts` for the Shop (ProductList) page. 

You'll need:
* A new GET route in `server/routes/orders.js` that uses `db.listOrders()`.
  * This db function returns an array of orders.
  * Test your route works as you expect before moving on.
* A `getOrders` function in `client/api/orders.js` to make the API call to your new route.
* A `fetchOrders` async action creator that calls the `getOrders` function.
* A new `orders` slice, which can watch for the `fulfilled` promise state and set the store state to the new `orders` array. 
  * Be sure to import this new reducer into `client/slices/index.js` and use it inside the `combineReducers`.
* Dispatch your `fetchOrders` action from a `useEffect` hook in `OrderList.jsx`. You'll need to import the `dispatch` hook and use it in the OrderList component.
* Check your Redux devtools - can you see the orders?
* `OrderList` is expecting to have an `orders` array, but currently this is hardcoded to an empty array. You'll need to make use of `useSelector` to get the `orders` from your Redux store into the component, and then we should have a snazzy list of orders displaying on the page!

## Release 3: Update order status
Amazing! There are all of our orders - but currently they're all pending. Let's give our users a way to let Sweet As Organics know when they've received their order, or cancel their order if they make a mistake.

Sweet As Organics wants to keep track of all orders, even cancelled ones, so rather than deleting the order, we'll just change its status to `cancelled`. Likewise, we can change the status to `completed` once an order has been received.

You'll need:
* A PATCH route on your server side that uses `db.editOrderStatus(id: number, newStatus: string)`.
  * `editOrderStatus` returns the updated order, which you can respond with.
  * Test your route works as you expect before hitting it from the client side.
* A client side `patchOrderStatus` function which makes the API call to that route, sending the new status and the id.
* An `updateOrderStatus` async action creator, which dispatches pending and success actions.
  * The success action should have an `order` property, so you can update the `orders` array in `client/slices/orders.js`.
  * Also make sure to update the `waiting` reducer.
* Dispatch your `updateOrderStatus` action from the `cancelOrder` and `completeOrder` click handlers in `Order.jsx`.
* _Tip: use the strings `'cancelled'` and `'completed'` for the new statuses to change the status symbol colour for the order - the CSS is already in place!_



## Stretch: Use this challenge to complete your Trello assessment  (WD03 - Frontend: Create a rich client application using a modern frontend JavaScript framework)

Now it's time to put all of what we've learned and implement a new feature that covers the web full-stack. To pass the Trello you need to add:
* A new Database table, that reads and writes to a SQlite3 database
* That Data needs to be accessed and altered via a JSON API
* Redux is used to manage storing data on the front end
* Either a new React component or modify an existing component so you can display the data and allow users to alter data via API 

What you'll need:
* Create a new table in the database, this could be anthing you would like i.e add a new product, add the country of origin for the products, profile page or anything that will help you create a new DB table that you can read and write to!
* You'll need to think back to week 5 and other weeks to implement the server-side. Remember `routes` and `db` functions? And our good friend insomnia to test our route functions? Will you need to use any `joins` in your `db` functions? 
* What about the client-side? Remember now we consume `apis`? Do you need to make a new `React` component? Will you use `useEffect` and `useState`?
* You can start implementing what you've learned about Redux and Thunk. Follow what you have already implemented to inform how you will complete this.

Write some tests! You've got the full stack available to you to test - write some that you feel you've had the least practice in.

