import EventPractice from './EvantPractice';
import EventPractice2 from './EvantPractice2';
import EventPractice3 from './EvantPractice3';
import JoinForm from './JoinForm';
import LoginForm from './LoginForm';
import ValidationSample from '../ch05/ValidationSample';
const App = () => {
    return (
        <div>
            <h1>ch04 연습용</h1>
            <EventPractice>이벤트 작엄 중</EventPractice>
            <h2>ch04 App</h2>
            <EventPractice2>이벤트 작엄 중</EventPractice2>
            <h3>ch04 App</h3>
            <EventPractice3>이벤트 작업 중</EventPractice3>
            <h3>회원가입</h3>
            <JoinForm>회원가입 폼</JoinForm>
            <h3>로그인</h3>
            <LoginForm>로그인 폼</LoginForm>
            <h3>ValidationSample</h3>
                <ValidationSample>연습용</ValidationSample>
        </div>
    );
};

export default App;