import Image from "next/image"

const Button = ({ type = "button", title, icon, variant = "" }) => {
  return (
    <button type = {type} className={`flex items-center justify-center gap-2 rounded-full border ${variant}`}>
        <label className="font-[500] whitespace-nowrap cursor-pointer">
            {title}
        </label>
        {icon && <Image src={icon} alt={title} width={16} height={16} />}
    </button>
  )
}

export default Button
