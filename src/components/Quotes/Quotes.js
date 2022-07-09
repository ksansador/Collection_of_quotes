import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import Button from "../UI/Button/Button";
import {useHistory} from "react-router-dom";
import Spinner from "../UI/Spinner/Spinner";
import Categories from "../Categories/Categories";
import './Quotes.css'
import Quote from "../Quote/Quote";

const Quotes = ({match}) => {
    console.log(match.params.category);
    const history = useHistory();
    const [quotes, setQuotes] = useState(null);
    const [loading, setLoading] = useState(false);
    let quotesArr = [];

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axiosApi('quotes.json');
                if (response.data !== null) {
                    for (const key of Object.entries(response.data)) {
                        quotesArr.push({
                            id: key[0],
                            author: key[1].author,
                            text: key[1].text,
                            category: key[1].category,
                        });
                    }
                    setQuotes(quotesArr);
                }
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        };
        fetchData().catch(e => console.log(e));
    }, []);

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true);
                if ( match.params.category !== undefined) {
                    const response = await axiosApi(`quotes.json?orderBy="category"&equalTo="${match.params.category}"`);
                    console.log(response.data);

                    for (const key of Object.entries(response.data)) {
                        quotesArr.push({
                            id: key[0],
                            author: key[1].author,
                            text: key[1].text,
                            category: key[1].category,
                        });
                    }
                    setQuotes(quotesArr);
                }

            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        };
        fetchData().catch(e => console.log(e));

    }, [match.params.category]);

    const toAddPage = () => {
        history.replace('/add');
    };

    const onEdit = (id) => {
        history.replace(`/quotes/${id}/edit`);
    };

    const onDelete = async (id) => {
        console.log(id);
        await axiosApi.delete(`/quotes/${id}.json`);
        setQuotes(quotes.filter(quote => quote.id !== id));
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