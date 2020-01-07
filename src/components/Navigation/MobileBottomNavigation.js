import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Home, Tools, SpeechBubble, Help } from '../../Icons/index';

const Wrapper = styled.div`
  z-index: 998;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #433838;


  ul{
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  

    li{
      list-style: none;
      width: 100%; height: 100%;
      display: grid; 
      text-align: center;
      align-content: flex-start;
      border-top: 1px solid #fff; 
      &:not(:nth-child(4)){ border-right: 1px solid #fff; }


      a{
        display: flex; flex-direction: column;
        line-height: 50px;
        text-decoration: none;
        color: #fff;


        svg{
          /* fill: rgba(255,255,255,.5); */
          fill: #fff;
          opacity: .65;
          flex: 1;
          width: 25px;
          height: auto;
          display: block;
          margin: 3.5px auto 0;
          transition: fill .5s ease;
        }
        svg path, svg circle{
          opacity: .65;
          /* fill: rgba(255,255,255,.5); */
        }
        &.active svg{
          opacity: 1;
          transition: opacity .5s ease;
          path, circle{
              /* fill: #fff; */
              opacity: 1;
              transition: opacity .5s ease;
            }
        }

        span{
          margin-top: -15px;
          flex: 1;
          transition: color .5s ease;
          color: rgba(255,255,255,.65);
        }
        &.active span{
          color: #fff;
          transition: color .5s ease;
        }
      }
    }

  }

`;

const MobileBottomNavigation = () => {
  return (
    <Wrapper>

      <ul>
        <li><NavLink exact to="/"> <Home /><span>Home</span></NavLink></li>
        <li><NavLink exact to="/services"> <Tools /><span>Services</span> </NavLink></li>
        <li><NavLink exact to="/contact"> <SpeechBubble /><span>Contact</span></NavLink></li>
        <li><NavLink exact to="/frequently-asked-questions"> <Help /><span>FAQ</span></NavLink></li>
      </ul>

    </Wrapper>
  )
}

export default MobileBottomNavigation