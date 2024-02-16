import profile from '../assets/profile.png'
import profilebg from '../assets/profilebg.png'

const Intro = () => {
  return (
    <div className="container m-auto px-4 py-10 flex">
      <div >
        <h2 className="font-bold text-6xl pb-2">Hello, I am Sandaruwan,</h2>
        <h2 className="font-bold text-5xl gradient-text pb-5">Software Engineer.</h2>
        <p className="mt-5 text-gray-400 text-xl">
            Undergraduate Student of Sabaragamuwa Iniversity of Sri lanka and Full Stack Developer...!
        </p>

      </div>

      <div className="relative">
        <img 
            src={profile} 
            alt="profile image" 
                width="500"
                height='500'
                className="relative z-10 ml-[200px]"
            />
            <img 
            src={profilebg} 
            alt="profile image" 
            className="absolute top-0 left-12 z-0 rounded-full pt-4 ml-[130px]"
            />
      </div>
    </div>
  )
}

export default Intro
