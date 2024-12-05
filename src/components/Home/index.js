// Write your code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.onGetList()
  }

  onGetList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedList = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    const matter = (
      <ul className="title ulist">
        {teamsList.map(each => (
          <TeamCard key={each.id} details={each} />
        ))}
      </ul>
    )
    return (
      <div className="total-bg">
        <div className="title">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>

        {isLoading === true ? (
          <div data-testid="loader" className="load-bg">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          matter
        )}
      </div>
    )
  }
}
export default Home
