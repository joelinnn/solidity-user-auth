
import { useState } from 'react'
import { Sheet } from '@tamagui/sheet'
import { Button, H1 } from 'tamagui'

export const LoginButton = () => {

  const [ position, setPosition ] = useState(0)
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Login</Button>

      <Sheet forceRemoveScrollEnabled={open} modal open={open} onOpenChange={setOpen} snapPoints={[90]} dismissOnSnapToBottom>
        <Sheet.Overlay/>
        <Sheet.Handle/>
        <Sheet.Frame f={1} p="$4" jc="center" ai="center" space="$5">
          <H1 size="$10">Login</H1>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}