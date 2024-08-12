'use client';
import useProducts from '@/hooks/products/useProducts';
import { useParams } from 'next/navigation';
import Image from 'next/image';
export default function PostPage() {
    // Parametros de la URL
    const param = useParams();
    const { id } = param;
    const productID = Number(id);
    // Products

    const { products } = useProducts();

    const isProduct = products.find((product) => product.id === productID);

    if (isProduct) {
        return (
            <>
                <div>
                    {products.map((product) =>
                        product.id === productID ? (
                            <div key={product.id}>
                                <Image
                                    className='w-36 h-72'
                                    priority={true}
                                    src={product.image.desktop}
                                    width={500}
                                    height={500}
                                    alt={product.name}
                                />
                                <ol></ol>
                                <h1>{product.id}</h1>
                                <h1>{product.name}</h1>
                                <h1>{product.category}</h1>
                                <h1>{product.category}</h1>
                            </div>
                        ) : null
                    )}
                </div>
            </>
        );
    }
    return (
        <div>
            <h1>El producto no presente {id}</h1>
        </div>
    );
}
