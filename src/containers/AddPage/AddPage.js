import React, {useState} from 'react';
import {CATEGORY, SELECT_OPTIONS} from "../../constans";
import Button from "../../components/UI/Button/Button";
import axiosApi from "../../axiosApi";
import axios from "axios";

const AddPage = ({history,match}) => {
   const [quote, setQuote] = useState({
      author: '',
       category: 'star-wars',
       text: '',
   });
   const [loading, setLoading] = useState(false);

   const onSubmitHandler = async e => {
        e.preventDefault();
        setLoading(true);

       if (quote.author !== '' && quote.text !== '') {
           try {
               await axios.post('https://exam-8-zanokha-default-rtdb.europe-west1.firebasedatabase.app/quotes.json', quote)
                history.replace('/');
           } catch (e){
               console.error(e);
           }
       } else {
           console.log('Enter values');
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
     <form onSubmit={onSubmitHandler}  className={'submit'}>

         <select
             name={'category'}
             onChange={onInputChange}
             className={'selector'}
         >
             {CATEGORY.map(item => {
               return (
                   <option key={item.id} value={item.id}>{item.title}</option>
               ) ;
             })}
         </select>

         <input
             type={'text'}
             className={'InputAdd'}
             name={'author'}
             value={quote.author}
             onChange={onInputChange}
             placeholder={'Your name'}
         />
         <textarea
             className={'InputAdd'}
             name={'text'}
             onChange={onInputChange}
             value={quote.text}
             placeholder={'Write quote'}
         />
         <Button type={'submit'} btnType={'Submit'}>Submit new post</Button>
     </form>
   );
    return (
        <div>
            {form}
        </div>
    );
};

export default AddPage;