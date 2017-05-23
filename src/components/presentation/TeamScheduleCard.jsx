import React, { Component } from 'react';

class TeamScheduleCard extends Component {
	render() {
		const teamSchedule = this.props.fullSchedule;

		return (
			<div>
				{teamSchedule.map((object, i) => {
					return (
						<div key={i}>{object.awayTeam.team} @ {object.homeTeam.team}</div>
						)
				})}

			</div>
		)
	}
}

export default TeamScheduleCard;