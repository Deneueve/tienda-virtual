import { productsCart } from '@/types';
const initialState = {
    carrito: [] as productsCart[],
};
export type actionParams =
    | { type: 'get' }
    | { type: 'add'; payload: productsCart }
    | { type: 'remove'; payload: number }
    | { type: 'buscar' }
    | { type: 'total' };
const contadorReducer = (state = initialState, action: actionParams) => {
    switch (action.type) {
        case 'get': {
            return {
                carrito: [...state.carrito],
            };
        }
        case 'add': {
            const productoExistente = state.carrito.find((item) => item.id === action.payload.id);

            if (productoExistente) {
                return {
                    ...state,
                    carrito: state.carrito.map((item) =>
                        item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    carrito: [...state.carrito, action.payload],
                };
            }
        }
        case 'remove': {
            return {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload),
            };
        }

        default:
            return state;
    }
};
export default function useCartProducts() {
    return { initialState, contadorReducer };
}
