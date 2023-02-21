
import { Web3Button } from "@thirdweb-dev/react"
import { ActionIcon } from "@mantine/core"
import { IconSettings } from "@tabler/icons"
import { useRouter } from "next/router"
export const LoginButton = () => {

  const router = useRouter()

  const onClickHandler = () => {
    router.push('/LoginPage')
  }

  return (
    <>
      <ActionIcon onClick={onClickHandler} >
        <IconSettings/>
      </ActionIcon>
    </>
  )
}