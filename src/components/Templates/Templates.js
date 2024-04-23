import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Templates = ({ setStateFromHome, stateFromHome }) => {

    const handleSetStateAndNavigate = () => {
        // Set state in Home component
        setStateFromHome([{
            style: {
                general: { backgroundColor: 'rgb(236, 223, 223)' },
                topTitle: {
                    backgroundColor: 'transparent',
                    textAlign: 'center', height: '5vh', color: 'black', fontFamily: 'Arial', fontSize: 'large'
                },
                subtitle: { backgroundColor: 'beige', height: '5vh', fontWeight: 500, margin: '0px', textAlign: 'center', paddingTop: '20px', color: 'navy', fontFamily: 'Arial', fontSize: 'large' },
                menubody: { display: 'flex', flexDirection: 'row', width: '50vw', margin: '0px', height: '100vh' },
                category: { color: 'navy', margin: '0px', paddingLeft: '20px', marginTop: '10px', width: '50vw', height: '5vh', paddingTop: '20px', fontFamily: 'Arial', fontSize: 'medium', opacity: 0.7 },
                name: { margin: '0px', fontSize: '20px', color: 'navy', paddingLeft: '20px', marginTop: '0px', width: '50vw', fontFamily: 'Arial', fontSize: 'medium', opacity: 0.7 },
                desc: { margin: '0px', fontSize: '17px', paddingLeft: '20px', fontWeight: '900px', width: '50vw', fontFamily: 'Arial', fontSize: 'small' },
                priceTitle: { color: "navy", fontFamily: 'Arial', fontSize: "medium", width: '12vw' },
                price: { color: "navy", fontFamily: 'Arial', fontSize: "small", width: '12vw' }
            }, titleHidden: false,
            title: 'Pizza House', subtitle: 'House Of Pizza',
            menuDesc: 'multi-type', categories: ["TASTY PIZZA'S MENU"],
            items: [{
                details: [{
                    id: 0, name: 'Marghetria pizza', desc: 'Marzano tomato sauce, fresh mozzarella and basil.', price: '$10',
                    image: 'https://d2juedknhp61ae.cloudfront.net/627ba2ff26ffab398ad04046/assets/627ba5e526ffab398ad0436c_preview.png'
                },
                {
                    id: 1, name: 'Pepperoni', desc: 'Pork pepperoni and mozzarella. authentic Italian flavours', price: '$10',
                    image: 'https://d2juedknhp61ae.cloudfront.net/627ba2ff26ffab398ad04046/assets/627ba5e0c28e81dec40f0518_preview.png'
                },
                {
                    id: 2, name: 'Chicken Pepperoni Pizza', desc: 'Chicken Pepperoni, topped with extra cheese', price: '$10',
                    image: "https://d2juedknhp61ae.cloudfront.net/627ba2ff26ffab398ad04046/assets/627ba5e0c28e81dec40f0518_preview.png"
                },
                {
                    id: 3, name: 'Blueberry Pie', desc: '', price: '$12',
                    image: "https://d2juedknhp61ae.cloudfront.net/627ba2ff26ffab398ad04046/assets/627ba5e0c28e81dec40f0518_preview.png"
                },
                {
                    id: 3, name: 'Cherry Banaza', desc: '', price: '$21',
                    image: 'https://d2juedknhp61ae.cloudfront.net/627ba2ff26ffab398ad04046/assets/627ba5e526ffab398ad0436c_preview.png'
                }
                ],
                // pricing: [{ p1: '$5'}]
            },
                // {
                //     details: [{ id: 0, name: 'Corn n Cheese Paratha Pizza', desc: 'A delicious fusion of corn stuffed paratha', },
                //     { id: 1, name: 'Tandoori Paneer Pizza', desc: 'Tandoori paneer with capsicum, red paprika.', price: '$10' }],
                //     // pricing: [{ p1: '$10'}]
                // },
                // {
                //     details: [{ id: 0, name: 'Molten Choco Lava Cake', desc: '', price: '$10'  }, { id: 1, name: 'Nuts Brownie', desc: '', price: '$10' }],
                //     // pricing: [{ p1: '$26' }]
                // },

            ]
        }]);
        console.log(stateFromHome, 'hi');
    };

    useEffect(() => {
        // Call the function when the component mounts
        handleSetStateAndNavigate();
    }, []);

    return (
        <div className='p-4'>
            <h1>Templates</h1>
            <Link onClick={handleSetStateAndNavigate} to="/template" >
                <div>
                    <img
                        style={{ width: "300px", height: "300px", margin: "20px" }}
                        onClick={handleSetStateAndNavigate}
                        src={require('../../assets/images/templateSample.jpeg')} alt='template' />
                </div>
            </Link>
        </div>
    )
}

export default Templates