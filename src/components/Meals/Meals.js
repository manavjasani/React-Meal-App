import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Meals.css';

const Meals = () => {
    const [mealData, setMealData] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => {
                const resData = res.data.categories;
                console.log(resData);
                setMealData(resData);
            })
            .catch(err => console.log(err));
    }, []); 
    
    return (
        <div>
            <h1 className='heading'>Meal-App</h1>
            <div>
                <div className="meal-container">
                    {mealData.map((meal => {
                    return <Link to={`5277${meal.idCategory}`} className="meal-link">
                                <ul key={meal.idCategory} className="meal-box">
                                    <li className="meal-head">{meal.strCategory}</li>
                                    <div className="meal-img-cont">
                                        <img className="meal-img" src={meal.strCategoryThumb} alt={meal.strCategory} />
                                    </div>
                                    <li className="meal-description">{meal.strCategoryDescription}</li>
                                </ul>
                            </Link>
                    }))}
                </div>
            </div>
        </div>
    )
}

export default Meals;
