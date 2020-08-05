import React from 'react';
import {  FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faMoon,  faSun} from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iconToggle: false
    }
    this.toggleIcon = this.toggleIcon.bind(this);
  }

  toggleIcon = () => {
    this.setState({
      iconToggle: !this.state.iconToggle
    });
    const div = document.getElementById('parent');
    div.classList.toggle('dark-mode');
  }

  render() {
    return (
      <button className = "app__dark-mode-btn icon level-right" >
        <FontAwesomeIcon icon = {this.state.iconToggle ? faMoon : faSun} color = {this.state.iconToggle ? '#4D5B6B' : '#FFA500'} onClick={this.toggleIcon}/>
      </button>
    );
  }
}
