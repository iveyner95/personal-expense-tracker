import { DashBoard, Expenses } from './navItems'
import { Title } from './title'

export const Menu = () => {
  return (
    <div className="bg-gray-200 font-sans">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-64 h-screen bg-gray-800">
          <Title />

          <nav className="mt-10">
            <DashBoard />
            <Expenses />
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