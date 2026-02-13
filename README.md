# 🧠 Redux Learning Journey

> A complete hands-on journey from Core Redux to Redux Toolkit with practical examples and real-world state management patterns.

---

## 📌 About This Repository

This repository documents my step-by-step learning of Redux — starting from the fundamentals and progressing to middleware, async logic, React integration, and modern Redux Toolkit.

The purpose of this project is to deeply understand:

- How Redux works internally
- How unidirectional data flow operates
- How reducers update state immutably
- How middleware enhances Redux functionality
- How async operations are handled
- How Redux integrates with React
- How Redux Toolkit simplifies modern development

---

# 🏗️ Phase 1: Core Redux (Vanilla Redux)

## ✅ Concepts Covered

- Creating a Store (`createStore`)
- Actions
- Action Creators
- Reducers
- Dispatching actions
- Subscribing to store updates

## 🍕 Example: Pizza Store

Initial State:
```js
{
  pizzaBase: 100
}
```

When `ORDER_PIZZA` is dispatched:
- Reducer decreases pizza base count by 1
- Store updates state
- Subscribers are notified

### 🔁 Redux Data Flow

1. Dispatch action  
2. Action goes to reducer  
3. Reducer returns updated state  
4. Store updates state  
5. UI re-renders  

---

# 🍔 Phase 2: Multiple Reducers

## ✅ Concepts Covered

- `combineReducers`
- Managing multiple slices of state
- Scalable state structure

Example State Structure:

```js
{
  pizza: { pizzaBase: 100 },
  burger: { burgerBuns: 200 }
}
```

Each reducer handles its own slice of state independently.

---

# 🧈 Phase 3: Immutability with Immer

Traditional immutable update:

```js
return {
  ...state,
  nested: {
    ...state.nested,
    value: newValue
  }
}
```

Using Immer:

```js
produce(state, draft => {
  draft.nested.value = newValue
})
```

Cleaner and easier to maintain.

---

# 🔍 Phase 4: Middleware

## ✅ Concepts Covered

- What middleware is
- How middleware intercepts actions
- Applying middleware with `applyMiddleware`
- Using Redux Logger

Example:

```js
applyMiddleware(logger)
```

Redux Logger logs:
- Previous state
- Action
- Next state

Helpful for debugging and understanding state changes.

---

# 🌐 Phase 5: Async Redux with Thunk

Reducers must be pure functions.  
API calls are side effects.  

Redux Thunk allows dispatching functions instead of plain objects.

## Example: Fetching Products from API

Flow:

1. Dispatch `FETCH_PRODUCTS_REQUEST`
2. Make API call using axios
3. On success → `FETCH_PRODUCTS_SUCCESS`
4. On failure → `FETCH_PRODUCTS_FAILURE`

State Structure:

```js
{
  loading: false,
  products: [],
  error: ""
}
```

This handles:
- Loading state
- Success response
- Error handling

---

# ⚛️ Phase 6: React + Redux Integration

## Using Provider

```js
<Provider store={store}>
  <App />
</Provider>
```

## Using Hooks (Modern Approach)

```js
const data = useSelector(state => state.sliceName)
const dispatch = useDispatch()
```

- `useSelector` → Access state
- `useDispatch` → Dispatch actions

---

# 🚀 Phase 7: Redux Toolkit (Modern Redux)

Redux Toolkit simplifies Redux development.

Instead of manually writing:
- Action types
- Action creators
- Switch statements
- DevTools setup
- Thunk configuration

We use:

```js
createSlice()
configureStore()
createAsyncThunk()
```

## 🔥 What Redux Toolkit Handles Automatically

- combineReducers
- Redux Thunk setup
- DevTools integration
- Immer for immutability
- Cleaner reducer logic

---

# 🧱 Tech Stack

| Tool | Purpose |
|------|----------|
| Redux | State management |
| React Redux | React bindings |
| Redux Thunk | Async logic |
| Redux Logger | Debugging middleware |
| Redux DevTools | State debugging |
| Redux Toolkit | Modern Redux approach |
| Axios | API requests |

---

# 📚 Key Concepts Mastered

- Unidirectional data flow
- Pure reducers
- Immutable state updates
- Middleware execution flow
- Async action handling
- Slice-based architecture
- Store configuration
- React integration with Redux
- Modern Redux Toolkit patterns

---

# 🎯 Why This Project Matters

This repository demonstrates:

- Deep understanding of Redux fundamentals
- Ability to manage complex global state
- Knowledge of middleware and async logic
- Experience with production-ready architecture
- Understanding of both legacy Redux and modern Redux Toolkit

Useful for:

- Frontend interviews
- Production React applications
- Scalable application design


---

# 💫 Author

👩‍💻 Aliya  

Build. Break. Learn. Repeat.

