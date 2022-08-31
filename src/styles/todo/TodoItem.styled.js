import styled from '@emotion/styled';

export const Todolist = styled.div`
  .show {
    display: flex;
    text-decoration: line-through;
    text-decoration-color: #0000ff;
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
    accent-color: #1e3269;
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
    background-color: #91d8fa;
    margin-right: 10px;
    :hover {
      background-color: #1ea4ff;
    }
  }
  .cancleBtn {
    background-color: lightcoral;
    :hover {
      background-color: orangered;
    }
  }
  .deleteBtn {
    background-color: lightcoral;
    :hover {
      background-color: orangered;
    }
  }
`;
