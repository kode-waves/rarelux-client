import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const PopupModel = ({ children, button, title, popupFooter, }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {button}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex justify-center">
            <DialogTitle>{title}</DialogTitle>
          </div>
        </DialogHeader>
        {children}
        <DialogFooter>
          {popupFooter}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PopupModel;
