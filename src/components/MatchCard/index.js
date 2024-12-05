// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = details
  const colorStatus = matchStatus === 'Lost' ? 'special-lost' : 'special-win'
  return (
    <li className="team-bg">
      <img
        className="image-1"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="heading-1">{competingTeam}</p>
      <p>{result}</p>
      <p className={colorStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
