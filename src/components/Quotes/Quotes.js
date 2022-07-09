import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import Button from "../UI/Button/Button";
import {useHistory} from "react-router-dom";

const Quotes = () => {
    const history = useHistory();
    const [qoutes, setQuotes] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosApi('quotes.json');
                setQuotes(response.data);
                setLoading(false);
            } catch (e) {
                console.error(e);
            }
        };

    }, []);

    const toAddPage = () => {
        history.replace('/add');
    };

    let quotesComponents = (
        <Button
            btnType={'Add'}
            clicked={toAddPage}
        >
            Add quotes...
        </Button>
    );
    return (
        <div>
            {quotesComponents}
        </div>
    );
};

export default Quotes;