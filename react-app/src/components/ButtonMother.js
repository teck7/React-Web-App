import React from 'react';
import ButtonChildren from './ButtonChildren'
import ButtonIcon from './ButtonIcon'

class ButtonMother extends React.Component {
  render() {
    return <ButtonChildren> <ButtonIcon /> React Button </ButtonChildren>
  }
}

export default ButtonMother
