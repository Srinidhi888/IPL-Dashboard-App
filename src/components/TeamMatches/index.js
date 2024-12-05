// Write your code here
import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.onGetInfo()
  }

  onGetInfo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const recentMatches = data.recent_matches.map(recentMatch => ({
      umpires: recentMatch.umpires,
      result: recentMatch.result,
      manOfTheMatch: recentMatch.man_of_the_match,
      id: recentMatch.id,
      date: recentMatch.date,
      venue: recentMatch.venue,
      competingTeam: recentMatch.competing_team,
      competingTeamLogo: recentMatch.competing_team_logo,
      firstInnings: recentMatch.first_innings,
      secondInnings: recentMatch.second_innings,
      matchStatus: recentMatch.match_status,
    }))

    this.setState({
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading: false,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {teamBannerUrl, latestMatchDetails, recentMatches, isLoading} =
      this.state

    const matter = (
      <>
        <div className={`total ${this.getRouteClassName()}`}>
          <img src={teamBannerUrl} alt="team banner" />
          <h1>Latest Matches</h1>
          <LatestMatch details={latestMatchDetails} />
          <ul className="team-grp">
            {recentMatches.map(each => (
              <MatchCard details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </>
    )
    return (
      <div>
        {isLoading === true ? (
          <div
            data-testid="loader"
            className={`load-bg ${this.getRouteClassName()}`}
          >
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          matter
        )}
      </div>
    )
  }
}

export default TeamMatches
