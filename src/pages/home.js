import { ChevronRightIcon } from '@heroicons/react/20/solid'

const Home = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <img
              className="h-11"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                ผลิตภัณฑ์ของเรา
              </a>
            </div>
            <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900">
              ยาสีฟันสมุนไพร<br/>สูตรเข้มข้น
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            ยาสีฟันเทพไทยผลิตจากสมุนไพรธรรมชาติ มีคุณสมบัติ ในการดูแลปัญหาสุขภาพเหงือก ฟันผุ และลดคราบหินปูน ชา กาแฟ บุหรี่ ลดกลิ่นปาก 
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ติดต่อสั่งซื้อ
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[40rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl mx-4 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <img
              className="h-11"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                ผลิตภัณฑ์ของเรา
              </a>
            </div>
            <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900">
              ยาสีฟันสมุนไพร<br/>สูตรเข้มข้น
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            ยาสีฟันเทพไทยผลิตจากสมุนไพรธรรมชาติ มีคุณสมบัติ ในการดูแลปัญหาสุขภาพเหงือก ฟันผุ และลดคราบหินปูน ชา กาแฟ บุหรี่ ลดกลิ่นปาก 
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ติดต่อสั่งซื้อ
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">

          <video width='100%' controls>
            <source src='https://www.youtube.com/watch?v=KoGyh8g32PA' type='video/mp4'/>
          </video>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">


        </div>
      </div>
    </>
  )
}

export default Home