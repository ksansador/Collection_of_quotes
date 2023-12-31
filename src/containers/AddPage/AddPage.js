import React, {useState, useEffect} from 'react';
import {CATEGORY} from "../../constans";
import Button from "../../components/UI/Button/Button";
import axiosApi from "../../axiosApi";
import './AddPAge.css';
import Spinner from "../../components/UI/Spinner/Spinner";

const AddPage = ({history,match}) => {
    const [quote, setQuote] = useState({
      author: '',
       category: 'star-wars',
       text: '',
   });

   const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            const fetchData = async() => {
                setLoading(true);
                const response =   await axiosApi(`/quotes/${match.params.id}.json`);
                if(response.data !== null) {
                    const value = response.data;
                    console.log(value);
                    setQuote(value);
                }
            };
            fetchData().catch(console.error);
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    }, [match.params.id]);

   const onSubmitHandler = async e => {
        e.preventDefault();
        setLoading(true);

        if (match.params.id === undefined) {

             if (quote.author !== '' && quote.text !== '') {
                try {
                    await axiosApi.post('/quotes.json', quote)
                    history.replace('/');
                } catch (e){
                    console.error(e);
                }
            } else {
                console.log('Enter values');
            }
        } else {
            setLoading(false);

            if (quote.author !== '' && quote.text !== '') {
                try {
                    await axiosApi.put(`/quotes/${match.params.id}.json`, quote);

                } catch (e) {
                    console.error(e);
                } finally {
                    setLoading(false);
                    history.push('/');
                }
            } else {
                setLoading(false);
                console.log('Enter inputs');
            }
        }
   };

    const onInputChange = e => {
        const {name, value} = e.target;
        console.log(name, value);

        setQuote(prev => ({
            ...prev,
            [name]: value,
        }));
    };

   let form = (
     <form onSubmit={onSubmitHandler}  className={'submitForm'}>
         <label className={'label'}><small>Choose category:</small></label>
         <select
             name={'category'}
             onChange={onInputChange}
             className={'selector'}
             value={quote.category}
         >
             {CATEGORY.map(item => {
               return (
                   <option key={item.id} value={item.id}>{item.title}</option>
               ) ;
             })}
         </select>

        <label className={'label'}><small>Author's name:</small></label>
         <input
             type={'text'}
             className={'InputAdd'}
             name={'author'}
             value={quote.author}
             onChange={onInputChange}
             placeholder={'Author'}
         />

         <label className={'label'}><small>Quote:</small></label>
         <textarea
             className={'InputAdd'}
             name={'text'}
             onChange={onInputChange}
             value={quote.text}
             placeholder={'Write quote'}
         />

         <Button type={'submit'} btnType={'Submit'}>Submit post</Button>
     </form>
   );

   if(loading) {
       form = <Spinner/>;
   }

    let text = 'Submit new quotes';

    if  (match.params.id) {
        text = 'Edit quote';
    }


    return (

        <div>
            <h3 className={'FormTitle'}>{text}</h3>
            {form}
        </div>
    );
};

export default AddPage;