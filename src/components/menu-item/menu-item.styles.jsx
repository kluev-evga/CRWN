import styled from 'styled-components';


export const MenuItemContainer = styled.div`
  min-width: 30%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;
  height: ${props => props.size ? '380px' : '240px'};

  &:hover {
    >div:first-of-type {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    >div:last-of-type {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 640px) {
    min-width: 50%;
    height: 200px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.url});
`;

export const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;