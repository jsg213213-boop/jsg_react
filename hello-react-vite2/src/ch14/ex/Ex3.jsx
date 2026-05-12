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

const Ex3 = ({ article }) => {
  // 실습 3, 순서1
  // NewsItem 컴포넌트를 수정하여, 날짜(publishedAt)도 표시하도록 추가하세요.
  // 날짜 형식은 YYYY-MM-DD만 표시합니다.
  const { title, description, url, urlToImage, publishedAt } = article;

  // 실습 3, 순서2
  // 받아온 데이터를 , 편집 작업,
  // 년-월-일 여기까지 글자수 총 10개, 인덱스 표현 : 0 ~ 9, 그런데
  // 문자열 기능 중에서, slice 함수 사용. slice(0,10) : 실제 마지막 인덱스는 포함이 안됨.
  // 원본 데이터 모양 : 2026-05-11T04:35:00Z
  const date = publishedAt ? publishedAt.slice(0, 10) : '';

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        {/* 실습 3, 순서3
        날짜 데이터 표기  */}
        {date && <small style={{ color: '#201ddd' }}>📅{date}</small>}
      </div>
      #380303
    </NewsItemBlock>
  );
};

export default Ex3;
