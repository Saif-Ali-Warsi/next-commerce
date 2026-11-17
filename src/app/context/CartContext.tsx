"use client";

import { createContext, useReducer, type ReactNode } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

type AddAction = {
  type: "ADD_TO_CART";
  payload: CartItem;
};

type RemoveAction = {
  type: "REMOVE_FROM_CART";
  payload: number;
};

type IncreaseCartQty = {
  type: "INCREASE_QUANTITY";
  payload: number;
};

type DecreaseCartQty = {
  type: "DECREASE_QUANTITY";
  payload: number;
};

type CartAction = AddAction | RemoveAction | IncreaseCartQty | DecreaseCartQty;

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };

    default:
      return state;
  }
}

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log("CartProvider rendered:", state);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

