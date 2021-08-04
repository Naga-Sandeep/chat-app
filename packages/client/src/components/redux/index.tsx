import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

interface ReduxProps {
  children: JSX.Element;
}

interface InitialState {
  counter: number;
}

const initialState = {
  counter: 0,
} as InitialState;

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.counter += 1;
    })
    .addCase(decrement, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.counter -= 1;
    })
    .addDefaultCase(() => initialState);
});

const Redux = ({ children }: ReduxProps) => {
  const store = configureStore({ reducer: rootReducer });

  return <Provider store={store}> {children} </Provider>;
};

export default Redux;
