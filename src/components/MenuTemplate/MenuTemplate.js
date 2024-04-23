import React from 'react'

const MenuTemplate = () => {

    const menulistItem = [
        {
            item: "FAST FOOD #1", price: '$12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id, voluptates!'
        },
        {
            item: "FAST FOOD #2", price: '$12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id, voluptates!'
        },
        {
            item: "FAST FOOD #3", price: '$12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id, voluptates!'
        },
        {
            item: "FAST FOOD #4", price: '$12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id, voluptates!'
        },
        {
            item: "FAST FOOD #5", price: '$12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate aut quas, esse omnis ipsam id, voluptates!'
        },
    ]

    return (
        <div className='menu-template'>
            <div className='menu-contents py-4'>
                <div className='menu-title text-center'>
                    <h2 className='mb-1'>MENU TEMPLATE</h2>
                    <span className='fs-5'>FAST FOOD</span>
                </div>

                <div className='menu-inner-card px-lg-5 px-md-4 px-sm-4 py-3 mt-3'>

                    <div className='text-center mt-4'>
                        <img src={require('../../assets/images/fast-food-icon.jpeg')} alt='' className='ff-icon ps-2' />
                        <img src={require('../../assets/images/tomatto-removebg-preview.png')} alt='' className='tomotto-icon' />
                        <h1 className='mb-0 menu-text'>MENU</h1>
                        <img src={require('../../assets/images/tomatto-removebg-preview.png')} alt='' className='tomotto-right-icon' />
                        <img src={require('../../assets/images/tomatto-removebg-preview.png')} alt='' className='tomotto-right-icon-2' />
                    </div>

                    <div className='row mt-5 mt-sm-4 menu-list'>
                        <div className='col-6'>
                            {menulistItem.map((item, i) => (
                                <div key={i}>
                                    <div className="d-flex justify-content-between">
                                        <span className='menu-list-item mb-2'>{item.item}</span>
                                        <span className='menu-list-price'>{item.price}</span>
                                    </div>
                                    <p className='mb-4 me-lg-5 me-md-4 me-sm-3 menu-description'>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='col-6'>
                            {menulistItem.map((item, i) => (
                                <div key={i}>
                                    <div className="d-flex justify-content-between">
                                        <span className='menu-list-item mb-2'>{item.item}</span>
                                        <span className='menu-list-price'>{item.price}</span>
                                    </div>
                                    <p className='mb-4 me-lg-5 me-md-4 me-sm-3 menu-description'>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-4 mt-4'>
                            <h2 className='drinks-title mb-3'>DRINKS</h2>
                            <div className="d-flex justify-content-between mb-2">
                                <span className='drinks-name'>DRINK #1</span>
                                <span className='drinks-price'>$3</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className='drinks-name'>DRINK #2</span>
                                <span className='drinks-price'>$4</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className='drinks-name'>DRINK #3</span>
                                <span className='drinks-price'>$2</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className='drinks-name'>DRINK #4</span>
                                <span className='drinks-price'>$3</span>
                            </div>
                        </div>
                        <div className='col position-relative'>
                            <img src={require('../../assets/images/french-fries.jpeg')} alt='' className='french-fries-icon' />
                            <img src={require('../../assets/images/fruit-paree-removebg-preview.png')} alt='' className='fruit-paree' />
                            <img src={require('../../assets/images/fruit-paree-removebg-preview.png')} alt='' className='tomato-soup' />
                            <img src={require('../../assets/images/fruit-paree-removebg-preview.png')} alt='' className='tomato-soup-2' />
                        </div>
                    </div>

                </div>

                <footer className="text-center footer py-4 px-1 px-md-0">
                    <section className="">
                        <div className="row text-center d-flex justify-content-center px-5">
                            <div className="col-md-4 ps-0">
                                <span className='fw-bold'>Address: Thor Street, 4891, Town</span>
                            </div>
                            <div className="col-md-4">
                                <span className='fw-bold'>Phone: +1234 567890</span>
                            </div>
                            <div className="col-md-4 pe-0">
                                <span className='fw-bold'>www.youtube.com</span>
                            </div>
                        </div>
                    </section>
                    <section className="text-center py-2">
                        <a href="" className="me-3 f-icons">
                            <i className="bi bi-browser-chrome"></i>
                        </a>
                        <a href="" className="me-3 f-icons">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="" className="me-3 f-icons">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="" className="btn-md btn-floating me-3 f-icons">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <span>@ socialmedia</span>
                    </section>
                </footer>
            </div>
        </div>
    )
}

export default MenuTemplate