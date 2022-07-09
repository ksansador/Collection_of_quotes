import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORY} from "../../constans";
import './Categories.css';

const Categories = () => {
    const [categories] = useState(CATEGORY);

    return (
        <div>
            <ul className={'CategoriesList'}>
                <li key={'quote'} className={'CategoryItem'}>
                    <NavLink to={'/'} className={'CategoryLink'} >
                        All
                    </NavLink>
                </li>
                {categories.map(category => (
                    <li key={category.id} className={'CategoryItem'}>
                        <NavLink to={'/quotes/' + category.id} className={'CategoryLink'}>
                            {category.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;