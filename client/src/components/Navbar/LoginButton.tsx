
import { useState } from 'react'
import { Sheet } from '@tamagui/sheet'
import { SheetProps } from '@tamagui/sheet/types/types'
import { Button, H1 } from 'tamagui'

export const LoginButton = () => {

  const [ position, setPosition ] = useState(0)
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Login</Button>
    </>
  )
}