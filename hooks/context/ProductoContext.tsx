import { createContext } from 'react';
import { productsCart } from '@/types';
import { actionParams } from '../products/useCartProducts';
interface ContextType {
    carrito: productsCart[];
    total: number;
    distpach: React.Dispatch<actionParams>;
}
export const ProductoContext = createContext<ContextType>({} as ContextType);
