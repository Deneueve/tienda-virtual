import React, { useReducer, useState } from 'react';
import { ProductoContext } from './ProductoContext';
import useCartProducts from '../products/useCartProducts';

interface props {
    children: JSX.Element[];
}
export default function ProductoProvider({ children }: props) {
    const { initialState, contadorReducer } = useCartProducts();
    const [total, setTotal] = useState(0);
    const [{ carrito }, distpach] = useReducer(contadorReducer, initialState);
    return (
        <>
            <ProductoContext.Provider value={{ carrito, distpach, total }}>{children}</ProductoContext.Provider>
        </>
    );
}
