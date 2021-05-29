import React from 'react'

export interface IImage {
  src: string
  alt: string
  ariaLabel: string
  title: string
}


function Image(props: IImage) {
  return <img src={props.src} alt={props.src} aria-label={props.ariaLabel} title={props.title} />
}

export default Image;

