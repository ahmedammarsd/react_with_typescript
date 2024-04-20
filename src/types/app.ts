export interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
}

export interface UserInterface {
  name: string;
  email: string;
}

export interface CounterState {
  count: number;
}

interface UpdateAction {
  type: "increment" | "decrement";
  payload: number;
}

interface ResetAction {
  type: "reset";
}

export type CounterAction = UpdateAction | ResetAction;
// export interface CounterAction {
//   type: "increment" | "decrement" | "reset";
//   payload?: number;
// }
