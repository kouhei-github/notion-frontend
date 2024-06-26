import Image from "next/image"

export const Heroes = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
      <div className='flex items-center'>
        <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
          <Image
            src='/documents.svg'
            fill
            alt='Documents'
            className={"object-contain dark:hidden"}
          />
          <Image
            src='/documents-dark.svg'
            fill
            alt='Documents'
            className={"object-contain hidden dark:block"}
          />
        </div>
        <div className='relative w-[400px] h-[400px] hidden md:block'>
          <Image src='/reading.png' fill alt='reading' className={"object-contain dark:hidden"} />
          <Image
            src='/reading-dark.svg'
            fill
            alt='reading'
            className={"object-contain hidden dark:block"}
          />
        </div>
      </div>
    </div>
  )
}
