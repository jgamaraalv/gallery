import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  list-style: none;
`;

export const Shot = styled.li`
  background: #ffffff;
  margin: 1rem;
  width: calc(25% - 2rem);
  position: relative;

  a {
    display: block;
    padding: 2.2rem;
  }

  .shot-title {
    position: absolute;
    font-weight: 600;
    font-size: 1.3rem;
    color: #333;
    margin: 0 0 2px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    transition: height 0.2s ease;
    transform: translate3d(0, 0, 0);
    will-change: transition;
    height: 0;
    left: 0;
    bottom: 0;
    padding: 2rem 2rem 0 2rem;
    width: 100%;
    background: #ffffff;
  }

  &:hover {
    .shot-title {
      height: 5rem;
    }
  }
`;
