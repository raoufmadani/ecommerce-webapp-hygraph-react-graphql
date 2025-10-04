import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import request from 'graphql-request';
import './index.css';

const HYGRAPH_API_KEY = process.env.REACT_APP_HYGRAPH_API_KEY;

const Categories = () => {
    const [categories, setCategories] = useState([]);

	useEffect(()=>{
     const fetchCategories = async() =>{
     const {categories} = await request(`https://us-west-2.cdn.hygraph.com/content/${HYGRAPH_API_KEY}/master`, 
		`
         { 
            categories {
				id
				slug
				image {
					url
				}
			}
         }
       `
	  );
	  setCategories(categories);
	 };
	 fetchCategories();
	 // eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);
	
	return (
		<div className="categories-container">
			<h2 className="title">Categories</h2>
			<div className="categories">
				{categories.map((category)=> (
					<Link to={`/shop/${category.slug}`}>
						<div key={category.id} className="category">
							<img src={category.image.url} className="category-img" alt="" loading="lazy" />
						</div>
					</Link>
				)) }
			</div>
		</div>
	);
};

export default Categories;