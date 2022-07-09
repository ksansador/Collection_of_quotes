import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORY} from "../../constans";

const Categories = () => {
    const [categories] = useState(CATEGORY);

    return (
        <div>
            <ul className={'CategoriesList'}>
                <li key={'quotes'}>
                    <NavLink to={'/'} activeStyle={{color: 'red'}}>
                        All
                    </NavLink>
                </li>
                {categories.map(category => (
                    <li key={category.id}>
                        <NavLink to={'/quotes/' + category.id} activeStyle={{color: 'red'}}>
                            {category.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;