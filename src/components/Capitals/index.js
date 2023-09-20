import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCountryCapitalId: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({activeCountryCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryCapitalId} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      eachItem => activeCountryCapitalId === eachItem.id,
    )
    return filteredCountry.country
  }

  render() {
    const {activeCountryCapitalId} = this.state
    const country = this.getCountry()

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select-item"
              onChange={this.onChangeOption}
              value={activeCountryCapitalId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
