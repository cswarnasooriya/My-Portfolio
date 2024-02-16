

const Navbar = () => {
  return (
    <header>
        <div className="container m-auto px-4 py-6">
            <div className="flex justify-between items-center" >
                <div>
                    <h1 className="font-bold  text-purple-300 text-2xl">Sandaruwan Warnasooriya</h1>
                </div>

                <div>
                    <ul className="flex gap-5">
                        <li>
                            <a href="" className="text-gray-400 hover:text-white cursor-pointer">Projects</a>
                        </li>
                        <li>
                            <a href="" className="text-gray-400 hover:text-white cursor-pointer">Technologies</a>
                        </li>
                        <li>
                            <a href="" className="text-gray-400 hover:text-white cursor-pointer">About Me</a>
                        </li>
                        <li>
                            <a href="" className="text-gray-400 hover:text-white cursor-pointer">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      
    </header>
  )
}

export default Navbar
