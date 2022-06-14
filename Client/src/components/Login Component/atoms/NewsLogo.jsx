import React from 'react'

function NewsLogo({svgClass}) {
  return (
    <svg className={svgClass} width="48px" height="48px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FF5722" d="M32,15v28H10c-2.2,0-4-1.8-4-4V15H32z"/>
    <path fill="#FFCCBC" d="M14,5v34c0,2.2-1.8,4-4,4h29c2.2,0,4-1.8,4-4V5H14z"/>
    <g fill="#FF5722">
        <rect x="20" y="10" width="18" height="4"/>
        <rect x="20" y="17" width="8" height="2"/>
        <rect x="30" y="17" width="8" height="2"/>
        <rect x="20" y="21" width="8" height="2"/>
        <rect x="30" y="21" width="8" height="2"/>
        <rect x="20" y="25" width="8" height="2"/>
        <rect x="30" y="25" width="8" height="2"/>
        <rect x="20" y="29" width="8" height="2"/>
        <rect x="30" y="29" width="8" height="2"/>
        <rect x="20" y="33" width="8" height="2"/>
        <rect x="30" y="33" width="8" height="2"/>
        <rect x="20" y="37" width="8" height="2"/>
        <rect x="30" y="37" width="8" height="2"/>
    </g>
</svg>
  )
}

export default NewsLogo