import styled from '@emotion/styled';

const Container = styled.main`
  background: #e1f6fa;
  width: 600px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0 auto;
  margin-top: 4rem;
`;

const Title = styled.div`
  padding: 2rem;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 100;
  background: #288cff;
  color: white;
`;

const FormWrapper = styled.section`
  padding: 1rem;
  border-bottom: 3px solid #288cff;
`;

const TodoItemWrapper = styled.section`
  padding-bottom: 3px;
  min-height: 5rem;
`;

export { Container, Title, FormWrapper, TodoItemWrapper };
