import React from 'react';

const AddBtn = () => {
    return (
        <div className='fixed-action-btn'>
            {/* This is to add a new log */}
            <a href="#add-log-modal" className='btn-floating btn-large btn-blue darken-2 modal-trigger'>
                <i className='larger material-icons'>add</i>
            </a>
            <ul>
                <li>
                    {/* This is view all the techs */}
                    <a href='#tech-list-modal' className='btn-floating green modal-trigger'>
                        <i className='material-icons'>person</i>
                    </a>
                </li>
                <li>
                    {/* This is to add a new tech */}
                    <a href='#tech-modal' className='btn-floating red modal-trigger'>
                        <i className='material-icons'>person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default AddBtn;
