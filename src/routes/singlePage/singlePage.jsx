import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function SinglePage() {
	const post = useLoaderData();
	const [saved, setSaved] = useState(post.isSaved);
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSave = async () => {
		if (!currentUser) {
			navigate("/login");
		}
		// AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
		setSaved((prev) => !prev);
		try {
			await apiRequest.post("/users/save", { postId: post.id });
		} catch (err) {
			console.log(err);
			setSaved((prev) => !prev);
		}
	};

	return (
		<div className="singlePage">
			<div className="details">
				<div className="wrapper">
					<Slider images={post.images} />
					<div className="info">
						<div className="top">
							<div className="post">
								<h1>{post.title}</h1>
								<div className="address">
									<img src="./img/pin.png" alt="Pin icon" />
									<span>{post.address}</span>
								</div>
								<div className="price">$ {post.price}</div>
							</div>
							<div className="user">
								<img src={post.user.avatar} alt="User image" />
								<span>{post.user.username}</span>
							</div>
						</div>
						<div
							className="bottom"
							dangerouslySetInnerHTML= {{
								__html: DOMPurify.sanitize( post.postDetail.desc ),
							}}
						></div>
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
								<span>Utilities</span>
								{post.postDetail.utilities === "owner" ? (
								  <p>Owner is responsible</p>
								) : (
								  <p>Tenant is responsible</p>
								)}
							</div>
						</div>
						<div className="feature">
							<img src="./img/pet.png" alt="Pet Icon" />
							<div className="featureText">
								<span>Pet policy</span>
								{post.postDetail.pet === "allowed" ? (
									<p>Pets Allowed</p>
								) : (
									<p>Pets not Allowed</p>
								)}
							</div>
						</div>
						<div className="feature">
							<img src="./img/fee.png" alt="Fee Icon" />
							<div className="featureText">
								<span>Income Policy</span>
								<p>{post.postDetail.income}</p>
							</div>
						</div>
					</div>
					<p className="title">Sizes</p>
					<div className="sizes">
						<div className="size">
							<img src="./img/size.png" alt="Size icon" />
							<span>{post.postDetail.size} sqft</span>
						</div>
						<div className="size">
							<img src="./img/bed.png" alt="Bed icon" />
							<span>{post.bedroom} beds</span>
						</div>
						<div className="size">
							<img src="./img/bath.png" alt="Bath icon" />
							<span>{post.bathroom} bathroom</span>
						</div>
					</div>
					<p className="title">Nearby Places</p>
					<div className="listHorizontal">
						<div className="feature">
							<img src="./img/school.png" alt="School Icon" />
							<div className="featureText">
								<span>School</span>
								<p>
								  {post.postDetail.school > 999
								    ? post.postDetail.school / 1000 + "km"
								    : post.postDetail.school + "m"}{" "}
								  away
								</p>
							</div>
						</div>
						<div className="feature">
							<img src="./img/school.png" alt="School Icon" />
							<div className="featureText">
								<span>Bus stop</span>
								<p>{post.postDetail.bus}m away</p>
							</div>
						</div>
						<div className="feature">
							<img src="./img/school.png" alt="School Icon" />
							<div className="featureText">
								<span>Restaurant</span>
								<p>{post.postDetail.restaurant}m away</p>
							</div>
						</div>
					</div>
					<p className="title">Location</p>
					<div className="mapContainer">
						<Map items={[post]} />
					</div>
					<div className="buttons">
						<button>
							<img src="./img/chat.png" alt="Chat Icon" />
							Send a message
						</button>
						<button
						onClick={handleSave}
						style={{
						backgroundColor: saved ? "#fece51" : "white",
						}}
						>
							<img src="./img/save.png" alt="Save Icon" />
							{saved ? "Place Saved" : "Save the Place"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SinglePage;
