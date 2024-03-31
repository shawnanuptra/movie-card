import styled from "styled-components";
import Poster from "./assets/poster.jpg";
const Card = styled.div`
	padding: 3rem;
	color: black;
	background-color: white;
	width: 80vw;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
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
		aspect-ratio: 4/3;
		grid-column: 1/2;
		grid-row: 1/4;
		width: 100%;
		height: auto;
		object-fit: cover;

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
		</Card>
	);
}

export default App;
