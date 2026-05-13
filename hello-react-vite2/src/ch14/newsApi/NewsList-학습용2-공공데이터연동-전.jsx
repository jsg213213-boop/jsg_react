// import axios from 'axios';
// import styled from 'styled-components';
// import NewsItem from './NewsItem';
// import usePromise from './usePromise';

// const NewsListBlock = styled.div`
//   box-sizing: border-box;
//   padding: 0 5rem;
//   margin: 0 auto;
//   margin-top: 2rem;

//   @media screen and (max-width: 768px) {
//     padding: 0 1rem;
//   }
// `;

// // YOUR_API_KEY 자리에 newsapi.org에서 발급받은 키를 입력하세요
// const apiKey = import.meta.env.VITE_News_API_KEY;

// const NewsList = ({ category = 'all' }) => {
//   // 실습4, 확인용
//   const [loading, resolved, error] = usePromise(() => {
//     const query = category === 'all' ? '' : `&category=${category}`;
//     return axios.get(
//       `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`,
//     );
//   }, [category]);

//   if (loading)
//     return (
//       <NewsListBlock>
//         <p>⏳ 뉴스를 불러오는 중...</p>
//       </NewsListBlock>
//     );
//   if (error)
//     return (
//       <NewsListBlock>
//         <p style={{ color: 'red' }}>{error}</p>
//       </NewsListBlock>
//     );
//   if (!resolved) return null;

//   const { articles } = resolved.data;

//   // ### 📝 실습 문제 4

//   // > NewsList 컴포넌트에서 articles가 빈 배열일 때 (기사가 없을 때)
//   // `"📭 표시할 뉴스가 없습니다."` 메시지를 보여주도록 처리하세요.
//   // >
//   // 실습4 , 순서1
//   if (articles.length === 0) {
//     return (
//       <NewsListBlock>
//         <p style={{ color: 'red' }}>📭 표시할 뉴스가 없습니다.</p>
//       </NewsListBlock>
//     );
//   }

//   return (
//     <NewsListBlock>
//       {articles.map((article) => (
//         <NewsItem key={article.url} article={article} />
//       ))}
//     </NewsListBlock>
//   );
// };

// export default NewsList;
