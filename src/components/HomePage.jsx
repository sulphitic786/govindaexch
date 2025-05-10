import React, { useState } from "react";
import Navbar from "./Navbar";
import banner from "../assets/imgs/banner.webp";
import bonus1 from "../assets/imgs/bonus1.webp";
import bonus2 from "../assets/imgs/bonus2.webp";
import bonus3 from "../assets/imgs/bonus3.webp";
import bonus4 from "../assets/imgs/bonus4.webp";
import bonus5 from "../assets/imgs/bonus5.webp";
import bonus6 from "../assets/imgs/bonus6.webp";
import bonus7 from "../assets/imgs/bonus7.webp";
import bonus8 from "../assets/imgs/bonus8.webp";
import bonus9 from "../assets/imgs/bonus9.webp";
import bonus10 from "../assets/imgs/bonus10.webp";
import bonus11 from "../assets/imgs/bonus11.webp";
import bonus12 from "../assets/imgs/bonus12.webp";
import bonus13 from "../assets/imgs/bonus13.webp";
import bonus14 from "../assets/imgs/bonus14.webp";
import bonus15 from "../assets/imgs/bonus15.webp";
import bm from "../assets/imgs/bm.svg";
import tv from "../assets/imgs/tv.svg";
import f from "../assets/imgs/f.svg";
import horse from "../assets/imgs/horse.svg";
import dog from "../assets/imgs/dog.svg";
// import bonus14 from "../assets/imgs/bonus14.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { RiArrowDropDownLine } from "react-icons/ri";
import Footer from "./Footer";

// adjust path

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const slides = [
    { image: bonus6 },
    { image: bonus7 },
    { image: bonus8 },
    { image: bonus9 },
    { image: bonus10 },
    { image: bonus11 },
    { image: bonus12 },
    { image: bonus13 },
    { image: bonus14 },
    { image: bonus6 },
    { image: bonus7 },
    { image: bonus8 },
    { image: bonus9 },
    { image: bonus10 },
    { image: bonus11 },
    { image: bonus12 },
    { image: bonus13 },
    { image: bonus14 },
  ];
  const matches = [
    {
      date: "10 May 08:00",
      title: "Bangladesh A v New Zealand A",
      live: true,
      icons: [tv, bm, f], // Make sure these images are in public/icons/
      odds: ["1.98", "", "", "", "1.98", ""],
    },
    {
      date: "10 May 10:00",
      title: "Indian Premier League",
      live: false,
      icons: [bm],
      odds: ["250", "300", "9100", "0", "8000", "0"],
    },
    {
      date: "09 May 15:00 |",
      title: "Essex v Yorkshire",
      live: false,
      icons: [f],
      odds: ["1.61", "1.88", "22", "40", "2.26", "2.98"],
    },
  ];

  const matches2 = [
    {
      date: "10 May 08:00",
      title: "Yokohama FC v Fukuoka",
      live: false,
      icons: [tv], // Make sure these images are in public/icons/
      odds: ["3.05", "3.1", "2.8", "2.82", "3.15", "3.2"],
    },
    {
      date: "10 May 10:00",
      title: "FC Tokyo v Kobe",
      live: false,
      icons: [],
      odds: ["4.1", "4.3", "3.5", "3.65", "2.06", "2.1"],
    },
    {
      date: "09 May 12:00 |",
      title: "Kashiwa v Okayama",
      live: false,
      icons: [],
      odds: ["1.98", "2", "2.2", "3.3", "5.1", "5.3"],
    },
  ];
  const matches3 = [
    {
      date: "10 May 08:00",
      title: "Marozsan v Rublev",
      live: false,
      icons: [tv], // Make sure these images are in public/icons/
      odds: ["2.42", "2.46", "", "", "1.68", "1.7"],
    },
    {
      date: "10 May 10:00",
      title: "Paul v Bautista Agut",
      live: false,
      icons: [tv],
      odds: ["1.27", "1.29", "", "", "4.5", "4.6"],
    },
    {
      date: "09 May 12:00 |",
      title: "Vukic v Se Korda",
      live: false,
      icons: [tv],
      odds: ["3.95", "4", "", "", "1.33", "1.34"],
    },
  ];
  const horseRaces = [
    { title: "Caulfield (AUS)", date: "10th May", time: "10:05" },
    { title: "Ipswich (AUS) ", date: "10th May", time: "10:05" },
    {
      title: "Port Hedland (AUS)",
      date: "10th May",
      time: "10:05",
      highlight: true,
    },
    { title: "Ipswich (AUS)", date: "10th May", time: "10:05" },
    { title: "Morphettville (AUS)", date: "10th May", time: "10:05" },
  ];

  const dogRaces = [
    { title: "Q1 Lakeside (AUS)", date: "10th May", time: "11:05" },
    { title: "Dubbo (AUS)", date: "10th May", time: "11:05" },
    { title: "Ballarat (AUS)", date: "10th May", time: "12:05" },
    { title: "Q1 Lakeside (AUS)", date: "10th May", time: "12:05" },
    { title: "Dubbo (AUS)", date: "10th May", time: "12:05" },
  ];
  const RaceRow = ({ races, icon }) => (
    <div className=" flex-wrap grid lg:grid-cols-5 grid-cols-1 items-center px-4 py-0 gap-x-1 gap-y-4 bg-white">
      {races.map((race, index) => (
        <div key={index} className="flex items-center gap-2 ">
          <img src={icon} alt="icon" className="w-14 h-14" />

          <div className="flex flex-col group text-sm leading-tight text-center transition-colors duration-300">
            <span className="font-bold text-black group-hover:text-orange-500 transition-colors duration-900">
              {race.title} {race.date}
            </span>
            <span className="font-bold text-black group-hover:text-orange-500 transition-colors duration-900">
              {race.date} {race.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const casinoSections = [
    {
      h1: "Indian online casinos games",
      p: "online gaming. And we seek a location where such an encounter might satisfy our general want to gamble. To provide you access to that experience, we are here. Want to engage in online sports betting in India? We provide odds on practically all sports and constantly strive to offer you more remarkable and better experiences.India has seen rapid development in the current continuing epidemic of online casino games. Since the epidemic began in India, more and more individuals are starting to engage in online gambling, and we can be sure that this trend will continue to expand over time. Additionally, the number of online casino gaming platforms and the variety of betting games are growing faster than ever. Check out other dice games for gambling to increase your chances of success and adventure.Consider trying out some online card games. Perhaps you're trying to find an online casino focusing on card games. We'll introduce you to the top betting sites for such an occasion. You will have complete gambling freedom to choose the ideal website for your needs. Your preferences, such as the promotions and incentives they provide to you, might help you distinguish between them.",
    },
    {
      h1: "The best welcome bonus at casinos",
      p: "You may get a variety of online bonuses from various online casinos as a way to draw customers to them. If you want, you can take advantage of that chance. It is an entirely free service that you may take advantage of. New Online gamblers may benefit from that welcome bonus to provide more delight in gaming and make more profit with their money.Make sure you pick an online casino with the finest welcome bonus when choosing one. Depending on the casino, you may get a big welcome bonus with a high or low welcome bonus with low wagering requirements.To entice new players, all online casinos provide some welcome casino bonus. A welcome bonus is not required to be used. Said it's an offer. It doesn't cost you anything, and as players, we can benefit from this by using the welcome casino bonus to increase our enjoyment and financial gains.Make sure you choose the finest casino bonus before picking which online casino to play at. Every casino bonus is unique. While some casinos provide a lesser bonus sum and a reduced wagering requirement, certain casinos will give you a huge bonus with a high wagering requirement. Select the parameters that are ideal for you and enjoy your time playing online poker with us. And we'll ensure to maximize your enjoyment of online gambling by using our expertise and in-depth knowledge of the industry's terms. For us, it's more than just a company. It is an excellent approach to delight and thrills our users. To maintain this zeal for online casino games, we will continue to be enthusiastic about bringing our player's ever-increasing advances in online gambling.",
    },
    {
      h1: "Gambling games",
      p: "Casinos will offer you many exciting games, including:● Card games● Roll the dice● In baccarat● Internet Poker● Bingo And many more!",
    },
    {
      h1: "Play with Indian Currency",
      p: "The internet gaming market is enormous. T tens of thousands of websites provide casino platforms, but none are secure or authorized to allow you to withdraw real money using reputable payment methods. Additionally, it isn't easy to use rupees as money. We're here to help you discover the most significant Indian market so you may get the top sports and gambling card games for fast cash sent into your bank account.Our goal is to provide its Indian players a place to play real money online casino games. 1xBook guarantees you a fantastic assortment of games with thorough details on each game.You may play your favorite game for entertainment purposes or to earn real money. You need a laptop or desktop computer to play gambling dice games.To participate in our brain teaser activities, create a new account and register with us. You only need to follow the easy steps and deposit money to your account to play real money games.On the other hand, you may choose the demo option in the game you are playing if you don't want to commit money for the first time.However, each time a player signs up with us, they may take advantage of a 100% casino bonus on their first deposit and be eligible to participate in ongoing tournaments and earn free spins. Make sure you play with confidence.You won't need to be concerned about somebody taking your personal information since we employ cutting-edge encryption software to keep your information private and secure from hackers.Since we are completely licensed and regulated to provide dependable real money games and services, you can feel safe playing online casino games with us.Additionally, we firmly support gaming responsibly and are delighted to have discovered India's most incredible casino platform. Playing games for real money is enjoyable, but we will do our best to help if you want assistance.In the cosmic beyond, there is never-ending pleasure and enjoyment. 1xBook has the most exciting game selection, great promos, and more. The best place to play video games is 1xBook.Finally, don't hesitate to contact us if you have any questions. Our knowledgeable customer service staff is here to answer any questions. 24/7 customer assistance is available from us",
    },
    {
      h1: "Introduction Bonuses at These Casinos",
      p: "Welcome bonuses are a tactic used by these online bookmaker casinos to attract clients and pique their curiosity about the live casino activities. Before considering the welcome bonuses, these casinos offer, be sure they accept Indian clients and Indian rupees.After entering your account and playing, these online casinos will offer you welcome bonuses. 1xBook provides a variety of introductory bonuses for their live casino events, ranging in value from 100% matched bonuses up to Rs. 60,000 for Cricket Roulette. In comparison, you may get an Rs. 3000 welcome bonus credit at the Bollywood Blackjack table.High-end Welcome Casino Bonuses provided by govindaexch have established a new benchmark. After making their initial minimal INR 100 investment, all new users of the online casino platform get a 100% casino bonus. Because it is a one-time promotion, you should make the most of it.These are a few welcome incentives from India's most well-known and reputable online bookmakers. We advise you to click on the inbound links that will take you directly to the terms and conditions page for welcome bonuses if you want to learn more about the welcome bonuses offered by these casinos.How to maximize your profits while betting online in India?Playing online casino games, slot machines, and other games may all be a tonne of fun. They will significantly increase your adrenaline levels, and you may feel inclined to spend more money than is reasonable on these games. You must always keep fun out of these situations and concentrate on your abilities. You need to have good betting abilities to increase your chances of winning. You can't always rely on good fortune.Know your sport well and out before placing a wager. Learn anything that seems significant and may aid you in making accurate forecasts. For instance, if a football game is about to start, find out who is participating, the starting lineup, the player types, the strengths and weaknesses of the teams and the players, and their past performances. You may continue producing accurate forecasts ahead of time with the help of all this knowledge.Examine your chances of winning the wager at several bookies. You must diversify your contacts since you can't always rely on one. Gain as many promos as possible, and use the site prediction features. Do not rely on online predictions of winners. Create your forecasts to be specific.Visit several betting websites to review betting deals, promotions, bonuses, incentives, welcome bonuses, and the like. Open several betting accounts to make the most money from online betting in India. But keep in mind to exercise discipline and refrain from impulsively placing bets. Before making a wager, think it out thoroughly. Never wager with money you can't afford to lose.",
    },
    {
      h1: "How can I deposit and withdraw funds while betting online?",
      p: "Deposit on the online betting site before you may place bets or take advantage of welcome incentives. Navigate to the cashier portion of an online betting site to make a deposit. Examine the forms of payment they take and see whether you have any of them. The most popular payment options accepted by Indian online bookmakers are Paytm, Google Pay, debit/credit cards, net banking, UPI, and others. All bookies allow international payment options, including Mastercard and Visa, worldwide. It's best to verify beforehand since approved payment methods differ from site to site.Before you may withdraw money from online betting sites, several criteria, restrictions, and demands must be satisfied. You must submit a few documents to complete your KYC and ID verification. Compared to deposit payment methods, withdrawal payment methods might sometimes have fewer payment options. The minimum and maximum withdrawal amounts vary across various online bookmakers.",
    },
    {
      h1: "Various forms of internet betting",
      p: "Most online bets are made on sports or athletic events, including basketball, association football, horse racing, and cricket. Various bets may be made on award ceremonies, including the Grammys, Oscars, Emmys, and others. Internet betting has been made more engaging to draw in more players. So far, it has been confirmed to be a thriving sector that generates billions of dollars annually. Learn about the sports events and sports you may bet on before placing an online wager on any sporting event. What are the games with the lowest winning odds and the most often played ones?",
    },
    {
      h1: "cricket betting",
      p: "In India, cricket betting may be the most popular internet gambling. With the advent of the Indian Premier League, cricket betting became ten times more popular, and now, it enjoys significant client engagement throughout ODI, Twenty20, and Test Matches.Cricket is an unpredictable game, which makes it difficult to make accurate forecasts, but it also makes it very entertaining. Learn about the strengths and weaknesses of the players on both sides, the records of both teams, the spin and speed combinations, the present form of the players, the squad composition, and the pitch report to broaden your understanding of cricket betting and boost your chances of winning.Determine the game's worth and choose the best bookies to put your bets on. Given the number of active online cricket betting sites, you must choose wisely based on each one's minimal odds, benefits, and promotions. Before a cricket match, the best advice is to go through all of the top Indian online betting sites, review the latest news and betting trends, and then choose the one that will be the safest and most advantageous.On their website, govindaexch includes a section devoted to all cricket-related online betting and casino events. They provide intriguing deals with their single and combination betting systems and govindaexch. Betting on the Tamil Nadu Premier League is also available since they serve an Indian audience.These are a few of the cricket betting promotions that are currently available on various betting platforms.",
    },
    {
      h1: "Soccer betting",
      p: "Soccer, or association football, is a global sport that is very well-liked all over the globe. Millions of people watch competitions like the UEFA Euros, World Cup, UEFA Champions League, and Premier League. Several online betting services also host tournaments to accurately predict the number of goals each side scores and who will win the game after 90 minutes. Some online bookmakers even provide advice to assist users in making accurate predictions.However, you can't always rely on these forecasts; you must also be familiar with the game. Learn about the playing styles, individual and team strengths and weaknesses, and who is most likely to score a goal, among other things. You can create accurate forecasts if you sufficiently understand all the game's contributing components.",
    },

    {
      h1: "equine betting",
      p: "You may have seen movie horse betting scenes where the wealthy, royalty and regular people predict which horse will win. Horse betting competitions are a unique event in rich countries and a fantastic way for people from the middle and lower-income classes to earn additional money by making the correct predictions.Knowing a horse's present form and health, as well as how they have fared in past races and how the event ranks them, are necessary for making a good horse betting prediction. You may always visit 1xBook.com if you want to wager on horses or horse races. 1xBook provides betting on horse races in local and foreign markets.",
    },

    {
      h1: "Kabaddi betting",
      p: "The Pro Kabaddi League event has increased interest in and interest in Kabaddi's all-Indian, dynamic, and fascinating sport. Why not try Kabaddi Betting if you are an enthusiastic follower of the Pro Kabaddi League and have a solid understanding of Kabaddi's rules and playing style? Use your forecasts to your advantage and pick the best wagers on the match. The additional funds from the victory will appear excellent on your bank statement.If you're interested in betting on Kabaddi, check out 1xBook. That has a wide range of Kabaddi betting choices.",
    },
    {
      h1: "Basketball wagers",
      p: "Basketball wagering is mainly concentrated on the NBA, an international phenomenon. People worldwide have expressed their admiration for the NBA, which has played a significant role in American culture. Online wagering on these events is relatively standard, and even fantasy basketball attracts some interest from bettors. The Euroleague is a different basketball competition that is well-liked.You may visit 1xBook to place a wager on Basketball sports events. 1xBook offers you the opportunity to wager on events including WNBA friendlies, the NBA, Euroleague, Liga ACB (Spain), and the BBL (Germany).",
    },
    {
      h1: "Others",
      p: "Online bookmakers develop a particular platform for wagering on athletic events like the Olympics, World Championships, Football World Cup, Cricket World Cup, and more when they take place. You may browse the live Olympic betting homepage provided by govindaexch online betting platform, make your prediction, and place bets on the currently playing sports. There are several additional forms of online betting, such as cycling, Formula 1, boxing, wrestling, badminton, hockey, esports, and more.",
    },
    {
      h1: "Advice & Methods",
      p: "If you're new to online betting, you must learn to regulate your emotions and keep them out of your play and wagering. Make intelligent estimates if you want to take a chance on losing your money. Know what you are betting on and how many wins you can tolerate losing and winning. After a game of online betting, you do not want to be left sitting on anything.Do thorough research before placing a wager and look at historical patterns and results. Consider learning more about online betting than simply the basics. For a sample, if you are placing a bet on an Indian Premier League match, look into the prior results of both teams, as well as the runs and actions of certain cricket players. You'll be able to place a more educated wager and improve your chances of winning.We advise you to visit and explore the websites before making bets if you want to use one of the top Indian online betting sites mentioned above. You won't have to waste time looking for possibilities and lose the necessary time that you might be used to placing bets.We also suggest you go through the patterns, outcomes, and other data shown on the betting websites. It will be simpler for you to play games and make money if you are more knowledgeable about the most recent events in online gambling. Verify their legitimacy and how they conduct financial transactions.Open several betting accounts and take advantage of bonus and incentive offers. Before taking the incentives, carefully review the terms and conditions. Be as acquainted with games as you can with your odds of winning, and avoid gambling with funds you cannot afford to lose. You can never predict whether or not luck will be on your side. Calculate the likelihood that you will win vs. lose.One of the most meaningful elements of online gambling is the time of bet placement. If there are any active bets, check them out. To gain fascinating possibilities and prizes, you must be well informed about your game. Look for tempting wagering opportunities. When betting online, single bets are the most popular choice. Although there are dangers and benefits unique to this situation, winning is more straightforward. To win single bets, you only need a thorough understanding of the game and a dash of good fortune.Keep a record of your wagering choices across different sites. You'll place better bets if you keep a record of all your wagers, forecasts, and information on the game's status and specifics. Additionally, you may monitor your spending and determine which kind of online betting will bring you the most money.Talk about the games with other online gamblers and sports fans. They'll increase your understanding, but you may also gain from their comments and counsel",
    },
    {
      h1: "Legality",
      p: "Before engaging in internet gambling, you should familiarise yourself with your state laws since the state governs gaming. The rules governing gambling and betting in India differ from state to state. To prevent engaging in any unlawful acts with knowledge, it is preferable to do some research. Casinos and gambling, both online and off, are permitted in several states, including Goa and Sikkim, and they significantly boost those states' economies.We may infer that internet gambling is undoubtedly legal in India on a greater scale. Only a few states have laws limiting internet gambling, betting, and casinos out of all those in the union. However, it is best to confirm the legitimacy of these online gambling sites before putting your bets if you want to be certain.",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <img src={banner} alt="" />
        <div className="flex justify-between items-center gap-3 py-4 md:px-3 px-2 bg-gray-300">
          <div className="">
            <img src={bonus1} alt="" className="w-full h-full" />
          </div>
          <div className="">
            {" "}
            <img src={bonus2} alt="" className="w-full h-full" />
          </div>
          <div className="">
            {" "}
            <img src={bonus3} alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="flex justify-between items-center gap-3  md:px-3 px-2 bg-gray-300 md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            {" "}
            <img src={bonus4} alt="" className="w-full h-full" />
          </div>
          <div className="md:w-1/2 w-full">
            {" "}
            <img src={bonus5} alt="" className="w-full h-full" />
          </div>
        </div>

        {/* table1 start here */}
        <div className="md:px-3 px-2 pb-2 bg-gray-300">
          <div className="">
            <h2 className="text-base font-bold text-black py-2 capitalize">
              Top Games
            </h2>

            {/* for slider */}
            <Swiper
              spaceBetween={5}
              slidesPerView={2}
              loop={true}
              // freemodemomentum={true}
              // FreeMode={true}
              speed={2000}
              centeredSlides={true}
              autoplay={{
                delay: 50,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, FreeMode]}
              className="mySwiper"
              breakpoints={{
                1920: {
                  slidesPerView: 9,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 9,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 9,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className=" rounded-lg  "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="bg-gray-300 md:px-4 px-2 pb-2">
          <div className="bg-white text-sm">
            {/* Section Header */}
            <div className="bg-black text-white font-bold px-3 py-1">
              Cricket
            </div>

            {/* Column headers */}
            <div className="flex justify-between items-center border-b border-gray-200 px-3 py-1 text-gray-800 font-semibold">
              <div className="w-1/2"></div>
              <div className="w-1/2 grid grid-cols-6 gap-2 text-center">
                <span className="col-span-2">1</span>
                <span className="col-span-2">X</span>
                <span className="col-span-2">2</span>
              </div>
            </div>

            {/* Match Rows */}
            <div>
              {matches.map((match, index) => (
                <div
                  key={index}
                  className="flex justify-between md:flex-row flex-col items-center px-3 py-0 border-b border-gray-200"
                >
                  {/* Left Side */}
                  <div className="w-full sm:w-[30%]">
                    <a href="">
                      <span className="text-[#022c44] font-bold">
                        {match.date}
                      </span>{" "}
                      |{" "}
                    </a>
                    <a href="">
                      <span className="text-[#022c44] font-bold">
                        {match.title}
                      </span>
                    </a>
                    {match.live && (
                      <span className="text-[#fa9220] font-bold ml-2">
                        Live Now
                      </span>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className="w-full sm:w-[70%] flex items-center gap-2 flex-wrap justify-end">
                    <div className="flex items-center gap-1 py-1">
                      {match.icons.map((icon, idx) => (
                        <img
                          key={idx}
                          src={icon} // Using the imported image paths
                          alt="icon"
                          className="w-6 h-6"
                        />
                      ))}
                    </div>
                    {/* Odds Boxes */}
                    <div className="grid grid-cols-6 gap-2 w-full sm:w-1/2">
                      {match.odds.map((odd, i) => (
                        <div
                          key={i}
                          className={`text-center px-2 py-[2px] rounded font-semibold ${
                            i % 2 === 0
                              ? "bg-[#72bbef] text-black hover:bg-[#6baedf]"
                              : "bg-[#faa9ba] text-black hover:bg-[#f0a3b4]"
                          }`}
                        >
                          {odd}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-end items-end pt-1">
                <a href="" className="text-black font-bold">
                  View More...
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* table1 start end */}

        {/* table2 start here */}

        <div className="bg-gray-300 md:px-4 px-2 pb-2">
          <div className=" bg-white text-sm">
            {/* Section Header */}
            <div className="bg-black text-white font-bold px-3 py-1">
              Soccer
            </div>

            {/* Column headers */}
            <div className="flex justify-between items-center border-b border-gray-200 px-3 py-1 text-gray-800 font-semibold">
              <div className="w-1/2"></div>
              <div className="w-1/2 grid grid-cols-6 gap-2 text-center">
                <span className="col-span-2">1</span>
                <span className="col-span-2">X</span>
                <span className="col-span-2">2</span>
              </div>
            </div>

            {/* Match Rows */}
            <div>
              {matches2.map((match, index) => (
                <div
                  key={index}
                  className="flex justify-between  md:flex-row flex-col items-center px-3 py-0 border-b border-gray-200"
                >
                  {/* Left Side */}
                  <div className="w-full sm:w-[30%]">
                    <a href="">
                      <span className="text-[#022c44] font-bold">
                        {match.date}
                      </span>{" "}
                      |{" "}
                    </a>
                    <a href="">
                      <span className="text-[#022c44] font-bold">
                        {match.title}
                      </span>
                    </a>
                    {match.live && (
                      <span className="text-[#fa9220] font-bold ml-2">
                        Live Now
                      </span>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className="w-full sm:w-[70%] flex items-center gap-2 flex-wrap justify-end">
                    <div className="flex items-center gap-1 py-1">
                      {match.icons.map((icon, idx) => (
                        <img
                          key={idx}
                          src={icon} // Using the imported image paths
                          alt="icon"
                          className="w-6 h-6"
                        />
                      ))}
                    </div>
                    {/* Odds Boxes */}
                    <div className="grid grid-cols-6 gap-2 w-full sm:w-1/2 py-1">
                      {match.odds.map((odd, i) => (
                        <div
                          key={i}
                          className={`text-center px-2 py-[2px] rounded font-semibold ${
                            i % 2 === 0
                              ? "bg-[#72bbef] text-black hover:bg-[#6baedf]"
                              : "bg-[#faa9ba] text-black hover:bg-[#f0a3b4]"
                          }`}
                        >
                          {odd}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-end items-end pt-1">
                <a href="" className="text-black font-bold">
                  View More...
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* table2 start end */}

        {/* table3 start here */}
        <div className="bg-gray-300 md:px-4 px-2 pb-2">
          <div className="bg-white text-sm">
            {/* Section Header */}
            <div className="bg-black text-white font-bold px-3 py-1">
              Tennis
            </div>

            {/* Column headers */}
            <div className="flex justify-between items-center border-b border-gray-200 px-3 py-1 text-gray-800 font-semibold">
              <div className="w-1/2"></div>
              <div className="w-1/2 grid grid-cols-6 gap-2 text-center">
                <span className="col-span-2">1</span>
                <span className="col-span-2">X</span>
                <span className="col-span-2">2</span>
              </div>
            </div>

            {/* Match Rows */}
            <div>
              {matches3.map((match, index) => (
                <div
                  key={index}
                  className="flex flex-wrap sm:flex-nowrap justify-between items-start sm:items-center px-3 py-0 border-b border-gray-200"
                >
                  {/* Left Side */}
                  <div className="w-full sm:w-[30%] mb-1 sm:mb-0">
                    <a href="">
                      <span className="text-[#022c44] font-bold">
                        {match.date}
                      </span>{" "}
                      |{" "}
                    </a>
                    <a href="">
                      <span className="text-[#022c44] font-bold">
                        {match.title}
                      </span>
                    </a>
                    {match.live && (
                      <span className="text-[#fa9220] font-bold ml-2">
                        Live Now
                      </span>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className="w-full sm:w-[70%] flex items-center gap-2 flex-wrap justify-end">
                    <div className="flex items-center gap-1 py-1">
                      {match.icons.map((icon, idx) => (
                        <img
                          key={idx}
                          src={icon}
                          alt="icon"
                          className="w-6 h-6"
                        />
                      ))}
                    </div>

                    {/* Odds Boxes */}
                    <div className="grid grid-cols-6 gap-2 w-full sm:w-1/2 py-1">
                      {match.odds.map((odd, i) => (
                        <div
                          key={i}
                          className={`text-center px-2 py-[2px] rounded font-semibold ${
                            i % 2 === 0
                              ? "bg-[#72bbef] text-black hover:bg-[#6baedf]"
                              : "bg-[#faa9ba] text-black hover:bg-[#f0a3b4]"
                          }`}
                        >
                          {odd}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-end items-end pt-1">
                <a href="" className="text-black font-bold">
                  View More...
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* table3 start end */}

        <div className="md:px-4 px-2 bg-gray-300 text-sm">
          {/* table4 start here */}
          <div className="  text-sm">
            {/* Horse Racing Section */}
            <div>
              <div className="bg-black text-white px-3 py-2 font-bold">
                Horse Racing
              </div>
              <RaceRow races={horseRaces} icon={horse} />
            </div>

            {/* Greyhound Racing Section */}
            <div className="mt-2">
              <div className="bg-black text-white px-3 py-2 font-bold">
                Greyhound Racing
              </div>
              <RaceRow races={dogRaces} icon={dog} />
            </div>
          </div>
        </div>
        {/* table4 start end */}

        <div className="md:px-4 px-2 py-2 ">
          <img src={bonus15} alt="" className="rounded-lg" />
        </div>
        <div className="md:mx-4 mx-2">
          {/* Toggle Header */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 rounded-lg font-bold text-sm bg-white border-gray-300 border flex items-center justify-between cursor-pointer transition-colors"
          >
            <h2>Indian online casinos games</h2>
            <RiArrowDropDownLine
              className={`text-3xl text-gray-400 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Expandable Content */}
          <div
            className={` transition-all duration-300 overflow-y-scroll mb-5 ${
              isOpen ? "max-h-96 " : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white   text-sm text-gray-700 rounded-lg border-t border-gray-400">
              {casinoSections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h1 className="font-semibold text-[#9d9d9d] text-xl">
                    {section.h1}
                  </h1>
                  <p className="text-sm text-[#9d9d9d] leading-6  ">
                    {section.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;
