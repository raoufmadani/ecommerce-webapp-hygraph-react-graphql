import Hero from './../components/Hero';
import Categories from './../components/Categories';

import nike1 from './../assets/images/nike-1.jpg';
import nike2 from './../assets/images/nike-2.jpg';
import nike3 from './../assets/images/nike-3.jpg';

const Home = () => {
	return (
		<div>
			<div className="container">
				<Hero />
			</div>
			<div className="container new-arrivals-container">
				<h2 className="title">New Arrivals</h2>
				<div className="products">
					<div className="product">
						<img src={nike1} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<h3>Nike Air Max</h3>
								<p className="price">$500</p>
							</div>
							<button className="btn">Add to Cart</button>
						</div>
					</div>

					<div className="product">
						<img src={nike2} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<h3>Nike Air Max</h3>
								<p className="price">$500</p>
							</div>
							<button className="btn">Add to Cart</button>
						</div>
					</div>

					<div className="product">
						<img src={nike3} className="product-img" alt="" />
						<div className="product-content">
							<div className="flex-row">
								<h3>Nike Air Max</h3>
								<p className="price">$500</p>
							</div>
							<button className="btn">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<Categories />
			</div>
			<div className="contact-card-section">
				<h2>Contact Us</h2>
				<p>
					Having any difficulties? <br /> Send us a mail Now.
				</p>
				<a href="mailto:contact@educative.io" className="btn">Send Mail</a>
			</div>
		</div>
	);
};

export default Home;