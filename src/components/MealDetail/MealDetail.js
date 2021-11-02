import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./MealDetail.css";

function MealDetail() {
    const [mealDetail, setMealDetail] = useState([]);
    const params = useParams();
    const {id} = params;

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                const resData = res.data.meals
                console.log(resData)
                setMealDetail(resData)
            })
            .catch(err => console.log(err));
    }, [id])

    return (
        <div>
            {mealDetail.map((item) => {
                 return <div className="meal-detail" key={item.idMeal}> 
                            <ul className="meal-detail-desc">
                                <li>Category : {item.strCategory}</li>
                                <li>Ingredients: <a href='#'>{item.strIngredient1}</a>, <a href='#'>{item.strIngredient2}</a></li>
                                <li>Item : {item.strTags}</li>
                            </ul>
                            <div className="meal-image-container">
                                <img src={item.strMealThumb} alt={item.category} />    
                            </div>
                        </div>
            })}
        </div>
    )
}

export default MealDetail;
;