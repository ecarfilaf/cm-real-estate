import './singlePage.scss'
import Slider from '../../components/slider/Slider';
import {singlePostData, userData} from '../../lib/dummydata';
import Map from '../../components/map/Map';

function SinglePage(){
  return (
	<div className='singlePage'>
		<div className="details">
			<div className="wrapper">
				<Slider images={singlePostData.images} />
				<div className="info">
					<div className="top">
						<div className="post">
							<h1>{singlePostData.title}</h1>
							<div className="address">
								<img src="./img/pin.png" alt="Pin icon" />
								<span>{singlePostData.address}</span>
							</div>
							<div className="price">$ {singlePostData.price}</div>
						</div>
						<div className="user">
							<img src={userData.img} alt="User image" />
							<span>{userData.name}</span>
						</div>
					</div>
					<div className="bottom">{singlePostData.description}</div>
				</div>
			</div>
		</div>
		<div className="features">
			<div className="wrapper">
				<p className="title">General</p>
				<div className="listVertical">
					<div className="feature">
						<img src="./img/utility.png" alt="Utility Icon" />
						<div className="featureText">
							<span>Utility</span>
							<p>Renter is responsible</p>
						</div>
					</div>
					<div className="feature">
						<img src="./img/pet.png" alt="Pet Icon" />
						<div className="featureText">
							<span>Pet policy</span>
							<p>Pets Allowed</p>
						</div>
					</div>
					<div className="feature">
						<img src="./img/fee.png" alt="Fee Icon" />
						<div className="featureText">
							<span>Propety Fees</span>
							<p>Must have 3x the rent in total household income</p>
						</div>
					</div>
				</div>
				<p className="title">Sizes</p>
				<div className="sizes">
					<div className="size">
						<img src="./img/size.png" alt="Size icon" />
						<span>80 sqft</span>
					</div>
					<div className="size">
						<img src="./img/bed.png" alt="Bed icon" />
						<span>2 Beds</span>
					</div>
					<div className="size">
						<img src="./img/bath.png" alt="Bath icon" />
						<span>1 Bathroom</span>
					</div>
				</div>
				<p className="title">Nearby Places</p>
				<div className="listHorizontal">
					<div className="feature">
						<img src="./img/school.png" alt="School Icon" />
						<div className="featureText">
							<span>School</span>
							<p>250m away</p>
						</div>
					</div>
					<div className="feature">
						<img src="./img/school.png" alt="School Icon" />
						<div className="featureText">
							<span>Bus stop</span>
							<p>100m away</p>
						</div>
					</div>
					<div className="feature">
						<img src="./img/school.png" alt="School Icon" />
						<div className="featureText">
							<span>Restaurant</span>
							<p>200m away</p>
						</div>
					</div>
				</div>
				<p className="title">Location</p>
				<div className="mapContainer">
					<Map items={[singlePostData]} />
				</div>
				<div className="buttons">
					<button>
						<img src="./img/chat.png" alt="Chat Icon" />
						Send a message
					</button>
					<button>
						<img src="./img/save.png" alt="Save Icon" />
						Save the Place
					</button>
				</div>
			</div>
		</div>
	</div>
  )
}

export default SinglePage