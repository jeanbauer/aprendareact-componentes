
import styled from 'styled-components'

const DEFAULT_HEIGHT = '330px';

export const Banner = styled.section`
  background-image: ${({ theme }) => `linear-gradient(to left, ${theme.banner.primary} 0%, ${theme.banner.secondary} 100%)`};
  height: ${DEFAULT_HEIGHT};
  border-radius: 25px;
`

export const ColoredBanner = styled(Banner)`
  background-image: ${({ colors }) => `linear-gradient(to left, ${colors[0]} 0%, ${colors[1]} 100%)`};
`

export const CustomBanner = styled(ColoredBanner)`
  height: ${({ height }) => height ? `${height}px` : DEFAULT_HEIGHT};
`

// This is a opinionated component to Aprenda React design guidelines
// If you are struggling to use to your own component you should try CustomBanner instead.
export const BannerWithData = styled(CustomBanner)`
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme }) => theme.textFont};

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  padding: 40px 20px 10px 20px;

  img {
    width: ${({ imageWidth }) => `${imageWidth[0]}px`};
  }

  p {
    font-family: ${({ theme }) => theme.textFont};
    font-size: 15px;
    font-weight: 300;
  }

  h1 {
    font-family: ${({ theme }) => theme.headingFont};
  }

  @media (min-width: 768px) {
    align-items: inherit;
    justify-content: space-between;
    flex-direction: row;

    padding: 20px 60px;
    margin: 0 60px 20px 60px;

    img {
      display: block;
      width: ${({ imageWidth }) => `${imageWidth[1]}px`};
    }

    h1 {
      font-size: 44px;
      margin-bottom: 5px;
      margin-top: 100px;
    }
  }
`