import { useState } from 'react';
import data from '@/public/data/data.json';
import { products } from '@/types/index';
export default function useProducts() {
    const [products, setProducts] = useState<products[]>(data);
    // consumimos al api

    return { products, setProducts };
}
