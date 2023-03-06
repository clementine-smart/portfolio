import Image from 'next/image'

function MightyBush() {
  return (
    <>
      <div className="relative">
        <Image
          src={'/projects/mighty-bush/mighty-bush-home.png'}
          alt="The mighty bush app home page"
          width={165}
          height={354}
          className="rounded-lg"
        />
      </div>
    </>
  )
}

export default MightyBush
