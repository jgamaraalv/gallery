import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;

  .shot-content {
    padding: 2rem;
    background: #ffffff;
    width: 80rem;
    border-radius: 0.5rem;

    .flex {
      display: flex;
      align-items: center;
    }

    h1 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 0.2rem;
    }

    .shot-description {
      margin-bottom: 1rem;
      color: #333;
    }

    img {
      max-width: 100%;
    }

    .tags {
      list-style: none;
      padding: 0;
      display: flex;
      font-size: 1.2rem;
      margin-left: 0.5rem;

      li {
        background: #000;
        border-radius: 0.3rem;
        padding: 0.5rem 1rem;
        margin-right: 1rem;
        color: #fff;
      }
    }

    .shot-date {
      margin-left: auto;
      font-size: 1.4rem;
      color: #333;

      i {
        margin-right: 0.5rem;
      }
    }
  }
`;
