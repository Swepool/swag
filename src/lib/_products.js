import {base} from "$app/paths";

const products = {
    'hat': {
        title: 'Hat',
        slug: 'hat',
        price: 24.99,
        description: {
            text: 'The Organic Bucket Hat can do it all—shield you from the sun and be a stylish accessory at the same time. This premium-quality hat in trendy earth tones will charm you and your customers with its breathable material and clean stitching. Don’t hesitate to order this summer essential',
            features: [
                '100% organic cotton twill',
                'Classic brim',
                'High profile',
                'One size fits most'
            ]
        },
        variations: [{
            title: 'Black',
            images: ['/static/hat/hat.png'],
            cartImage: `/static/hat/hat.png`,
            color: ['#000000', '#000000'],
            priceId: 'price_1LLrg5LDkY00e1cB4z95JEYx'
        }, {
            title: 'Light Yellow',
            images: ['/static/hat/hat-light-yellow.png'],
            cartImage: '/static/hat/hat-light-yellow.png',
            color: ['#fff1d3', '#fff1d3'],
            priceId: 'price_1LM6txLDkY00e1cBitaA9s1M'
        }
        ],
        sizes: [
        ]
    },
    'mug': {
        title: 'Mug',
        slug: 'mug',
        price: 14.99,
        description: {
            text: 'This sturdy mug is perfect for your morning coffee, afternoon tea, or whatever hot beverage you enjoy. It\'s glossy white and yields vivid prints that retain their quality when dish-washed and microwaved.',
            features: [
                'Ceramic',
                '11 oz mug ',
                'Dishwasher and microwave safe',
                '9.6 cm in height',
                '8.3 cm in diameter'
            ]
        },
        variations: [{
            title: 'White',
            images: ['/static/mug/mug.png'],
            cartImage: '/static/mug/mug.png',
            color: ['#fff', '#fff'],
            priceId: 'price_1LM6tNLDkY00e1cB2Z8fiD7G'
        }
        ],
        sizes: [
        ]
    },
    'mousepad': {
        title: 'Mouse pad',
        slug: 'mousepad',
        price: 34.99,
        description: {
            text: 'Turn your gaming setup into a professional gaming station with this reliable and large Gaming Mouse Pad. You’ll never need to worry about adjusting a mouse pad mid-game again! It’s suitable for comfort and precision, with a sturdy grip that won’t slip no matter how intense your match.',
            features: [
                '100% polyester top',
                'Rounded edges',
                'Non-slip surface',
                '91.4 cm × 45.7 cm',
            ]
        },
        variations: [{
            title: 'Grey',
            images: ['/static/mousepad/mousepad.png'],
            cartImage: '/static/mousepad/mousepad.png',
            color: ['#272727', '#272727'],
            priceId: 'price_1LM7LQLDkY00e1cBTif9RQAt'
        }
        ],
        sizes: [
        ]
    },
    'beanie': {
        title: 'Beanie',
        slug: 'beanie',
        price: 24.99,
        description: {
            text: 'The Organic Ribbed Beanie has a classic look, but the ribbed fabric brings a pinch of uniqueness. Wear this 100% organic cotton beanie during your outdoor adventures or combine it with a streetwear outfit. Thanks to its stylish look and practicality, it\'ll work for both! ',
            features: [
                '100% organic cotton',
                'Lightweight breathable fabric',
                'Double layer knit',
                'Cuffed beanie',
                'Tear away tag',
                '21 cm in length',
                '38 cm relaxed & 50 cm when stretched'

            ]
        },
        variations: [{
            title: 'Black',
            images: ['/static/beanie.png'],
            cartImage: '/static/beanie.png',
            color: ['#000', '#000'],
            priceId: 'price_1LM7X4LDkY00e1cBhfUPvbcR'
        }
        ],
        sizes: [
        ]
    },
}

export default products