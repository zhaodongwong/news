import './index.css'

function App() {

  return (
    <div className='flex flex-col'>
      <div className='text-center bg-stone-400 width-full justify-center left-1/4'>
        <h1 className='text-5xl '>
          NEWS
        </h1>
        <div className="mt-3 text-3xl hac flex flex-row gap-48 justify-between">
        <h2>
          HOME
        </h2>
        <h3>
          ABOUT
        </h3>
        <h4>
          CONTACT
        </h4>
        </div>
      </div>
      <div className='flex flex-row border-y-2 border-black mt-3 justify-between'>
        <img src="https://e3.365dm.com/22/03/2048x1152/skynews-ukraine-russia-teaser_5706280.jpg" className='putin'/>
        <h5 className='left-2/3'>
        Ukraine war: What are the chances of a peace deal with Russia to end the conflict?
        </h5>
      </div>
      <div className='relative flex flex-row justify-between'>
        <img src='https://library.sportingnews.com/2022-04/Karim%20Benzema%20Real%20Madrid%20vs.%20Chelsea%20040622.jpg' className='benzema mt-3'/>
        <img src="https://static.businesstimes.com.sg/s3fs-public/image/2022/03/08/causeway-sph_0.jpg" className='mls-sg '/>
      </div>
      <div className='relative flex flex-row justify-between'>
      <h9 className="">
        Champions League hat tricks in quarterfinals: Karim Benzema joins elite list of scorers after three goals vs. Chelsea
        </h9>
        <h10 className="">
        Johor MB lauds Malaysia-Singapore border reopening, says state will benefit from it
        </h10>
      </div>
      <div className='line'>
      </div>
      <div className='mt-3 flex flex-row justify-between'>
        <img src="https://supersport-cms-prod.azureedge.net/media/341jhdiq/man-city_vs_liverpool_1050x580.png?width=900" className='manliv'/>
        <h11 className="mt-20">
          Manchester City vs Liverpool:All things you should know
        </h11>
      </div>
      <div className='line'>

      </div>
      <div className='relative flex flex-row justify-between'>
        <img src='https://apicms.thestar.com.my/uploads/images/2022/04/07/1542199.png' className='benzema mt-3'/>
        <img src="https://images.squarespace-cdn.com/content/v1/5a5dbe4632601eb31977f947/1632394018914-P5455VRGX8QURK0AF30U/AF20200429_First+flight+resume+-165.jpg" className='mls-sg '/>
      </div>
      <div className='relative flex flex-row justify-between'>
      <h13 className="">
      Covid-19 Watch: 12,105 new cases, says Health Ministry
        </h13>
        <h10 className="">
        AirAsia's free seats promo available for booking from April 9-17
        </h10>
      </div>
    </div>
  )
}

export default App
