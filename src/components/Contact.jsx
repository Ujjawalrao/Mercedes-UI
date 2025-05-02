import React from 'react'

function Contact() {
  return (
    <>
      <section id='Contact' className=' px-[40px] h-[130vh] w-full bg-[url("https://www.mercedes-benz.com/content/dam/brandhub/assets/vehicles/cla/pad/pictures/05-cla-pad-xl-switcher-3840x2160.jpg/_jcr_content/renditions/image-crop-default.jpeg/1744726815729.jpg?im=Resize=(1680);Crop,rect=(0,0,1680,946)")] bg-no-repeat bg-center bg-cover '>
        <div className='h-[100%] md:w-[40vw] w-[100%] relative py-8 flex flex-col justify-between ' >
            <h1 className='lg:text-[60px] text-3xl text-white font-serif font-semibold'>Explore more.</h1>
            <div className='w-[100%] cursor-pointer flex hover:bg-white hover:text-black justify-between items-center rounded-3xl bg-gray-900/25 overflow-hidden md:h-[140px] h-[80px] backdrop-blur-[10px] border-2 text-white border-gray-100 hover:border-gray-900'>
                <p className='md:text-2xl text-xl w-full font-medium flex justify-around items-center'>Contact Us<span className='text-4xl'><i class="ri-arrow-right-up-line"></i></span> </p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
