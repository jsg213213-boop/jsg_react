import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e9ecef;

  .thumbnail {
    margin-right: 1rem;
    img {
      width: 160px;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .contents {
    h2 {
      margin: 0 0 8px 0;
      font-size: 1rem;
      a {
        color: black;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      color: #666;
      font-size: 0.9rem;
      // 영역을 넘어가는 텍스트를 숨김
      overflow: hidden;
      // 여러 줄 말줄임 처리를 위한  flex 박스 형태 설정.
      display: -webkit-box;
      // 최대 3줄까지만 표시하고, 초과 텍스트는 잘래냄.
      -webkit-line-clamp: 3;
      // 박스방향을 세로로 설정해서, 줄 단위로 표시.
      -webkit-box-orient: vertical;
    }
  }
`;

const PdItemFood = ({ article }) => {
  // 실습 3, 순서1
  // NewsItem 컴포넌트를 수정하여, 날짜(publishedAt)도 표시하도록 추가하세요.
  // 날짜 형식은 YYYY-MM-DD만 표시합니다.
  const { MAIN_TITLE, ADDR1, ITEMCNTNTS, MAIN_IMG_THUMB, HOMEPAGE_URL } =
    article;

  return (
    <NewsItemBlock>
      {MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <img src={MAIN_IMG_THUMB} alt="thumbnail" />
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={HOMEPAGE_URL} target="_blank" rel="noopener noreferrer">
            {MAIN_TITLE}
          </a>
        </h2>
        <p>소개: {ITEMCNTNTS}</p>
        <p>주소 : {ADDR1}</p>
      </div>
    </NewsItemBlock>
  );
};

export default PdItemFood;
