import styled from 'styled-components'

export const BaseButton = styled.button`
  cursor: pointer;

  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-size: 14px;

  font-weight: ${({ strong }) => strong ? '700' : 'inherit'};
  color: ${({ theme }) => theme.textColor};
  background-color:  ${({ theme }) => theme.backgroundColor};

  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-radius: 4px;

  padding: 0.5rem 1rem;

  transition: background 0.5s;
`

export const Button = styled(BaseButton)`
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.backgroundColor};
  border-bottom-color: ${({ theme }) => theme.textColor};
`

export const OutlineButton = styled(Button)`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};

  border: 1px solid;
  border-bottom-width: 4px;
  border-bottom-color: ${({ theme }) => theme.textColor};

  :hover {
    color: #fff;
    background-color: #000;
    border-bottom-color: ${({ theme }) => theme.textColor};
  }
`

export const DangerButton = styled(Button)`
  border: 0;
  border-bottom: 4px solid;
  border-bottom-color: ${({ theme }) => theme.dangerBorderColor};

  background-color: ${({ theme }) => theme.dangerBackgroundColor};
  color: #FFF;
`

export const LightButton = styled(Button)`
  border: 0;
  border-bottom: 4px solid #e5e6e6;

  background-color: #FFF;
  color: #000;
`
