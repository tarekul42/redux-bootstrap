// main.ts
import { Provider } from "react-redux";
export const main = () =>{
    <Provider store={store}>
        <Practice/>
    </Provider>
}

// app.ts
export const Practice = () => {
    const handleIncrement = () =>{
        
    }
    const handleDecrement = () =>{

    }
  return (
    <>
      <div>
        <h1>Counter to calculate</h1>
        <button>Increment</button>
        <div>0</div>
        <button>Decrement</button>
      </div>
    </>
  );
};

// store.ts
import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

// redux>features>counter>counterSlice.ts

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) =>{
        state.count += 1;
    },
    decrement: (state) =>{
        state.count -+1;
    }
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;