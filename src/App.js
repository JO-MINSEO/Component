import Card from './Card';
import styled from "styled-components"

const Wrapper = styled.div`
  
  box-sizing : border-box;

  width : 100%;
  height : 100vh;

  padding : 0 10%;
  
  display : flex;
  flex-direction : column;
  align-items:center;
  justify-content: center;
`;

const Title= styled.div`
  font-size: 2rem; //기본 1rem
  font-weight: 600;
  width: 100%;
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  width:100%;
`;

function App() {
  return (
    <>
    <Wrapper>
      
      <Title>나만의 PLAYLISTS</Title>
      <Subtitle>▶️ 가장 마음에 드는 가사 한 줄</Subtitle>
      <Card subject="실리카겔" discription="kyo야 사랑을 해봤니"/>
      <Card subject="잔니비" discription="초록을 거머쥔 우리는 여름으로"/>
      <Card subject="검정치마" discription="난 너랑 있는게 제일 좋아"/>
    </Wrapper>
    </>
  );
}

export default App;
