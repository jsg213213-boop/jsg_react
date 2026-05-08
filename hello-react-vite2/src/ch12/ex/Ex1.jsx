import { produce } from 'immer';
import React from 'react';

// > 아래 객체가 있습니다. immer의 `produce`를 사용하여
// `user.address.city` 값을 `'부산'`으로 변경하는 코드를 작성하세요.
// >

const Ex1 = () => {
  const state = {
    user: {
      name: '홍길동',
      address: {
        city: '서울',
        zip: '12345',
      },
    },
    isLoggedIn: false,
  };

  const nextState = produce(state, (draft) => {
    draft.user.address.city = '부산';
  });
  console.log(
    'nextState 복제된 객체 주소 확인 : ',
    nextState.user.address.city,
  );
  console.log('state 원본 객체 주소 확인 : ', state.user.address.city);

  return (
    <div>
      <h2>콘솔로 확인 해주세요.</h2>
    </div>
  );
};

export default Ex1;
