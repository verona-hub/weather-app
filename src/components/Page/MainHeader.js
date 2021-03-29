import React from 'react';

const MainHeader = ({ location, title, css }) => {

    const { name, country } = location;

    return (
        <div className={`MainHeader ${ css }`}>
            <h2 className="title"> { title } </h2>
            <h2 className="sub_title"> { name }, { country } </h2>
        </div>
    );
};

export default MainHeader;
