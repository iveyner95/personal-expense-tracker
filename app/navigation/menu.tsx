import { DashBoard, Expenses } from './navItems'
import { Profile } from './profile'
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
            <Profile />
          </div>
        </div>
      </div >
    </div >
  )
}