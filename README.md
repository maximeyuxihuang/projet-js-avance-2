Todo App

1. use `useState` and `onClick` to toggle the `FavouriteToggle` display
2. add some logic to your `Post` component: when clicked it must display the content of `data.body`, when clicked again it must return to its initial state
3. create a `ScoreCounter` component to be displayed on every `Post`, it will display a counter and two buttons for incrementing and decrementing this counter. The logic behind will use a custom hook of yours.
4. instead of using the data from `src/posts-mocks.js`, you will update your app to use `useEffect` and `fetch` to get this data from `https://jsonplaceholder.typicode.com/posts`
5. using `useRef`, build a form element that will allow for adding Posts to the list

Notes:

- you are free to add as much components as you wish, as long as you do not use any class in your code.
- https://emojipedia.org is a good reference when you do not want to loose time creating/searching/bundling icons 😁
