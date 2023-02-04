export interface Props {
  size: {
    width: string
    height: string
  }
}

function Window({ size }: Props) {
  return (
    <div
      className={`w-${size.width} h-${size.height} bg-pink-300 rounded-xl border-t-[30px] self-center drop-shadow-xl z-0`}
    ></div>
  )
}

export default Window
