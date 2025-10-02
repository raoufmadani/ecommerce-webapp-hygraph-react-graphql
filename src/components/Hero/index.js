import { Link } from 'react-router-dom';
import './index.css';

const Hero = () => {
	return (
		<div className="hero-container">
			<h1>
				Welcome<span>.</span>
			</h1>
			<h3>No. 1 Sneakers Online Store</h3>
			<small>NIKE | YEEZY | JORDAN</small>
            <Link to="/shop" className='btn'>
              Shop Now
            </Link>
		</div>
	);
};

export default Hero;