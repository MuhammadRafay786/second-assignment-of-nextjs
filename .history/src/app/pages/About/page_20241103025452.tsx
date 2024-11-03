
import React from 'react';
import Header from './src/app/pages/About/pages';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Get in touch with us for more information.</p>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
