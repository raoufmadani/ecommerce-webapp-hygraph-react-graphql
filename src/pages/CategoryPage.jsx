import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { request } from 'graphql-request';

const HYGRAPH_API_KEY = process.env.REACT_APP_HYGRAPH_API_KEY;

const CategoryPage = () => {
	const [products, setProducts] = useState([]);

	const navigate = useNavigate();
	const { category } = useParams();

	useEffect(() => {
		const fetchSneakers = async () => {
			const { shoes } = await request(
				`https://us-west-2.cdn.hygraph.com/content/${HYGRAPH_API_KEY}/master`,
				`
					{ 
						shoes(where: {category: {slug: "${category}"}}, first: 50) {
								id
								name
								price
								slug
								image {
								url
								}
								category {
									slug
								}
							}
					}
				`
			);

			setProducts(shoes);
		};
		fetchSneakers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	return (
		<div className="container">
			<button className="back-btn btn" onClick={() => navigate(-1)}>
				Back
			</button>
			<div className="page-title">
				<h2>
					{category}
					<span>.</span>
				</h2>
			</div>
			<div className="products">
				{products.map((product) => (
					<div key={product.id} className="product">
						<img src={product.image.url} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<Link to={`/shop/${product.category.slug}/${product.slug}`}>
									<h3>{product.name}</h3>
								</Link>
								<p className="price">${product.price}</p>
							</div>
							<button className="snipcart-add-item btn"
							data-item-id={product.id}
							data-item-price={product.price}
							data-item-image={product.image.url}
							data-item-name={product.name} >
								Add to Cart
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryPage;