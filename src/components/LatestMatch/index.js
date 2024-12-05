// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = details
  return (
    <div className="inner-bg-1">
      <div>
        <p> {competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="image"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="det">
        <h2>First Innings</h2>
        <p>{firstInnings}</p>
        <h2>Second Innings</h2>
        <p>{secondInnings}</p>
        <h2>Man Of The Match</h2>
        <p>{manOfTheMatch}</p>
        <h2>Umpires</h2>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
