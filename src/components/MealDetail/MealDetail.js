import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MealDetail() {
    
    const params = useParams();
    const {id} = params;
    console.log(id);
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                console.log(res)

            })
            .catch(err => console.log(err));
    }, [id])

    return (
        <div>
            hello
        </div>
    )
}

export default MealDetail;
;