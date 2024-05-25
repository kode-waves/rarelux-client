import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { getInitials } from "@/lib";

 const AvatarCard = (props) => {
    const {name, src, className, heightWidth} = props;
    return (
      <Avatar className = {className}>
        <AvatarImage  src={src} alt="Image" />
        <AvatarFallback heightWidth ={heightWidth}>{getInitials(name)}</AvatarFallback>
      </Avatar>
    )
  }
  
  export default AvatarCard;