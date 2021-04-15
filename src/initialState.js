import sweaterImg from "./sweater.png";
import tShirtImg from "./tshirt.png";
import capImg from "./cap.png"

export default {
    cart: [],
    buyer: [],
    products: {
        sweaters: [
            {
                'id': '1',
                "type": "sweaters",
                'image': `${sweaterImg}`,
                'title': "Sueter",
                'price': 10,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': '2',
                "type": "sweaters",
                'image': `${sweaterImg}`,
                'title': 'Sueter',
                'price': 25,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': '3',
                "type": "sweaters",
                'image': `${sweaterImg}`,
                'title': 'Sueter',
                'price': 25,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': '4',
                "type": "sweaters",
                'image': `${sweaterImg}`,
                'title': "Sueter",
                'price': 10,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
        ],
        caps: [
            {
                'id': '5',
                "type": "caps",
                'image': `${capImg}`,
                'title': "Gorra",
                'price': 10,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': '6',
                "type": "caps",
                'image': `${capImg}`,
                'title': 'Gorra',
                'price': 25,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': '7',
                "type": "caps",
                'image': `${capImg}`,
                'title': 'Gorra',
                'price': 25,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': '8',
                "type": "caps",
                'image': `${capImg}`,
                'title': "Gorra",
                'price': 10,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
        ],
        tShirts: [
            {
                'id': '9',
                "type": "tShirts",
                'image': `${tShirtImg}`,
                'title': "Franela",
                'price': 10,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': '10',
                "type": "tShirts",
                'image': `${tShirtImg}`,
                'title': 'Franela',
                'price': 25,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': "11",
                "type": "tShirts",
                'image': `${tShirtImg}`,
                'title': 'Franela',
                'price': 25,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
            {
                'id': '12',
                "type": "tShirts",
                'image': `${tShirtImg}`,
                'title': "Franela",
                'price': 10,
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                amount: 1
            },
        ],
    }
};