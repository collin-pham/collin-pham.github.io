import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import { FlipCard } from '../../components';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: 0
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		const turn = ((document.documentElement.scrollTop || document.scrollingElement.scrollTop) / document.documentElement.clientHeight) * .5;
		this.setState({
			turn: turn > 0.5 ? 0.5 : turn
		});
	}
	render() {
		return (
			<div className="Home">
				<div className="Home-position">
					<div className="FlipCard-wrapper">
						<div className="FlipCard-container">
							<FlipCard turnY={this.state.turn} turnZ={this.state.turn}>
								<div className="FlipCard-front">
									Collin Pham
								</div>
							</FlipCard>

							<FlipCard turnY={this.state.turn + .5} turnZ={-(this.state.turn + .5)}>
								<div className="FlipCard-back">
									<div className="FlipCard-header">
										<div className="FlipCard-title">
											<b>
												<a href="https://medium.com/@collinpham" target="_blank" rel="noopener noreferrer">
													Collin Pham
												</a>
											</b>
										</div>
										<div className="FlipCard-location">
											San Francisco, CA
										</div>
									</div>
									<div className="FlipCard-body">
										<div className='FlipCard-section'>
											<span className="FlipCard-item">
												<Link to='/art'>
												<span role='img' aria-label='art'>&#x1f3a8;</span> art
												</Link>
											</span>
											<span className="FlipCard-item">
												<a href="https://medium.com/@collinpham" target="_blank" rel="noopener noreferrer">
												<span role='img' aria-label='writings'>&#x270d;</span> writings
												</a>
											</span>
											<span className="FlipCard-item">
												<a href="https://twitter.com/collinjpham" target="_blank" rel="noopener noreferrer">
													<span role='img' aria-label='follow me'>&#x1f30e;</span> follow me
												</a>
											</span>
											<span className="FlipCard-item">
												<a href="mailto:me@collinpham.com" rel="noopener noreferrer">
													<span role='img' aria-label='contact me'>&#x1F48C;</span> contact me
												</a>
											</span>
										</div>
										<div className='FlipCard-section'>
											<span className="FlipCard-item">
												<a href="https://mistro.io" target="_blank" rel="noopener noreferrer">
													mistro
												</a>
											</span>
										</div>
									</div>
								</div>
							</FlipCard>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

