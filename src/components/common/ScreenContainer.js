import styled from 'styled-components/native';

const ScreenContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
}))`
  margin: 0 10px;
`;

export default ScreenContainer;
