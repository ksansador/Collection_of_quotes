import React from 'react';
import Button from "../UI/Button/Button";
import './Quote.css';

const Quote = (props) => {
    return (
        <div className={'Quote'}>
            <div className={'btns'}>
                <Button btnType={'MainButton'} clicked={props.onEdit}>Edit</Button>
                <Button btnType={'MainButton'} clicked={props.onDelete}>Delete</Button>
            </div>
            <p className={'quoteBody'}>
                &#10077;
                    {props.text}
                &#10078;
            </p>
            <h3 className={'quoteTitle'}>&mdash;  {props.title}  &mdash;</h3>
        </div>
    );
};

export default Quote;