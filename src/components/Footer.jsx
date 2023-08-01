import React from 'react'

const Footer = () => {
  return (
   <footer className='footer-section py-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5'>
                    <div className='footer-logo'>
                        <img className='pb-3' src='/images/footer-logo.png' alt='logo'/>
                        <p className='mb-0'>Is Best Delivery Service Near You</p>
                        <p className='mb-0'> <img src='.=/images/icon.png' alt='icon'/> House: 00, Road: 00, City-0000, Country </p>
                        <p className='mb-0'> <img src='/images/icon-2.png' alt='icon'/> admin@gmail.com </p>
                        <p className='mb-0'> <img src='/images/icon-3.png' alt='icon'/> 01300000000 </p>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <div className='d-flex pt-5 footer-link-area'>
                        <div>
                            <ul>
                                <li> <a href='#'>Quick Links </a> </li>
                                <li> <a href='#'>Loyalty Points </a> </li>
                                <li> <a href='#'> My Wallet  </a>  </li>
                                <li> <a href='#'> About Us  </a> </li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li> <a href='#'> Quick Links  </a> </li>
                                <li> <a href='#'> Popular Restaurants </a> </li>
                                <li> <a href='#'> Best Reviewed Foods </a> </li>
                                <li> <a href='#'>New Restaurants </a> </li>
                                
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li> <a href='#'> Other </a> </li>
                                <li> <a href='#'> Privacy Policy </a> </li>
                                <li> <a href='#'> Term & Conditions </a> </li>
                                <li> <a href='#'> Refund Policy </a> </li>
                                <li> <a href='#'> Shipping Policy </a> </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-12'>
                    <div className='copyrigth-area'>
                        <p className='text-center mb-0'> Copy Right  &copy;  Dev Squad; 2023 </p>
                    </div>
                </div>
            </div>

        </div>
   </footer>
  )
}

export default Footer