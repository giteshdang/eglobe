import { DashArticleSvg } from "../../assets/svg"


const Article = (props) =>{
    return(
        <div className="h-auto items-center flex flex-col mt-8 md:mt-0 w-screen  overflow-hidden px-8 md:px-24">
        <div className="w-auto items-center flex flex-col flex-wrap">
          <div className="flex flex-col items-start justify-start space-y-2 " >
                <img src={DashArticleSvg} className="ml-2" alt="" />
                <h1 className="tahoma-bold text-5xl text-eglobe-green" >
                Article
                </h1>
            </div>
            <div className="inter-regular text-base font-normal mt-2" >Curated for your professional growth needs!</div>
          
        </div>
        <div className="grid-cols-1 w-full grid md:grid-cols-4 md:grid-rows-2 md:gap-8 gap-4 mt-8 md:mt-16">
          <div style={{
            backgroundImage: `url('https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZXxlbnwwfHwwfHw%3D&w=3000&q=80')`
          }} className="col-span-1 cursor-pointer rounded-tr-3xl rounded-bl-3xl flex flex-col p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="text-white inter-regular text-sm absolute">January 01, 2022</div>
    
            <div className="mt-32 flex flex-col" >
              <div className="inter-bold text-md text-white">
                Company Name
              </div>
              <div className="inter-regular text-sm text-white">
                Short Description about project
              </div>
            </div>
          </div>
          <div style={{
            backgroundImage: `url('https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZXxlbnwwfHwwfHw%3D&w=3000&q=80')`
          }} className="col-span-1 cursor-pointer rounded-tr-3xl rounded-bl-3xl flex flex-col p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="text-white inter-regular text-sm absolute">January 01, 2022</div>
    
            <div className="mt-32 flex flex-col">
              <div className="inter-bold text-md text-white">
                Company Name
              </div>
              <div className="inter-regular text-sm text-white">
                Short Description about project
              </div>
            </div>
          </div>
          <div style={{
            backgroundImage: `url('https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZXxlbnwwfHwwfHw%3D&w=3000&q=80')`
          }} className="col-span-1 cursor-pointer rounded-tr-3xl rounded-bl-3xl flex flex-col p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="text-white inter-regular text-sm absolute" >January 01, 2022</div>
    
            <div className="mt-32 flex flex-col">
              <div className="inter-bold text-md text-white">
                Company Name
              </div>
              <div className="inter-regular text-sm text-white">
                Short Description about project
              </div>
            </div>
          </div>
          <div style={{
            backgroundImage: `url('https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZXxlbnwwfHwwfHw%3D&w=3000&q=80')`
          }} className="col-span-1 cursor-pointer rounded-tr-3xl rounded-bl-3xl flex flex-col p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <div className="text-white inter-regular text-sm absolute">January 01, 2022</div>
    
            <div className="mt-32 flex flex-col">
              <div className="inter-bold text-md text-white">
                Company Name
              </div>
              <div className="inter-regular text-sm text-white">
                Short Description about project
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
}

export default Article