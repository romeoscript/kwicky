import { useState, useEffect } from 'react';
import { Button } from 'antd';
import posthog from 'posthog-js';

const CookkieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    
        const userConsent = localStorage.getItem('userConsent');
        if (userConsent === null) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookie = () => {
        console.log('Accept clicked');
        // Store user consent
        localStorage.setItem('userConsent', 'accepted');
        setIsVisible(false);
    };

    const decline = () => {
        console.log('Decline clicked');
        // Store user consent
        localStorage.setItem('userConsent', 'declined');
        // Opt out of PostHog capturing
        posthog.opt_out_capturing();
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <section className='fixed md:bottom-[10%] w-full bottom-[20%]'>
            <div className='text-white flex gap-8 p-[1rem] rounded-lg bg-[#086AE5] items-center justify-center flex-col w-[90%] text-center m-auto'>
                <h2 className='capitalize font-bold'>Cookie & Privacy</h2>
                <p>We use cookies to improve your browsing experience, analyze site traffic, and personalize content and ads. By clicking 'Accept', you consent to our use of cookies and our Privacy Policy.</p>
                <div className='flex gap-4'>
                    <Button onClick={acceptCookie}>Accept</Button>
                    <Button onClick={decline}>Decline</Button>
                </div>
            </div>
        </section>
    );
};

export default CookkieBanner;
