import React from 'react'
const Slide = () => {
return(
    <section
      className="bg-blue-50 min-h-screen flex justify-center items-center py-20"
    >
      <div className="container mx-auto px-4">
        <div>
          <h5 className="text-blue-600 text-center font-bold">Our Team</h5>
          <h1 className="text-4xl mt-2 text-center font-bold">Our Awesome Team</h1>
          <p className="mt-4 text-center mx-auto lg:w-1/3 md:w-1/2">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
          <div className="mt-24 flex gap-4 flex-wrap justify-center items-center">
            <div className="relative overflow-hidden w-[270px] h-[330px] bg-slate-400 rounded-2xl">
                
                <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="https://media.istockphoto.com/id/1342029049/photo/head-shot-of-beautiful-woman-student-teacher-or-blogger.jpg?s=612x612&w=0&k=20&c=NwyPh-KlEYBxJFCuFnzSiv1-pgGOCDxqctzIF7ZHig0=" alt="member"/>
                <div class=" bg-transparent overflow-hidden p-4 bg-white absolute left-4 bottom-4 right-4 rounded-lg">
                    <p className="font-bold text-center">Zara</p>
                    <p className="text-gray-500 text-center">Web Developer</p>
                    <img className="absolute -left-10 -bottom-10" src="/img/circle.svg" alt=""/>
                    <img className="absolute -right-2 -top-4 w-9" src="/img/grid.svg" alt=""/>

                </div>
            </div>
            <div className="relative overflow-hidden w-[270px] h-[330px] bg-slate-400 rounded-2xl">
                
                <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="https://media.istockphoto.com/id/1342027604/photo/arab-male-english-teacher-explaining-rules-near-blackboard-standing-with-clipboard-smiling-at.jpg?s=612x612&w=0&k=20&c=uH6EdaZKnvOK3nxXeinoDqUbDKmS07TsUmJFRTXym9g=" alt="member"/>
                <div className=" bg-transparent overflow-hidden p-4 bg-white absolute left-4 bottom-4 right-4 rounded-lg">
                    <p className="font-bold text-center">Ahmed</p>
                    <p className="text-gray-500 text-center">Web Developer</p>
                    <img className="absolute -left-10 -bottom-10" src="/img/circle.svg" alt=""/>
                    <img className="absolute -right-2 -top-4 w-9" src="/img/grid.svg" alt=""/>

                </div>
            </div>
            <div className="relative overflow-hidden w-[270px] h-[330px] bg-slate-400 rounded-2xl">
                
                <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="https://media.istockphoto.com/id/1124593620/photo/girl-in-muslim-clothes-calmly-looking-into-the-camera.jpg?s=612x612&w=0&k=20&c=ZSx1FvF0_oTI8ErkkpZamc-sGhxR_4-K0-_jv6Al3IU=" alt="member"/>
                <div className=" bg-transparent overflow-hidden p-4 bg-white absolute left-4 bottom-4 right-4 rounded-lg">
                    <p className="font-bold text-center">Zahur</p>
                    <p className="text-gray-500 text-center">Web Developer</p>
                    <img className="absolute -left-10 -bottom-10" src="/img/circle.svg" alt=""/>
                    <img className="absolute -right-2 -top-4 w-9" src="/img/grid.svg" alt=""/>

                </div>
            </div>
            <div className="relative overflow-hidden w-[270px] h-[330px] bg-slate-400 rounded-2xl">
                
                <img className="absolute top-0 left-0 w-full h-full object-cover object-center" src="https://media.istockphoto.com/id/1389465862/photo/shot-of-a-young-businessman-working-on-his-laptop-at-his-desk.jpg?s=612x612&w=0&k=20&c=YZEk5hp1E8cv8y-xXLumH4H5zIVyyf4UdETZvsuH8Vk=" alt="member"/>
                <div className=" bg-transparent overflow-hidden p-4 bg-white absolute left-4 bottom-4 right-4 rounded-lg">
                    <p className="font-bold text-center">Mohamed</p>
                    <p className="text-gray-500 text-center">Web Developer</p>
                    <img className="absolute -left-10 -bottom-10" src="/img/circle.svg" alt=""/>
                    <img className="absolute -right-2 -top-4 w-9" src="/img/grid.svg" alt=""/>

                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    
    )
    
    } 
  
    
    export default Slide