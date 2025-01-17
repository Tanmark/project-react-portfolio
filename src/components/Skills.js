import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, LargeHeadline, SmallHeadline, InnerWrapper } from 'styles/GlobalStyles';

const Skills = () => {
  return (
    <OuterWrapper backGroundcolor="#f4f4f4">
      <LargeHeadline>SKILLS</LargeHeadline>
      <ListWrapper backGroundcolor="#f4f4f4">
        <div>
          <SmallHeadline>CODE</SmallHeadline>
          <List>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>GitHub</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Mongo DB</li>
          </List>
        </div>
        <div>
          <SmallHeadline>TOOLBOX</SmallHeadline>
          <List>
            <li>Visual Studio Code</li>
            <li>Terminal</li>
            <li>Stack Overflow</li>
            <li>Figma</li>
            <li>Slack</li>
          </List>
        </div>
        <div>
          <SmallHeadline>UPCOMING</SmallHeadline>
          <List />
        </div>
      </ListWrapper>
    </OuterWrapper>
  )
}

export default Skills;

const ListWrapper = styled(InnerWrapper)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 668px) {
    justify-content: space-evenly;
  }
`

const List = styled.ul`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8rem;
    list-style-type: none;
    padding-bottom: 2.5rem;

    @media (min-width: 668px) {
      font-size: 1.1rem;
    }
`