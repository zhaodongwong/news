import { BrowserRouter, Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import './index.css'
import { Icon } from '@iconify/react';

function Navbar(){
  const location = useLocation();
  return(
    <nav className='flex items-center flex flex-col w-full bg-stone-400 px-8 py-6 text-5xl'>
      <div>
        <Link to="/">
      <div className="flex flex-row p-2">
      <Icon icon="wpf:news" color="white" />
        <h2 className="text-white pl-2">NEWS</h2>
        </div>
        </Link>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div>
          <ul className='flex gap-36 text-base text-4xl w-full mt-3 text-white'>
        {[
          ["/","Home"],
          ["about","About"],
          ["contact","Contact"],
        ].map(([path,label]) => (
          <li className="w-24 text-center ">
            <Link to={path} className="relative">
              {label}
              {path === location.pathname}
            </Link>
          </li>
        ))}
      </ul>
        </div>
      <div>
        <button>
        <Icon icon="bx:search-alt-2" color="white" />
        </button>
      </div>
      </div>
    </nav>
  )
}

function Home(){
   return(
<div className='flex flex-col w-full'>
  <div>
    <Link to="putin">
      <div className='flex flex-row border-y-2 border-stone-400 mt-3 justify-between pl-5 '>
        <img src="https://e3.365dm.com/22/03/2048x1152/skynews-ukraine-russia-teaser_5706280.jpg" className='putin'/>
        <h5 className='pr-5 text-stone-400'>
        Ukraine war: What are the chances of a peace deal with Russia to end the conflict?
        </h5>
      </div>
      </Link>
      </div>
      <div className='relative flex flex-row justify-between pl-10 pr-5 gap-12'>
        <Link to="benzema">
        <img src='https://library.sportingnews.com/2022-04/Karim%20Benzema%20Real%20Madrid%20vs.%20Chelsea%20040622.jpg' className='benzema mt-3'/>
        </Link>
        <Link to="mlssg">
        <img src="https://static.businesstimes.com.sg/s3fs-public/image/2022/03/08/causeway-sph_0.jpg" className='mls-sg '/>
        </Link>
      </div>
      <div className='relative flex flex-row justify-between pl-10 gap-12'>
        <Link to="benzema">
      <h9 className="text-stone-400">
        Champions League hat tricks in quarterfinals: Karim Benzema joins elite list of scorers after three goals vs. Chelsea
        </h9>
        </Link>
        <h10 className="text-stone-400">
        Johor MB lauds Malaysia-Singapore border reopening, says state will benefit from it
        </h10>
      </div>
      <div className='line'>
      </div>
      <div>
        <Link to="manliv">
      <div className='mt-3 flex flex-row justify-between pl-10'>
        <img src="https://supersport-cms-prod.azureedge.net/media/341jhdiq/man-city_vs_liverpool_1050x580.png?width=900" className='manliv'/>
        <h11 className="mt-20 text-stone-400">
          Manchester City vs Liverpool:All things you should know
        </h11>
      </div>
      </Link>
      </div>
      <div className='line'>

      </div>
      <div className='relative flex flex-row justify-between pl-10 pr-5 gap-12'>
        <Link to="covid">
        <img src='https://apicms.thestar.com.my/uploads/images/2022/04/07/1542199.png' className='benzema mt-3'/>
        </Link>
        <Link to="airasia">
        <img src="https://images.squarespace-cdn.com/content/v1/5a5dbe4632601eb31977f947/1632394018914-P5455VRGX8QURK0AF30U/AF20200429_First+flight+resume+-165.jpg" className='mls-sg '/>
        </Link>
      </div>
      <div className='relative flex flex-row justify-between gap-12'>
      <h13 className="pl-10 text-stone-400">
      Covid-19 Watch: 12,105 new cases, says Health Ministry
        </h13>
        <h10 className="text-stone-400">
        AirAsia's free seats promo available for booking from April 9-17
        </h10>
      </div>
      <div className="line">
      </div>
      <div className="flex items-center flex flex-col w-full bg-stone-400 px-8 py-6 text-5xl mt-3">
      <div className="flex flex-row p-2">
      <Icon icon="wpf:news" color="white" />
        <h2 className="text-white pl-2">NEWS</h2>
        </div>
      </div>
      <div className="flex flex-row justify-between px-20 text-white width-full bg-stone-400">
      <div className="pl-16 pt-16 font-['Playfair_Display']">
        <h1>
          News:
        </h1>
        <div className="font-['Pavanam'] text-lg flex flex-col mt-2">
          <h16>
            CORONAVIRUS
          </h16>
          <h16>
            BUSINESS
          </h16>
          <h16>
            TECH
          </h16>
          <h16>
            SCIENCE
          </h16>
          <h16>
            SPORTS
          </h16>
          <h16>
            WINTER OLYMPICS
          </h16>
          <h16>
            TRENDING
          </h16>
        </div>
      </div>
      <div>
      <div className="pl-16 pt-16 font-['Playfair_Display']">
        <h1>
          Arts:
        </h1>
        <div className="font-['Pavanam'] text-lg flex flex-col mt-2">
          <h16>
            TODAY'S ART
          </h16>
          <h16>
            DESIGN
          </h16>
          <h16>
            BOOK
          </h16>
          <h16>
            BEST SELLER BOOK LIST
          </h16>
          <h16>
            DANCE
          </h16>
          <h16>
            MOVIES
          </h16>
          <h16>
            MUSIC
          </h16>
          <h16>
            TELEVISION
          </h16>
          <h16>
            THEATER
          </h16>
        </div>
      </div>
      </div>
      <div>
      <div className="pl-16 pt-16 font-['Playfair_Display']">
        <h1>
          Living:
        </h1>
        <div className="font-['Pavanam'] text-lg flex flex-col mt-2">
          <h16>
            GAMES
          </h16>
          <h16>
            EDUCATION
          </h16>
          <h16>
            FOOD
          </h16>
          <h16>
            HEALTH
          </h16>
          <h16>
            JOBS
          </h16>
          <h16>
            LOVE
          </h16>
          <h16>
            MAGAZINE
          </h16>
          <h16>
            PARENTING
          </h16>
          <h16>
            STYLE
          </h16>
          <h16>
            TRAVEL
          </h16>
        </div>
      </div>
      </div>
      <div className="pl-16 pt-16 font-['Playfair_Display']">
        <h1>
          Opinions:
        </h1>
        <div className="font-['Pavanam'] text-lg flex flex-col mt-2">
          <h16>
            EDITORAILS
          </h16>
          <h16>
            TODAY'S OPINION
          </h16>
          <h16>
            GUEST ESSAYS
          </h16>
          <h16>
            LETTERS
          </h16>
          <h16>
            SUNDAY REVIEW
          </h16>
          <h16>
            OPINION VIDEO
          </h16>
        </div>
      </div>
      </div>
    </div>
  )
}
   


function Layout(){
  return<>
    <Navbar/>
    <Outlet/>
    </>
}


function About(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   NOTHING HERE SORRY
  </h1>
  </div>
  )
}

function Contact(){
  return(
  <div className='text-3xl flex flex-col w-full'>      
   <div className="line mt-3"></div>
   <div className="flex flex-row">
     <img src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-boy-playing-computer-image_1194480.jpg" className="abcdefg"/>
     <div className="flex flex-col mt-10">
       <h20 className="text-5xl font-['Anton'] text-stone-400">HOW CAN WE HELP YOU?</h20>
       <div className="flex flex-row mt-20">
       <Icon icon="akar-icons:location" color="#a8a298" width="48" height="48"/>
       <h21 className="mt-1 text-stone-400">LOCATION</h21>
       </div>
       <h22>sdadadasdasdsdsadsadasdasdasdasd</h22>
       <div className="flex flex-row mt-20">
       <Icon icon="carbon:phone-filled" color="#a8a298" width="48" height="48"/>
       <h21 className="mt-1 text-stone-400">PHONE</h21>
       </div>
       <h22>123456789000</h22>
       <div className="flex flex-row mt-20">
       <Icon icon="ic:round-email" color="#a8a298" width="48" height="48"/>
       <h21 className="mt-1 text-stone-400">EMAIL</h21>
       </div>
       <h22>hsajdasjkdagdubwb@email.com</h22>
     </div>
     </div>
     <div className="flex-1 flex items-center justify-center flex flex-row justify-around">
     <Icon icon="akar-icons:instagram-fill" color="#a8a298" />
     <Icon icon="akar-icons:facebook-fill" color="#a8a298" />
     <Icon icon="akar-icons:twitter-fill" color="#a8a298" />
     <Icon icon="eva:email-outline" color="#a8a298" />
     <Icon icon="carbon:phone-filled" color="#a8a298" />
     <Icon icon="bi:messenger" color="#a8a298" />
     </div>
  </div>
  )
}

function Putin(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   putinjfkfjafshfjkfhsdhfkjejkehe
  </h1>
  </div>
  )
}

function Benzema(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   benzemamammamaama
  </h1>
  </div>
  )
}

function Mlssg(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   mlssssssg
  </h1>
  </div>
  )
}

function Manliv(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   man vs liv
  </h1>
  </div>
  )
}

function Covid(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   covid
  </h1>
  </div>
  )
}

function Airasia(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   covid
  </h1>
  </div>
  )
}


function App(){
  return (
    <div className="App w-full min-h-screen flex flex-col items-center text-3xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="putin" element={<Putin/>}/>
            <Route path="benzema" element={<Benzema/>}/>
            <Route path="mlssg" element={<Mlssg/>}/>
            <Route path="manliv" element={<Manliv/>}/>
            <Route path="covid" element={<Covid/>}/>
            <Route path="airasia" element={<Airasia/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  }

export default App

