import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-style.css'

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <ProductCard
                    product={product}
                    className="bg-dark"
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    className="bg-dark"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#333',
                        color: 'white'
                    }}
                >
                    <ProductImage
                        style={{
                            borderRadius: '30px',
                        }}
                    />
                    <ProductTitle
                        style={{
                            fontWeight: 'bold'
                        }}
                    />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            color: 'white',
                        }}
                    />
                </ProductCard>

            </div>
        </div>
    )

}
