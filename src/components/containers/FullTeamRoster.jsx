import React, { Component } from 'react';
import { PlayerCard } from '../presentation';

class FullTeamRoster extends Component {

	render() {
		const allPlayers = this.props.fullTeam.map((player, i) => {
			let playerName = {
				lastName: player.lastName,
				firstName: player.firstName
			};
			let playerBio = {
				birthDate: player.birthDate,
		        college: player.college,
		        height: player.height,
		        profileUrl: player.profileUrl,
		        team: player.team,
		        position: player.position,
		        uniformNum: player.uniformNumber
			}
			return (
				<PlayerCard key={i} playerName={playerName} playerBio={playerBio} />
			)
		});
		return (
			<div className='d-flex flex-row flex-wrap align-item-center justify-content-center align-content-start'>
				{allPlayers}
			</div>

			)
	}

}

export default FullTeamRoster