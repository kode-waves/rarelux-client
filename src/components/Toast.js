"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function ToastSimple(props) {
    const { message } = props;

  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: message,
        })
      }}
    >
      Show Toast
    </Button>
  )
}
