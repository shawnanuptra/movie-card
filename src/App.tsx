import styled from "styled-components";

const Card = styled.div`
	padding: 3rem;
	color: black;
	background-color: white;
	border: 1px solid black;
	width: 80vw;
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
		</Card>
	);
}

export default App;
