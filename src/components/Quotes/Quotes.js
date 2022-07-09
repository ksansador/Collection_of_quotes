import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import Button from "../UI/Button/Button";
import {Route, Switch, useHistory} from "react-router-dom";
import Spinner from "../UI/Spinner/Spinner";
import Categories from "../Categories/Categories";
import './Quotes.css'
import Quote from "../Quote/Quote";

const Quotes = () => {
    const history = useHistory();
    const [quotes, setQuotes] = useState(null);
    const [loading, setLoading] = useState(false);
    let quotesArr = [];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosApi('quotes.json');
                console.log(response.data);
                for (const key of Object.entries(response.data)) {
                    quotesArr.push({
                        id: key[0],
                        author: key[1].author,
                        text: key[1].text,
                    });
                }
                setQuotes(quotesArr);
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData().catch(e => console.log(e));
    }, []);

    const toAddPage = () => {
        history.replace('/add');
    };

    const onEdit = (e) => {

    };

    const onDelete = (e) => {

    };

    let quotesComponents = (
        <Button
            btnType={'Add'}
            clicked={toAddPage}
        >
            Add quotes...
        </Button>
    );

    if(loading) {
        quotesComponents = <Spinner/>;
    }

    if (quotes !== null) {
        quotesComponents = quotes.map(quote => (
            <Quote
                key={quote.id}
                text={quote.text}
                title={quote.author}
                onEdit={()=> onEdit(quote.id)}
                onDelete={() => onDelete(quote.id)}
            />
        ));
    }

    return (
        <div>
            <div className={'Categories Block'}>
                <Categories/>
            </div>

            <main className={'mainBlock'}>
                <div className={'Quotes Block'}>
                    {quotesComponents}
                </div>
            </main>

        </div>
    );
};

export default Quotes;