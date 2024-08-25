import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    
} from 'react-share';
import './SocialButton.css'; 

const SocialShare = ({ url, title, description }) => {
    return (
        <div className="social-share">
            <FacebookShareButton url={"https://www.facebook.com/login/"} title={description}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={"https://x.com/twitt_login"} title={title}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={"https://www.linkedin.com/login"} title={title} summary={description}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={"https://web.whatsapp.com/"} title={title}>
                <WhatsappIcon size={32} round/>
            </WhatsappShareButton>
        </div>
    );
};

export default SocialShare;
