# reactP

parcel

- Dev Build
- Local server
- HMR = Hot module replacement
  -File Watching Algorithm - written in c++
  -Bundling algorithm - written in JS
- Caching - Faster Builds
- Image Optimization
- Source Mapping
- Production Mode (Minification, Tree Shaking)
- Compressing
- Consistent Hashing
- Code Splitting
- Diffrencial Bundling - Support older browser
- Error Handling
- Diagnnostic
- HTTPs

#namaste food

- there are two types of export/import
  place export keyword at the starting of variable const export var define as named export
  or export default class or function

- useState() = State variable in React
  -useEffect()

- Constructor
  -render (dummy)
  ---html(dummy)
  ---componentDidMount()
  api calls
  this.setState
  render method is called again and again whenever state changes

- Component Life Cycle Methods

  - componentWillUnmount() :
  - componentWillMount() : deprecated
    only once when component mounts for first time
  - componentDidMount() : Called after render() lifecycle hook
    Only Once when component mounted for first time
  - shouldComponentUpdate(nextProps, nextState) -> return true or false
    Called before render() lifecycle hook if props or state changed
    Return true to re-render otherwise return false
  - componentWillUpdate(nextProps, nextState) -> Deprecated
    Called just before render() lifecycle hook if any prop or state changed
  - getSnapshotBeforeUpdate(prevProp, prevState) -> return value
    Called just before render() lifecycle hook returns the snapshot value
  - componentDidUpdate(prevProp, prevState, snapshot)
    Called after render() lifecycle hook if any prop or state changed

- Context API
  Provider -> Store / Data Source
  Consumer -> Use the data from store

- Redux
  Store -> A single object that holds the application’s state. The store's data structure is a JavaScript object.
  Store -> A single object that holds the application’s state. The store has a getter and a dispatcher.
  Action -> Description of what happened in the app. An action tells the store about an event in the app.
  Dispatcher -> It sends an action to the store. When we send an action using the dispatcher, it updates the state of the store.
  Dispatcher -> It sends the payload (Action) to all registered callback functions (Reducers).
  Reducer -> Responsible for changing the state based on the actions sent to it.

- React Router v4
  BrowserRouter -> Wraps the entire App so that every route inside the App will be handled by React Router.
  Route -> Matches the current URL path with the given path and renders the appropriate component

# redux Toolkit

install ation: npm install @reduxjs/toolkit
-build our store

- connect our atore to our app
- useDispatch() -> gives us access to the dispatch function
- useSelector((state)=>state.counter) -> gives us access to the counter part of the state

## slice

- createSlice -> Helper function to generate slice code for Redux toolkit.
- createAsyncThunk -> Generates thunks for async operations.
- configureStore -> Configures the Redux store.
- combineReducers -> Combines multiple reducers into one root reducer.
- createSelector -> Selector used to compute derived data from the store's state or other selectors.
- createEntityAdapter -> Creates utility functions for working with entities in Redux.
- createReducer -> Used to build a reducer function.
- createRootReducer -> Combine several slices/reducers into a single root reducer using combineReducers.
- createAppDispatch -> Returns a typed version of useDispatch().
- useSelector -> Hook that allows you to access the store's state.
- useAppSelector -> Custom hook that wraps useSelector with typings.
- useThunk -> Allows you to write asynchronous logic inside your components.

#Types of testing (developer)
Unit Testing -> Tested individual units of work in isolation, mock everything else out.
Integration Testing -> Multiple units of work working together, but still isolated from the outside world.
Functional Testing -> User interacts with the system as if they were a user.
Regression Testing -> Checking that existing functionality still works after changes have been made.
Acceptance Testing -> System is tested against requirements / acceptance criteria.
Performance Testing -> Measure how well the system performs under different loads.
Security Testing -> Look for vulnerabilities in the application.
Usability Testing -> Evaluate whether users can accomplish their tasks effectively.
Accessibility Testing -> Make sure website is accessible for people with disabilities.

Test Driven Development (TDD) -> Write tests before writing the actual implementation.
Behaviour Driven Development (BDD) -> Write behaviour before implementing it.
Specification By Example (SBE) -> Describe what the software should do using examples.
Given When Then -> A popular way of expressing BDD scenarios.
End To End Testing -

#setting up testing in our app

 - Install React Testing library
 - Installed jest
 - Installed babel dependencies 
 - Configure Babel
 - Configure Parcel Config file to disable default babel transpilation
 - Jest configuration -npx jest  --init
 - Install JSDOM Library
   - Setup JSDOM as test environment
 - Install @babel/preset-react  - to make jsx work in test cases
 -Include @babel/preset-react inside my babel config
 - Install @testing-library/jest-dom 