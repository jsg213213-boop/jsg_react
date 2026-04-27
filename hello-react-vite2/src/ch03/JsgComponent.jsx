import React from 'react';

const jsgComponent = ({ name, children, favoriteTVShow }) => {
    return (
        <div>
      안녕하세요. 이름은 : {name}, <br />
      좋아하는 tv프로그램은 : {favoriteTVShow} <br />
      테스트용 children 값은 : {children} <br />
        </div>
    );
};

export default jsgComponent;