import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0 50px 0;
  padding: 0 50px;
  background-color: #fff;

  -webkit-box-shadow: 1px 9px 10px -8px rgba(173, 166, 173, 1);
  -moz-box-shadow: 1px 9px 10px -8px rgba(173, 166, 173, 1);
  box-shadow: 1px 9px 10px -8px rgba(173, 166, 173, 1);
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #555;
    }

    span {
      font-size: 12px;
      color: #666;
    }
  }
`;
