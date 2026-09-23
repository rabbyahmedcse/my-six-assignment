import React from 'react';


const PersonDetailsPage = async({params}) => {
    const {id} = await params;
 const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
 const person = await res.json();
    return (
        <div>
            {person.name}
        </div>
    );
};

export default PersonDetailsPage;