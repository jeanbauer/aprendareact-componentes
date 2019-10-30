import React from 'react'
import { Button } from './button'
import { StyledButton, DangerButton, LightButton, OutlineButton } from './button.styles'

export default {
  title: 'Ações|Botões',
  component: Button,
  parameters: {
    componentSubtitle: 'Botão'
  }
}

export const Primario = () => <StyledButton>Botão primário</StyledButton>
export const Secundario = () => <LightButton strong>Botão secundário</LightButton>
export const Contornado = () => <OutlineButton strong>Botão contornado</OutlineButton>
export const Perigo = () => <DangerButton>Botão de perigo</DangerButton>