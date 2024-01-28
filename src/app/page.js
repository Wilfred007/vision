import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="">
    <div className=" mx-auto">
      <Image
      src='/nav-image.png'
      height={20}
      width={1500}
      alt="nav"
      className="" 
      />
      <div className="-mt-[130px] lg:-mt-[500px] flex justify-between space-x-5">
        <div>
        <Image
        src='/ball1.png'
        height={600}
        width={600}
        alt="ball"
        />
        </div>
        <div>
          <Image
          src='/ball2.png'
          height={300}
          width={300}
          alt="ball"
          />
        </div>

        <div>
          <Image
          src='/ball2.png'
          height={300}
          width={300}
          alt="ball"
          />
        </div>

        <div>
          <Image
          src='/ball2.png'
          height={300}
          width={300}
          alt="ball"
          />
        </div>
      </div>
    </div>
    <div  className="-mt-5 flex justify-between">
      <div className="-mt-[90px] lg:-mt-[150px] mb-5 ml-[6px]">
        <Image
        src='/logo.png'
        height={150}
        width={150}
        alt="logo"
        />
      </div>

    <div className="lg:flex justify-between space-x-5 mr-[40px] -mt-[100px] lg:-mt-[150px] hidden">
      <div className="font-semibold text-[rgb(139,40,6)] text-xs">
        OUR CHURCH <br/>
        GROWTH PLAN
      </div>
      <div className="font-semibold text-[hsl(15,92%,28%)] text-xs">
        CFC ABUJA <br/>
        2024 GOALS
      </div>

      <div className="font-semibold text-[#8B2806] text-xs">
        THE RELEVANT <br/>
        CHURCH
      </div>
      <div className="font-semibold text-[#8B2806] text-xs">
        OUR <br/>
        STORY
      </div>
      </div>
    </div>
    </div>
    <div className="-mt-[50px]">
      <Image
      src='/hero.png'
      height={1500}
      width={1500}
      alt="hero"      
      />
    </div>
    <div className="text-center text-[15px] lg:text-[30px] tracking-wider leading-[40px] -mt-[100px] lg:-mt-[200px] text-white ">
    <p>The word in focus for 2024 is <span className="text-[40px] lg:text-[60px]">“GROW”</span> <br/> because everything that has life grows!</p>
    </div>
    
      <div className="mt-[110px]">
        <Image
        src='/bg.png'
        height={1500}
        width={1500}
        alt="glo"
        />
      </div>
      <div className="-mt-[400px] lg:-mt-[1000px]">
        <div className="flex flex-col lg:flex-row justify-between gap-6 p-5">
        <div className="flex justify-center">
          <Image
          src='/global.svg'
          height={300}
          width={300}
          alt="faith"
          />
          </div>
          <div className=" item-center">
            <h1 className="text-center mb-1 text-[#8B2806]">VISION</h1>
            <p className="text-center text-xs text-[#8B2806]">(Colossians 1:27-28)</p>
            <div className=" flex justify-center">
            <p className=" mt-5 text-xs text-center p-5">To fill our world with the beautiful message of our Lord Jesus Christ, presenting a people mature in Him.</p>
            </div>

          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 p-5 mt-10 lg:w-[900px]">

        <div className="flex flex-col ">
            <h1 className="text-center mb-1 text-[#8B2806]">MISSION</h1>
            <p className="text-center text-xs text-[#8B2806]">(Mark 16:15; 2 Timothy 2:2)</p>
            <div className="">
            <p className="text-center mt-5 text-[12px]">To bring the lost to the saving knowledge of our Lord Jesus Christ, helping them become all that God has designed for them to be by teaching and educating the total man – spirit, soul, and body – by the Word and by so doing raising a body of anointed believers who are spreading the anointed uncompromised truth of God’s Word through every available means to the ends of the earth.</p>
            </div>

          </div>
          <div className="flex justify-center">
          <Image
          src='/lift.png'
          height={300}
          width={300}
          alt="faith"
          />
          </div>
          
        </div>

      </div>

      <div class="text-center text-orange-900 text-[20px] font-normal font-['Kurale'] leading-[45px]">WATCH WORDS</div>

      <div class="text-zinc-900 text-[20px] font-medium font-['Lato'] leading-[34px] ml-5">1.Love</div>
      <div className="flex justify-center mt-5">
      <img class="w-[500px] h-[250px] rounded-[85px]" src="/love.png" />
      </div>
      <p className="text-center mt-5">We are motivated to do because of Love.</p>
      
      <div className="mt-5">
        <div>
          <p className="text-zinc-900 text-[20px] font-medium font-['Lato'] leading-[34px] ml-5 mb-5">2. Faithfulness</p>
          <div className="flex justify-center">
          <Image
          src='/faith.png'
          height={300}
          width={300}
          alt="faith"
          />
          </div>
          <p className="text-center p-10 text-sm">We are courageous stewards in pursuit of God’s purpose for us.</p>
        </div>
        
        <div className="mt-5">
          <p className="text-zinc-900 text-[20px] font-medium font-['Lato'] leading-[34px] ml-5 mb-5">3. Commitment</p>
          <div className="flex justify-center">
          <Image
          src='/com.png'
          height={300}
          width={300}
          alt="faith"
          />
          </div>
          <p className="text-center p-10 text-sm">We remain loyal and true in whatever we are asked to do by God and our leadership.</p>
        </div>
      </div>

      <div>
        <Image
        src='/shad.png'
        height={1000}
        width={1000}
        alt="shad"
         />
      </div>
      <div className="-mt-[1050px]">
      <div class="text-zinc-900 text-[20px] font-medium font-['Lato'] leading-[34px] ml-5">4.  EXCELLENCE</div>
      <div className="flex justify-center mt-5">
      <img class="w-[500px] h-[250px] rounded-[85px]" src="/ches.png" />
      </div>
      <p className="text-center mt-5 p-5">We believe in honour towards God and people by giving our best.</p>
      <p className="text-[#8B2806] text-[20px] text-center text-sm">Our Culture Statement</p>
      <p className="p-5 text-sm">“We are men and women born of love, we exude excellence, we are courageously faithful to the Father’s call for our lives, and to the message of the gospel we stay committed.”</p>

      <h1 className="text-[#8B2806] text-center">OUR HISTORY</h1>
      <div className="">
      <div className="flex justify-center mt-5">
          <Image
          src='/boys.png'
          height={300}
          width={300}
          alt="faith"
          />
          </div>
        <div className="text-center text-sm p-10">
          <p>The story of Christ Family Center has been an adventure of faith. Born from what started as a small community fellowship known as All Christian Families Fellowship (ACFF), for Benue Cement Company ...</p>
          <p className="text-[#8B2806] text-center text-xs mt-2">READ STORY</p>
        </div>
      </div>

      <h1 className="text-[#8B2806] text-center">THE RELEVANT CHURCH</h1>
      <div className="">
      <div className="flex justify-center mt-5">
          <Image
          src='/round.png'
          height={300}
          width={300}
          alt="faith"
          />
          </div>
        <div className="text-center p-10 text-sm">
          <p>I see a church – a tribe, a nation of people, a global community where everybody is somebody! A people united in the bond of covenant of redeeming love, washed by the blood of Jesus, standing together in unison with a common vision in the hope of one calling of our savior Jesus Christ.</p>
          <p className="text-[#8B2806] text-center text-xs mt-2">CATCH THE VISION</p>
        </div>
      </div>
      </div>

    <div>
      <h1 className="text-[#8B2806] text-center">CHURCH GROWTH PLAN</h1>
      <div className="flex p-5 items-center ">
        <Image
        src='/smile.png'
        height={100}
        width={100}
        alt="smile"
        />
        <p className="p-10 text-sm">Grow STRONGER through WORSHIP (Matthew 22:37-38; Philippians 4:7 (MSG) ) – God wants us to center our lives around Him.</p>
      </div>

      <div className="flex p-5 items-center ">
        <Image
        src='/warm.svg'
        height={80}
        width={80}
        alt="smile"
        />
        <p className="p-10 text-sm">Grow WARMER through FELLOWSHIP – Hebrews 10:25 (TEV); Acts 2:41-42, 46 – God wants us to learn to love His family; the church! In fellowship we share our lives with others, encouraging one another and building each other in the faith!</p>
      </div>

      <div className="flex p-5 items-center ">
        
        <p className="p-10 text-sm">Grow BROADER through MINISTRY – 1 Peter 4:10 (LB); Psalm 116:12 (MSG) – God wants us to contribute and give something back to others. Through ministry we use our gifts and resources to serve the need of others in our community and those around us thus reflecting the love of Christ to our world.</p>
      </div>

      <div className="flex p-5 items-center ">
        <Image
        src='/calms.svg'
        height={100}
        width={100}
        alt="smile"
        />
        <p className="p-10 text-sm">Grow WARMER through FELLOWSHIP – Hebrews 10:25 (TEV); Acts 2:41-42, 46 – God wants us to learn to love His family; the church! In fellowship we share our lives with others, encouraging one another and building each other in the faith!</p>
      </div>

      <div className="flex p-5 items-center ">
        
        <p className="p-10 text-sm">Grow DEEPER through DISCIPLESHIP – Matthew 28:19-20; Hebrews 6:1 (LB); Hebrews 5:12 (GW) – He wants us to grow spiritually and be mature in Him. Through discipleship we help others to grow in their faith in becoming more like Jesus through mentorship.</p>
      </div>
      </div>

      <div>
        <Image
        src='/yello.svg'
        height={1000}
        width={1000}
        alt="yell"
         />
      </div>

      <div className="-mt-[500px]">
      <h1 className="text-[#8B2806] text-center">Our Growth Structure</h1>
      <p className="text-sm p-10">In fulfilling the vision and mission of God for Christ Family Center churches, God has given us a system that fosters the goals of CFC Abuja. This system is known as the Cell Church Ministry (CCM, formerly known as Home Cell Church Ministry). The CCM will function with the following organs:</p>

      <Image
      src='struct.svg'
      height={700}
      width={700}
      alt="struct"
      className="p-5"
      />
       <p className="text-[#8B2806] text-center text-xs mt-2">Learn More</p>     
      </div>

      <div className="mt-3">
        <Image
        src='/blue.svg'
        height={700}
        width={700}
        alt="blu"
        />
      </div>
      <div className="-mt-[450px]">
      <h1 className="text-white text-center">Cfc Abuja 2024 Goals</h1>
      <div className="flex p-5 items-center ">
        <Image
        src='/meda.svg'
        height={50}
        width={50}
        alt="smile"
        />
        <p className="p-5 text-xs text-white">Sunday Total Life Prosperity/Connect to Life Service – 1000+ in attendance</p>
      </div>

      <div className="flex p-5 items-center ">
        <Image
        src='/meda.svg'
        height={50}
        width={50}
        alt="smile"
        />
        <p className="p-5 text-xs text-white">Wednesday Believers’ Service – 400 + in attendance across C3s</p>
      </div>

      <div className="flex p-5 items-center ">
        <Image
        src='/meda.svg'
        height={50}
        width={50}
        alt="smile"
        />
        <p className="p-5 text-xs text-white">7 CFC Community Churches (C3s)</p>
      </div>

      <div className="flex p-5 items-center ">
        <Image
        src='/meda.svg'
        height={50}
        width={50}
        alt="smile"
        />
        <p className="p-5 text-xs text-white">20 Strong Connect Groups</p>
      </div>

      </div>

      




    
    </>
  );
}
