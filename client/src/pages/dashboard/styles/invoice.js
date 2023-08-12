import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  gap: 32px;
  min-height: calc(100vh - 72px);

  @media ${mediaQuery.tablet} {
    padding-top: 61px;
    gap: 55px;
    min-height: calc(100vh - 80px);
  }

  @media ${mediaQuery.desktop} {
    padding-top: 77px;
    gap: 64px;
  }
`;

export default Wrapper;
