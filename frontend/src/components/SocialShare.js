
import React from 'react';

const SocialShare = ({ event }) => {
    const url = encodeURIComponent(window.location.href);

    return (
        <div>
            <h1>Share This Event</h1>
            <a href={`https://twitter.com/intent/tweet?text=${event.title}&url=${url}`} target="_blank" rel="noopener noreferrer">Share on Twitter</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noopener noreferrer">Share on LinkedIn</a>
        </div>
    );
};

export default SocialShare;
