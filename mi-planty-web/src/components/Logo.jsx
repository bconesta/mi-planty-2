import React from 'react'
import Logoimg from '../img/logo_sinfondo.png'

export default function Logo(props) {
  return (
    <>
        {props.style == undefined && <img style={{height : '5vh'}} src={Logoimg} alt="" /> }
        {props.style != undefined && <img style={props.style} src={Logoimg} alt="" /> }
    </>
  )
}
