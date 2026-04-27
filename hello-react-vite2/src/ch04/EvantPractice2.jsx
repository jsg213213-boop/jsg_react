import { Component } from 'react';

class EventPractice2 extends Component {
  state = { username: '', message: '' };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({ username: '', message: '' });
  };

  render() {
    return (
      <div>
        <h2>input 2개를 이용한 연습</h2>
        <h3>username : {this.state.username}</h3>
        <h3>message : {this.state.message}</h3>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice2;
