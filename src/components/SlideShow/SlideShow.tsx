import React from 'react'

interface ISlideShow {
  children: React.ReactNode[]
}

function SlideShow(props: ISlideShow) {
  const childrenArr = React.Children.toArray(props.children)

  return (
    <div id='slide-show'>
      {childrenArr.map((child, index) => (
        <li
          key={index}
          data-index={index}
        >
          {child}
        </li>
      ))}
    </div>
  )
}

export default SlideShow
