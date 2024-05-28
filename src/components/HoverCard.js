import Link from 'next/link'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const NextHoverCard = (props) => {
    const { children, button, hoverBodyclassName} = props
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {button}
      </HoverCardTrigger>
      <HoverCardContent className={hoverBodyclassName}>
        {children}
      </HoverCardContent>
    </HoverCard>
  )
}

export default NextHoverCard