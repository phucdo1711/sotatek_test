import React from 'react';
import styled from "styled-components";
import TodoList from 'containers/TodoList';

function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1172px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 16px;
`

export default App;
