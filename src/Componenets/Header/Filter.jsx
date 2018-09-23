import React, { Component } from 'react';
import { connect } from 'react-redux';
class Filter extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="category-filter">

                <ul className="category-menu">
                    <li className="category-head"><b> <i className="fa fa-list"></i> Category</b></li>
                    {this.props.category.map(x => {
                        return <li
                            className={x.selected ? "category-item selected-category" : "category-item"}
                            onClick={() => this.props.setCategory(x)} >
                            <i className={x.img}></i>
                            {x.name}

                        </li>
                    })}

                </ul>

            </div>
        );
    }
}


const mapStateToProps = ({ category }) => {

    return {
        category,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        setCategory: ({ name, selected, img }) => {
            selected = !selected
            dispatch({
                type: 'UPDATE_ON_CATEGORY',
                category: { name, selected, img }
            })
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);