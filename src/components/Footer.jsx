import React from 'react'
import './footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section">
                    <h3>BE THE BEST TO KNOW</h3>
                    <p>
                        <a href="">sign up</a> for update from metta muse.
                    </p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className="footer-section">
                    <h3>CONTACT US</h3>
                    <ul>
                        <li><a href="#">+44 221 133 5360</a></li>
                        <li><a href="#">customer@mettamuse.com</a></li>
                    </ul>
                    <h3>CURRENCY</h3>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className="footer-section">
                    <h3>metta muse</h3>
                    <p><a href="">About Us</a></p>
                    <p><a href="">Stories</a></p>
                    <p><a href="">Artisans</a></p>
                    <p><a href="">Boutiques</a></p>
                    <p><a href="">Contact Us</a></p>
                    <p><a href="">EU Compliances Docs</a></p>
                </div>
                <div className="footer-section">
                    <h3>QUICK LINKS</h3>
                    <p><a href="">Orders & Shipping</a></p>
                    <p><a href="">Join/Login as seller</a></p>
                    <p><a href="">Payment & Pricing</a></p>
                    <p><a href="">Return & Refund</a></p>
                    <p><a href="">FAQs</a></p>
                    <p><a href="">Privacy Policy</a></p>
                    <p><a href="">Terms & Conditions</a></p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-links">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>

            </div>
            <div className="footer-end">
                <p>&copy; 2024 appscrip.com. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
