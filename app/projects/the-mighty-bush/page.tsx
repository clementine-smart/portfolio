import Image from 'next/image'

const images = ['home', 'login', 'explore', 'track']

function MightyBush() {
  return (
    <>
      <div className="flex flex-row h-full items-center justify-around">
        <Image
          src={'/projects/mighty-bush/mighty-bush-home.png'}
          alt="The mighty bush app home page"
          width={165}
          height={354}
          className="rounded-lg"
        />
        <div className="flex flex-col w-9/12 h-full justify-around">
          <div className="flex flex-row justify-around">
            {images.map((image, i) => {
              return (
                <Image
                  src={`/projects/mighty-bush/mighty-bush-${image}.png`}
                  alt="The mighty bush app home page"
                  width={165 / 1.5}
                  height={354 / 1.5}
                  className="rounded-lg"
                  key={i}
                />
              )
            })}
          </div>
          <p>
            We all love the nature and beauty of Aotearoa. One of the best
            pastimes in our country is to exploring the native flora and fauna
            via bushwalks! Our app will allow you to get the best out of
            Aucklands bush walks by saving your favourite trails, discovering
            new ones and levelling up your walking with our in-built progression
            system. We present to you, The Mighty Bush! JavaScript, React,
            SQLite, NodeJS, Restful API.
          </p>
        </div>
      </div>
    </>
  )
}

export default MightyBush
