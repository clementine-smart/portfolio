export interface Props {
  size: {
    width: string
    height: string
  }
}

function Window({ size }: Props) {
  return (
    <div
      className={`w-${size.width} h-${size.height} rounded bg-[#DDE1EB80] self-center border-2 border-black`}
    >
      <div
        className={`w-full h-7 bg-[#E1ECF2] rounded-t border-b-2 border-black`}
      ></div>
    </div>
  )
}

export default Window
