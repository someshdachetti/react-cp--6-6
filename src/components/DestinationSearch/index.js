// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="destinationsearch">
        <h1>Destination Search</h1>
        <div className="searchIcon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>
        <input
          type="search"
          className="search"
          value={searchInput}
          onChange={this.onSearch}
        />
        <div className="images">
          {searchResults.map(each => (
            <div className="images" key={each.id}>
              <img src={each.imgUrl} alt={each.name} />
              <p>{each.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
