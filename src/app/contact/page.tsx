import Link from 'next/link'
import React from 'react'

import Card from '@/components/Sections/SmallCard';
import ContactDetails from '@/components/Contact/ContactDetails';
import ContactBanner from '@/components/Contact/ContactBanner';
import ContactForm from '@/components/Contact/ContactForm';
import SocialLinks from '@/components/Contact/SocialLinks';


const Contact = () => {
    return (
        <>
            <ContactBanner />

            <div className='grid md:grid-cols-[1.5fr_1fr] gap-x-20  m-auto sm:w-[80vw] px-2.5 py-5 sm:py-10'>
                <ContactDetails />
                <ContactForm />
                <SocialLinks/>
            </div>

            <div className='pb-5'>
                <Card />
            </div>


        </>
    )
}

export default Contact