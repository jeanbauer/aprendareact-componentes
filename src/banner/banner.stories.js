import React from 'react'

import {
  Banner,
  ColoredBanner,
  CustomBanner,
  BannerWithData,
} from './banner.styles'

export default {
  title: 'Fundo|Banner',
  component: Banner,
  parameters: {
    componentSubtitle: 'Banner'
  }
}

export const Temificado = () => (
  <Banner />
)

export const Colorido = () => (
  <ColoredBanner colors={['#c9f5fd', '#c9f5fd']} />
)

export const Customizado = () => (
  <CustomBanner height={220} colors={['#e8e8e8', '#f3f3f3']} />
)

export const CustomizadoComDados = () => (
  <BannerWithData
    height={220}
    colors={['#e8e8e8', '#f3f3f3']}
    imageWidth={[130, 330]}
  >
    <div>
      <h1>Olá, pessoa</h1>
      <p>
        Esse é seu banner, aqui você pode adicionar informações sobre sua página
      </p>
    </div>
    <div>
      <img src={'https://www.aprendareact.com.br/static/laurel.svg'} alt='imagem de láureas' />
    </div>
  </BannerWithData>
)