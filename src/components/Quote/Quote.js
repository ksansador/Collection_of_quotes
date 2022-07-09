import React from 'react';
import Button from "../UI/Button/Button";
import './Quote.css';

const Quote = (props) => {
    return (
        <div className={'Quote'}>
            <p className={'quoteBody'}>{props.text}</p>
            <h3 className={'quoteTitle'}>---{props.title}</h3>
            <Button btnType={'Btn'} clicked={props.onEdit}>Edit</Button>
            <Button btnType={'Btn'} clicked={props.onDelete}>Delete</Button>
        </div>
    );
};

export default Quote;