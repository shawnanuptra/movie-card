import styled from "styled-components";
import Poster from "./assets/poster.jpg";
const Card = styled.div`
	padding: 3rem;
	color: black;
	background-color: white;
	width: 80vw;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

	max-width: 1200px;
`;

const CardHead = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	align-items: center;
	width: 100%;
	.title {
		grid-column: 1;
		grid-row: 1;
		h2 {
			font-weight: 600;
			margin: 0;
		}
	}

	.rating {
		grid-column: 2;
		grid-row: 1;
		color: grey;
		word-spacing: 10%;
		justify-self: end;

		#rating-score {
			color: #1e3ffff8;
			font-weight: 800;
		}
	}

	.genre {
		grid-column: 1;
		grid-row: 2;
		color: #4e68fff8;
	}
`;

const CardBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 100%;
	max-width: 100vw;
	gap: 2rem;
	margin-top: 2rem;

	h3 {
		margin-top: 0;
		margin-bottom: 0;
	}

	ol {
		font-size: 0.9rem;
		list-style-type: none;
		padding-left: 0;
		margin: 0.4rem 0;
		color: blue;
	}

	.poster {
		display: flex;
		grid-column: 1/2;
		grid-row: 1/4;
		height: 100%;
		object-fit: contain;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
			height: auto;
		}
	}

	.about {
		grid-column: 2/5;
		grid-row: 1;
	}

	.actors {
		grid-column: 2;
		grid-row: 2/4;
		width: max-content;
		height: min-content;
	}

	.director_screenwriters {
		display: flex;
		flex-direction: column;
		grid-column: 3;
		grid-row: 2/4;
		width: max-content;
		gap: 1rem;
	}
	.producers {
		grid-column: 4;
		grid-row: 2/4;
		width: max-content;
	}

	@media (max-width: 900px) {
		margin-bottom: 2rem;
		grid-template-columns: 1fr;
		.poster,
		.about,
		.actors,
		.director_screenwriters,
		.producers {
			grid-column: 1;
		}

		.poster {
			grid-row: 1;
			width: 100%;
			height: auto;
			img {
				height: auto;
				width: 100%;
			}
		}
		.about {
			grid-row: 2;
		}
		.actors {
			grid-row: 3;
		}
		.director_screenwriters {
			grid-row: 4;
		}
		.producers {
			grid-row: 5;
		}
	}
`;

const CardFooter = styled.div`
	width: 100%;
	max-width: 100vw;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr auto;
	gap: 2rem;
	margin-top: 2rem;
	align-items: center;
	.price_buy {
		grid-column: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 700;

		.buy {
			padding: 0.1rem 1.5rem;
			border-radius: 999px;
			border: 2px solid black;
			transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);
			&:hover {
				color: white;
				background-color: black;
				cursor: pointer;
			}
		}
	}

	.watch_trailer {
		grid-column: 4;
		justify-self: end;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		background-color: black;
		border-radius: 999px;
		color: white;
		padding-left: 15px;
		padding: 0.1rem 0 0.1rem 15px;

		gap: 0.5rem;

		svg {
			background-color: white;
			border-radius: 999px;
			border: 1px solid black;
		}
	}

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-row: auto;
		gap: 1rem;
		.price_buy {
			order: 2;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			grid-column: 1;
		}
		.watch_trailer {
			order: 1;
			grid-column: 1;
			display: flex;
			justify-content: center;
			justify-self: center;
		}
	}
`;
function App() {
	return (
		<Card>
			<CardHead>
				<div className='title'>
					<h2>Star Wars: The Last Jedi</h2>
				</div>
				<div className='genre'>
					<span>Action & Adventure</span>
				</div>
				<div className='rating'>
					<span id='rating-score'>7.4</span> / 10
				</div>
			</CardHead>
			<CardBody>
				<div className='poster'>
					<img src={Poster} alt='Star Wars: The Last Jedi poster' />
				</div>
				<div className='about'>
					<h3>About the Movie</h3>
					<div className='about_content'>
						<p>
							In Lucasfilm's Star Wars: The Last Jedi, the Skywalker saga
							continues as the heroes of The Force Awakens join the galactic
							legends in an epic adventure that unlocks new mysteries of the
							Force and shocking revelations of the past.
						</p>
					</div>
				</div>
				<div className='actors'>
					<h3>Actors</h3>
					<div className='actors_content'>
						<ol className='actors_content_list'>
							<li>Oscar Isasac</li>
							<li>Mark Hamill</li>
							<li>Daisy Ridley</li>
							<li>John Boyega</li>
							<li>Kelly Marie Tran</li>
						</ol>

						<a href='#'>More</a>
					</div>
				</div>
				<div className='director_screenwriters'>
					<div className='director'>
						<h3>Director</h3>
						<div className='director_content'>
							<ol className='director_content_list'>
								<li>Rian Johnson</li>
							</ol>
						</div>
					</div>
					<div className='screenwriters'>
						<h3>Screenwriters</h3>
						<div className='screenwriters_content'>
							<ol className='screenwriters_content_list'>
								<li>Rian Johnson</li>
							</ol>
						</div>
					</div>
				</div>
				<div className='producers'>
					<h3>Producers</h3>
					<div className='producers_content'>
						<ol className='producers_content_list'>
							<li>Kathleen Kennedy</li>
							<li>Ram Bergman</li>
						</ol>
					</div>
				</div>
			</CardBody>
			<CardFooter>
				<div className='price_buy'>
					<span className='price'>$19.00</span>
					<span className='buy'>BUY</span>
				</div>
				<div className='watch_trailer'>
					WATCH TRAILER{" "}
					<svg
						width='30'
						height='30'
						viewBox='0 0 200 200'
						fill='white'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M159 99.5L71.25 150.162L71.25 48.8375L159 99.5Z'
							fill='black'
						/>
					</svg>
				</div>
			</CardFooter>
		</Card>
	);
}

export default App;
