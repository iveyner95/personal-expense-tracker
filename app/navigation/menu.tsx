import { Title } from './title'

export const Menu = () => {
  return (
    <div className="bg-gray-200 font-sans">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-64 h-screen bg-gray-800">
          <Title />

          <nav className="mt-10">
            <div>
              <a className="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer  hover:bg-blue-500 hover:text-white focus:outline-none" href="/">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                  </svg>

                  <span className="mx-4 font-medium">Dashboard</span>
                </span>
              </a>
            </div>

            <div>
              <a className="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer  hover:bg-blue-500 hover:text-white focus:outline-none" href="/expenses">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>

                  <span className="mx-4 font-medium">Expenses</span>
                </span>
              </a>
            </div>
          </nav>

          <div className="absolute bottom-0 my-8">
            <a className="flex items-center py-2 px-8 text-gray-100 hover:text-gray-200" href="#">
              <div className="px-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>

              <span>Test User</span>
            </a>
          </div>
        </div>
      </div >
    </div >
  )
}