import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    -webkit-box-shadow: 1px 5px 33px -13px rgba(115, 115, 115, 1);
    -moz-box-shadow: 1px 5px 33px -13px rgba(115, 115, 115, 1);
    box-shadow: 1px 5px 33px -13px rgba(115, 115, 115, 1);

    img {
      align-self: center;
      max-width: 250px;
      height: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: rgb(189, 17, 45);
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, 'rgb(189, 17, 45)')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const NoProducts = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;

  -webkit-box-shadow: 1px 5px 33px -13px rgba(115, 115, 115, 1);
  -moz-box-shadow: 1px 5px 33px -13px rgba(115, 115, 115, 1);
  box-shadow: 1px 5px 33px -13px rgba(115, 115, 115, 1);
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;

  span {
    color: #333;
    font-size: 24px;
  }

  img {
    width: 200px;
    height: 200px;
  }
`;
