// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details, teamName} = props

  const {name, id, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="lists">
        <img className="ima" src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
