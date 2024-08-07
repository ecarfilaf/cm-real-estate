import { Link } from 'react-router-dom'
import './card.scss'

function Card({item}){
  return (
	<div className='card'>
		<Link to={`/${item.id}`} className='imageContainer'>
			<img src={item.img} alt='Property Image' />
		</Link>
		<div className="textContainer">
			<h2 className="title">
				<Link to={`/${item.id}`}>{item.title}</Link>
			</h2>
			<p className="address">
				<img src="./img/pin.png" alt="Pin icon" />
				<span>{item.address}</span>
			</p>
			<p className="price">$ {item.price}</p>
			<div className="bottom">
				<div className="features">
				<div className="feature">
						<img src="./img/bed.png" alt="Bed icon" />
						<span>{item.bedrooms} bedrooms</span>
					</div>
					<div className="feature">
						<img src="./img/bath.png" alt="Bath icon" />
						<span>{item.bathrooms} bathrooms</span>
					</div>
				</div>
				<div className="icons">
				<div className="icon">
						<img src="./img/save.png" alt="Save Icon" />
					</div>
					<div className="icon">
						<img src="./img/chat.png" alt="Chat Icon" />
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Card


