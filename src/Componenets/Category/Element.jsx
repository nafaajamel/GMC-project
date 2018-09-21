
import React from 'react';

const Element = ({category,click}) => {

    return (
        <div 
        onClick={()=>click(category)}
        className={category.selected?"category-element select":"category-element"}>
            <div className="category-img">
            
          <i className={category.img}></i>
            </div>
            <div className="category-title">{category.name}</div>
        </div>
    );
}

export default Element;
