const products = {
    'hat': {
        title: 'The Hat',
        slug: 'hat',
        price: 34.99,
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
            images: ['/hat/hat.png'],
            cartImage: `/hat/hat.png`,
            color: ['#000000', '#000000'],
            priceId: 'price_1LM9pDLDkY00e1cBqz8HN7sa'
        }, {
            title: 'Light Yellow',
            images: ['/hat/hat-light-yellow.png'],
            cartImage: '/hat/hat-light-yellow.png',
            color: ['#fff1d3', '#fff1d3'],
            priceId: 'price_1LM9nCLDkY00e1cBQbXqvFLD'
        }
        ],
        sizes: [
        ]
    },
    'mug': {
        title: 'The Mug',
        slug: 'mug',
        price: 19.99,
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
            images: ['/mug/mug.png'],
            cartImage: '/mug/mug.png',
            color: ['#fff', '#fff'],
            priceId: 'price_1LM9niLDkY00e1cBLrnNKdv8'
        }
        ],
        sizes: [
        ]
    },
    'mousepad': {
        title: 'THe Mouse pad',
        slug: 'mousepad',
        price: 45.99,
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
            images: ['/mousepad/mousepad.png'],
            cartImage: '/mousepad/mousepad.png',
            color: ['#272727', '#272727'],
            priceId: 'price_1LM9oLLDkY00e1cBEG3EVVCp'
        }
        ],
        sizes: [
        ]
    },
    'beanie': {
        title: 'The Beanie',
        slug: 'beanie',
        price: 34.99,
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
            images: ['beanie.png'],
            cartImage: '/beanie.png',
            color: ['#000', '#000'],
            priceId: 'price_1LM9liLDkY00e1cBEfDIw2wx'
        }
        ],
        sizes: [
        ]
    },
}

export default products