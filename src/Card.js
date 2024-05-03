import styled from "styled-components"

const Wrapper = styled.div`

    margin: 10px 0;
    padding : 10px;

    width:100%;
    height:100px;

    border:5px solid yellowgreen;
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;

const Subject = styled.div`
    font-size: 1.5rem;
`;


const Card = ({subject, discription}) => {
    return(
        <Wrapper>
            <Subject>{subject}</Subject>
            <div>❤️{discription}</div>
        </Wrapper>
        
    );
};

export default Card;