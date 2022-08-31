import styled from '@emotion/styled';

export const Todolist = styled.div`
  .show {
    display: flex;
    text-decoration: line-through;
    text-decoration-color: indianred;
  }
  ul {
    display: flex;
    justify-content: center;
    margin: 10px 0px 10px 0px;
    padding: 0;
    list-style: none;
  }
  .checkbox {
    vertical-align: middle;
    accent-color: indianred;
  }
  .text {
    width: 400px;
  }
  .txtInput {
    width: 350px;
    height: 22px;
    font-size: 18px;
  }
  .listTxt {
    font-size: 18px;
    text-align: left;
    margin: 0px;
  }
  .viewBtn,
  .cancleBtn,
  .deleteBtn {
    border: none;
    border-radius: 5px;
    width: 50px;
    height: 30px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
  .viewBtn {
    background-color: lightcoral;
    margin-right: 10px;
    :hover {
      background-color: pink;
    }
  }
  .cancleBtn {
    background-color: orangered;
    :hover {
      background-color: lightcoral;
    }
  }
  .deleteBtn {
    background-color: tomato;
    :hover {
      background-color: salmon;
    }
  }
`;
