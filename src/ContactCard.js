import React from 'react';


const ContactCard = ( { contact }) =>
{
    const { name, picture, email, phone, location} = contact;
    
    return (
        <div className="ContactCard">
            <p className='Name'>
                {name.title} {name.first} {name.last}
            </p>
            <img src={picture.medium} alt={picture} />
            <p>
                <b>Email:</b> {email}
            </p>
            <p>
                <b>Phone:</b> {phone}
            </p>
            <p>
                <b>Address:</b> {location.street.number} {location.street.name},
            </p>
            <p>{location.city},</p>
            <p>{location.state},</p>
            <p>{location.postcode},</p>
            <p>{location.country}</p>
        </div>
    );
}


export default ContactCard;