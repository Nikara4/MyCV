import styled from 'styled-components';

export const HeaderBackground = styled.header`
position: relative;
min-width: 100vw;
max-height: 60vh;
margin: 0 auto;
text-align: center;
`;

export const ArrowBack = styled.div`
  position: absolute;
  left: 1%;
  top: 2%;
  text-align: left;
  font-size: 2.5em;
  cursor: pointer;
  transition: 0.2s;
  color: rgb(162, 65, 252);
  &:hover {
    color: rgb(102, 121, 238);
  }
`;

export const ImgDiv = styled.div`
position: absolute;
left: 50%;
top: 50%;
  width: 10%;
  border: 10px solid rgba(149, 127, 112, 0.8);
  border-radius: 50%;
  margin-top: 2vh;
  transition: 0.5s;
  &:hover {
    border: 10px solid rgba(240, 237, 220, 0.8);
  }
`;


export const Profile = styled.div`
`;

export const Title = styled.h3`
text-transform: uppercase;
color: #F0EDDC;
font-size: 3em;
font-weight: 600;
margin: 20px 0 30px 0;
letter-spacing: 3px;
`;

export const Italics = styled.p`
font-size: 1.6em;
color: #F0EDDC;
margin: 0 32vw;
line-height: 30px;
font-style: italic;
`;

export const NavMenu = styled.ul`
margin-top: 30px;
padding-bottom: 25px;
& a {
  color: #F0EDDC;
  font-size: 3.5em;
  text-decoration: none;
  transition: 0.4s;
  padding: 0 10px;
  &:hover {
    color: #ACA18C;
  }
}
`;

export const NavItem = styled.li`
  color: #F0EDDC;
  font-size: 3.5em;
  text-decoration: none;
  transition: 0.4s;
  padding: 0 10px;
  &:hover {
    color: #ACA18C;
  }
`;
