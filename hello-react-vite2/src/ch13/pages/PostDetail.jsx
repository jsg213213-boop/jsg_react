import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  
  // 실제로는 서버에서 가져와야 하지만 실습용 더미 데이터
  const postData = {
    1: { title: '리액트 공부법', content: '공식 문서를 열심히 보세요!' },
    2: { title: '라우팅 마스터하기', content: '중첩 라우팅이 핵심입니다.' },
    3: { title: 'Outlet의 활용', content: 'Outlet은 자식 컴포넌트를 보여줍니다.' },
  };

  const post = postData[id];

  return (
    <div style={{ padding: '10px', background: '#f0f0f0' }}>
      {post ? (
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </>
      ) : (
        <p>존재하지 않는 게시글입니다.</p>
      )}
    </div>
  );
};

export default PostDetail;