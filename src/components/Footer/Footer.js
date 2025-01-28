import React from 'react';
import FooterStyles from './Footer.module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={FooterStyles.footer}>
            <p>&copy; {currentYear} One for the Books. All Rights Reserved.</p>
            <p>All content, including text, images, and designs, is the intellectual property of One for the Books and may not be reproduced or distributed without permission.</p>
        </footer>
    );
};

export default Footer;