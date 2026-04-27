import { Component } from 'react';

class EventPractice extends Component {
  state = { message: '' };

  // 이벤트 리스너,
  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        <h2>EventPractice 작업중</h2>
        <h3>message : {this.state.message}</h3>
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

export default EventPractice;
