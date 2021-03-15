import capImg from "./assets/img/cap.png"
import tShirtImg from "./assets/img/tshirt.png"
import sweaterImg from "./assets/img/sweater.png";

export default {
    cart: [],
    buyer: [],
    products: [
        {
            'id': '1',
            'image': capImg,
            'title': 'Gorra',
            'price': 25,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            'id': '2',
            'image': tShirtImg,
            'title': 'Franela',
            'price': 25,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            'id': '3',
            'image': sweaterImg,
            'title': "Sueter",
            'price': 10,
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
    ],
};