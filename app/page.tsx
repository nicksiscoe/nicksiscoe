/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
// import styles from "./page.module.scss"
import "./globals.scss";
import Experience from "./components/Experience";

const Divider = ({ year }: { year: string }) => {
  return (
    <div>
      <hr />
      <p className="hr-text">{year}</p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="nav">
        {/* <a className="active">
        <p style="margin: 0; padding: 0;"><strong>Home</strong></p>
      </a> */}
        {/* <a href="https://nicksiscoe.xyz" style="margin-right: 10px;">
        <p style="margin: 0; padding: 0;"><strong>Portfolio ↗︎</strong></p>
      </a> */}
      </div>
      {/* <div className="top-button-div">
      <a href="./design/dist/index.html" style="margin: 1em;" className="new-top-button">NEW: Design Portfolio →</a>
    </div> */}
      <header>
        <Image
          width={200}
          height={200}
          src="/img/me/me15.png"
          className="header-image"
          data-aos="flip-left"
          data-aos-duration="600"
          data-aos-easing="ease-out-cubic"
          alt="me"
        />
        <div
          className="header-content"
          data-aos="zoom-out"
          data-aos-duration="600"
        >
          <h1>Nick Siscoe</h1>
          <div className="tags">
            <div className="tag">📍 Kansas City</div>
            <div className="tag">💾 25 y/o</div>
            <div className="tag">🎓 Cornhusker</div>
            <div className="tag">🎸 Guitarist</div>
            <div className="tag">🏟️ Working on something new</div>
          </div>
          <div className="social-row">
            <a
              href="https://twitter.com/siscoe_"
              className="btn"
              target="_blank"
            >
              <i className="fab fa-twitter" style={{ color: "#00acee" }}></i>
            </a>
            <a
              href="https://github.com/nicksiscoe"
              className="btn"
              target="_blank"
            >
              <i className="fab fa-github" style={{ color: "#272727" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nasiscoe/"
              className="btn"
              target="_blank"
            >
              <i
                className="fab fa-linkedin-in"
                style={{ color: "#0e76a8" }}
              ></i>
            </a>
            <a
              href="mailto:nick.siscoe@gmail.com"
              className="btn"
              target="_blank"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </header>
      <div
        className="content"
        data-aos="fade-up"
        data-aos-duration="450"
        data-aos-easing="ease-out-cubic"
      >
        <div className="description">
          <p>
            👋 I&apos;m a{" "}
            <a className="btn-purple">
              <strong>full-stack software engineer</strong>
            </a>{" "}
            with experience{" "}
            <a className="btn-green">
              <strong>designing pixel-perfect user interfaces</strong>
            </a>
            ,{" "}
            <a className="btn-blue">
              <strong>gathering continuous customer feedback</strong>
            </a>
            , and{" "}
            <a className="btn-burnt-orange">
              <strong>leading high-velocity agile teams</strong>
            </a>
            .
          </p>
        </div>
      </div>

      <div className="cv-outer">
        <div className="cv">
          <div className="cv-header">
            <div className="front-header">
              <h2>my work</h2>
              <p className="context">
                Jobs, startups, passion-projects, failures, and everything in
                between.
              </p>
            </div>
            {/* <a className="btn" href="#">Download</a> */}
          </div>
          <Experience
            experience={{
              img: "/img/logos/fancave.png",
              title: "Co-Founder, CTO",
              company: "FanCave (YC W24)",
              location: "San Francisco, CA",
              url: "https://fancave.team",
              timeframe: "January 2024 - Present",
              description:
                "Bringing NFL-inspired roster management software to college athletics.",
            }}
          />
          <Divider year="2024" />
          <Experience
            experience={{
              img: "/img/logos/fancave-chat.png",
              title: "Founder",
              company: "FanCave",
              location: "Remote",
              url: "https://fancave.live",
              timeframe: "January - November 2023",
              description:
                "Cross-platform mobile app to chat, react, and talk trash with fans and rivals on gameday.",
            }}
          />
          <Divider year="2022" />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/everyprompt.png",
              title: "Frontend Contributor",
              company: "Everyprompt",
              location: "Remote",
              url: "https://twitter.com/evanjconrad/status/1583538660489588737?s=20&t=0xR-W107GCvTKGSVE-VQ0A",
              timeframe: "Fall 2022",
              description:
                "Development of an IDE for AI-prompt generation and deployment.",
            }}
          />
          <Experience
            experience={{
              img: "/img/logos/sideline.png",
              title: "Software Engineer",
              company: "Sideline",
              location: "Remote",
              url: "https://sideline.so",
              timeframe: "June - Octobger 2022",
              description:
                "A SwiftUI Reddit app for game threads - peak ~500 WAU",
            }}
          />
          <Experience
            experience={{
              img: "/img/logos/ondeck.png",
              title: "On Deck | ODF13",
              company: "Founder Fellow",
              location: "Remote",
              url: "https://www.beondeck.com/founders",
              timeframe: "Spring 2022",
              description:
                "Selected to join the early-stage accelerator - Collaborated with other founders building their next startup",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/wayform.png",
              title: "Founder",
              company: "Wayform",
              location: "Remote",
              url: "https://wayform-web.vercel.app",
              timeframe: "Spring 2022",
              description:
                "Solo project - a Notion-like financial and life planning tool.",
            }}
          />
          <Experience
            experience={{
              img: "/img/logos/payit.png",
              title: "Software Engineer",
              company: "PayIt",
              location: "Kansas City, MO",
              url: "https://payitgov.com",
              timeframe: "August 2021 - Present",
              description:
                "The leaders in digital government services and payments.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/strangemood.png",
              title: "Frontend Contributor",
              company: "Strangemood",
              location: "Remote",
              url: "https://strangemood.org",
              timeframe: "March 2022",
              description:
                "Design/Development for a protocol aiming to power decentralized video game marketplaces 🕹",
            }}
          />
          <Divider year="2021" />
          <Experience
            experience={{
              img: "/img/logos/crescent.png",
              title: "Growth Engineer",
              company: "Crescent",
              location: "Remote",
              url: "https://waitlist.crescent.app",
              timeframe: "October 2021 - March 2022",
              description:
                "Designed, engineered, and grew a waitlist to 30,000 people for a crypto-powered high-yield savings startup.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/sonarlotto.png",
              title: "Solo Builder",
              company: "SonarLotto",
              location: "Remote",
              url: "https://supabase-slack-clone-53c7.vercel.app/",
              timeframe: "October 2021",
              description:
                'A sweepstakes platform for a hot consumer social app that was <a href="https://www.crunchbase.com/acquisition/lens-protocol-acquires-sonar-9804--f93cb399">acquired by Lens Protocol</a>.',
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/foyer.png",
              title: "Founder",
              company: "Foyer",
              location: "Remote",
              url: "https://www.producthunt.com/posts/foyer",
              timeframe: "Summer 2021",
              description:
                "Featured <b>Top 5 Product of the Day</b> on ProductHunt 🏅 Launch a referral-powered waitlist using Notion.",
            }}
          />
          <Experience
            experience={{
              img: "/img/logos/unl.png",
              title: "Finished BS in Computer Science",
              company: "Raikes School of Computer Science and Management, UNL",
              location: "Lincoln, NE",
              url: "https://unl.edu",
              timeframe: "May 2021",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/crazyjoes.png",
              title: "Crazy Joe's Fireworks Admin System",
              company: "Crazy Joe's Fireworks",
              location: "Belton, MO",
              url: "https://crazyjoesfireworks.com",
              timeframe: "Summer 2021",
              description:
                "A robust cross-platform inventory system to manage order flow, inventory, pricing, and more at my family's fireworks stands.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/texts.png",
              title: "Texts.com Landing Page",
              company: "Texts.com",
              location: "Remote",
              url: "https://www.texts.com/",
              timeframe: "Spring 2021",
              description:
                'Designed the current landing page for Texts.com, a platform <a href="https://techcrunch.com/2023/10/24/wordpress-com-owner-buys-all-in-one-messaging-app-texts-com-for-50m/">acquired in 2023 for $50M</a> ⚡️',
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/unl.png",
              title: "UNL Meal Swipes Checker",
              company: "UNL",
              location: "Lincoln, NE",
              url: "https://play.google.com/store/apps/details?id=com.unlswipechecker",
              timeframe: "March 2021",
              description:
                "Hacked together a cross-platform mobile app to check UNL dining package usage - 850 DAU within a week.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/readmethis.png",
              title: "ReadMeThis",
              company: "ReadMeThis",
              location: "Remote",
              url: "https://readmethis.netlify.app/",
              timeframe: "February 2021",
              description:
                "Request long articles to be narrated by real humans in your favorite podcast client within 24 hours.",
            }}
          />
          <Experience
            experience={{
              url: "https://mirror.xyz/0x8dce5a7d1454Fa9fE0FA1ADE8Bb41308fB717ec8/RLXIZoSyW9F_uqWr_0KtcfklQg4gtCxQsaP3DnVkCA0",
              img: "/img/logos/heyday.png",
              title: "Co-founder",
              company: "Heyday",
              location: "Lincoln, NE",
              timeframe: "2019 — 2021",
              description:
                "Assembled a team of 5 to build and launch a personal financial management app designed specifically for cash-flow-negative college students.",
            }}
          />
          <Divider year="2020" />
          <Experience
            variant="sm"
            experience={{
              url: "https://distracted-kirch-0fd32b.netlify.app/",
              title: "Co-founder",
              company: "Findo",
              location: "Lincoln, NE",
              timeframe: "Spring 2020",
              description:
                "Lent $1k to COVID-19-affected UNL students at 0% interest, among other experiments.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/resolutionsapp.png",
              title: "The Resolutions App",
              company: "Resolutions App",
              location: "Remote",
              timeframe: "December 2020",
              description:
                "A minimalist, cross-platform mobile app for tracking New Year's Resolutions.",
            }}
          />
          <Experience
            experience={{
              img: "/img/logos/tigerpaw.png",
              title: "Product Manager | Design Studio",
              company: "Tigerpaw",
              location: "Lincoln, NE",
              timeframe: "2019 — 2020",
              description:
                "Led team of 5 to deliver a business intelligence Alexa Skill through a Raikes School Design Studio year-long capstone project.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              url: "https://raikes.unl.edu",
              img: "/img/logos/unl.png",
              title: "Raikes School Website Redesign",
              company: "UNL",
              location: "Lincoln, NE",
              timeframe: "Fall 2019 — May 2021",
              description:
                "Chosen by peers to completely overhaul the official UNL Raikes School of Computer Science & Management website.",
            }}
          />
          <Divider year="2019" />
          <Experience
            experience={{
              url: "https://hudl.com",
              img: "/img/logos/hudl.png",
              title: "Software Engineer Intern",
              company: "Hudl",
              location: "Lincoln, NE",
              timeframe: "Summer 2019",
              description:
                "Developed tools that 98% of American high school football coaches in the U.S. currently use to manage their game film.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/tda.png",
              title: "TD Ameritrade Tax Search",
              company: "TD Ameritrade",
              location: "Lincoln, NE",
              timeframe: "Spring 2019",
              description:
                "A Raikes School sophomore team project for the TD Ameritrade tax customer support team.",
            }}
          />
          <Experience
            experience={{
              img: "/img/logos/unl.png",
              title: "UNL Dance Marathon Check-In",
              company: "UNL",
              location: "Lincoln, NE",
              timeframe: "Spring 2019",
              description:
                "A realtime event check-in system for the largest student-run philanthropy on campus.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              url: "https://daypaper.herokuapp.com",
              img: "/img/logos/daypaper.png",
              title: "Founder",
              company: "DayPaper",
              location: "Remote",
              timeframe: "Spring 2019",
              description: "An elegant way to write, every day.",
            }}
          />
          <Divider year="2018" />
          <Experience
            variant="sm"
            experience={{
              url: "https://sponsorwhale.herokuapp.com",
              img: "/img/logos/sponsorwhale.png",
              title: "Founder",
              company: "SponsorWhale",
              location: "Remote",
              timeframe: "Summer — Fall 2018",
              description:
                "Accessible, automated affiliate opportunities for even the smallest of content creators.",
            }}
          />
          <Experience
            experience={{
              url: "https://payitgov.com",
              img: "/img/logos/payit.png",
              title: "Software Engineer Intern",
              company: "PayIt",
              location: "Kansas City, MO",
              timeframe: "Summer 2018",
              description:
                "Trusted as an 18 y/o at a startup backed by $100M+ in investment to build features for the state of Kansas.",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/pradl.png",
              title: "Co-founder",
              company: "Pradl",
              location: "Remote",
              timeframe: "Spring 2018",
              description:
                "A chatbot CRM system for Craigslist sellers (and my first failed startup!)",
            }}
          />
          <Divider year="2017" />
          <Experience
            experience={{
              img: "/img/logos/unl.png",
              title: "Started BS in Computer Science",
              company: "Raikes School of Computer Science and Management, UNL",
              location: "Lincoln, NE",
              url: "https://unl.edu",
              timeframe: "August 2017",
            }}
          />
          <Experience
            variant="sm"
            experience={{
              url: "https://apkcombo.com/munchy-the-fun-free-game/com.wongis.munchy/",
              img: "/img/logos/munchy.png",
              title: "Solo Builder",
              company: "Munchy",
              location: "Remote",
              timeframe: "Spring 2017",
              description:
                "My first real code — an Android mobile game with a brief stint on the Google Play Store.",
            }}
          />
          <Divider year="2016" />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/fam.png",
              title: "Crazy Joe's Fireworks & Sneads BBQ Websites",
              location: "Belton, MO",
              timeframe: "Summer 2016",
              description:
                'My earliest "programming" experience, making (very bad) websites for these family businesses.',
            }}
          />
          <Divider year="" />
          <Experience
            variant="sm"
            experience={{
              img: "/img/logos/youtube.png",
              title: "Creator",
              company: "YouTube Channels",
              location: "Remote",
              timeframe: "2012 - 2016",
              description:
                "Ran a few Minecraft YouTube channels with ~5,000 subscribers.",
            }}
          />
        </div>
      </div>

      <div className="technical-content">
        <div className="technical-description">
          <div className="github-frame">
            <h3>always building...</h3>
            <br />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="http://ghchart.rshah.org/nicksiscoe"
              alt="Nick's Github Chart"
            />
          </div>
          {/* <p>When I'm not shipping code or prototyping, I enjoy playing guitar, reading up on the latest startup news, watching anything Star Wars, getting up-to-date on Nebraska football recruiting, and indulging in some video games 🕹</p> */}
        </div>
        <div className="background">
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>Next.js</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>AWS Lambdas</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>SwiftUI</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C#</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C#</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <strong>Next.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <strong>SwiftUI</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>Kubernetes</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <i>Java</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>SwiftUI</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C#</p>
          <p>
            <strong>SwiftUI</strong>
          </p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>Supabase</p>
          <p>
            <strong>SwiftUI</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>SwiftUI</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>Next.js</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>Next.js</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>Next.js</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <i>Java</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <strong>SwiftUI</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C#</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <strong>Next.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>SwiftUI</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C</p>
          <p>
            <strong>SwiftUI</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C#</p>
          <p>
            <strong>JavaScript</strong>
          </p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <i>Java</i>
          </p>
          <p>MongoDB</p>
          <p>
            <i>Node.js</i>
          </p>
          <p>SQL</p>
          <p>
            <i>R</i>
          </p>
          <p>
            <strong>React Native</strong>
          </p>
          <p>Clojure</p>
          <p>
            <i>DialogFlow</i>
          </p>
          <p>Docker</p>
          <p>
            <strong>React.js</strong>
          </p>
          <p>
            <i>Python</i>
          </p>
          <p>Django</p>
          <p>
            <strong>HTML</strong>
          </p>
          <p>
            <strong>CSS</strong>
          </p>
          <p>C#</p>
          <p>
            <strong>JavaScript</strong>
          </p>
        </div>
      </div>
      <div className="testimonials">
        <div className="wf-container">
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/unlwebsite.png)" }}
          ></div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <Image
                src="/img/logos/hudl.png"
                width={25}
                height={25}
                alt="hudl"
              />
              <p>
                <i>
                  &quot;He&apos;s got a great attitude, a healthy sense of
                  humor, and an impressive work ethic.&quot;
                </i>
              </p>
              <h3>- Hudl Engineer</h3>
            </div>
          </div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{
              backgroundImage: "url(/img/portfolio/heydayinitialconcept.png)",
            }}
          ></div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/findoloan.png)" }}
          ></div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{
              backgroundImage: "url(/img/portfolio/unlmealswipeapp.gif)",
            }}
          ></div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <Image
                src="/img/logos/payit.png"
                width={25}
                height={25}
                alt="payit"
              />
              <p>
                <i>
                  &quot;I&apos;ve been so impressed and immensely thankful to
                  Nick for all of his endless hard work and organization...
                  THANK YOU Nick!&quot;
                </i>
              </p>
              <h3>- Director of Software Engineering</h3>
            </div>
          </div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/textsearlylp.png)" }}
          ></div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/sponsorwhale.gif)" }}
          ></div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <Image
                src="/img/logos/crescent.png"
                width={25}
                height={25}
                alt="crescent"
              />
              <p>
                &quot;[Nick&apos;s] been crushing it. The waitlist system is
                💯&quot;
              </p>
              <h3>- Crescent Growth Lead</h3>
            </div>
          </div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/resolutions.gif)" }}
          ></div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/curves.png)" }}
          ></div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <Image src="/img/logos/me.png" width={25} height={25} alt="me" />
              <p>
                <i>&quot;I love to design and code things&quot;</i>
              </p>
              <h3>- Nick Siscoe</h3>
            </div>
          </div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <h2>🏆</h2>
              <p>
                Awarded &quot;Most Outstanding Technical Software Project&quot;
              </p>
              <h3>TD Ameritrade Team Project</h3>
            </div>
          </div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/phonenumber.png)" }}
          ></div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{
              backgroundImage: "url(/img/portfolio/waitlistpalmtree.png)",
            }}
          ></div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <Image
                src="/img/logos/hudl.png"
                width={25}
                height={25}
                alt="hudl"
              />
              <p>
                <i>
                  &quot;Nick has been very impressive. He has ramped up quicker
                  than any intern that I have worked with in the past.&quot;
                </i>
              </p>
              <h3>- Hudl Senior Engineer</h3>
            </div>
          </div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/wayform.png)" }}
          ></div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <Image
                src="/img/logos/hudl.png"
                width={25}
                height={25}
                alt="hudl"
              />
              <p>
                &quot;He&apos;s always attacking problems with the user in
                mind!&quot;
              </p>
              <h3>- Hudl Designer</h3>
            </div>
          </div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/sonarlotto.png)" }}
          ></div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/taskpop.gif)" }}
          ></div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <h2>🏆</h2>
              <p>Semi-Finalist</p>
              <h3>First National Bank&apos;s &quot;The Pitch&quot; 2019</h3>
            </div>
          </div>
          <div
            className="wf-box testimonial testimonial-image"
            style={{ backgroundImage: "url(/img/portfolio/billboardbro.png)" }}
          ></div>
          <div className="wf-box testimonial">
            <div className="testimonial-content">
              <h2>🏆</h2>
              <p>2019 UNL Geography Bee Champion</p>
              <h3>(lol)</h3>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <br />
        <div className="footer-upper-content">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              nobody:
              <br />
              literally no one:
              <br />
              you, visiting my website:
              <br />
              my personal website: My grandfather started selling fireworks on
              the back of his pickup truck in 1967. To this day, my family sells
              fireworks next to Snead&#39;s BBQ — started in 1956 — which my
              family also operates. When I&#39;m n..
            </p>
            &mdash; nick siscoe (@siscoe_){" "}
            <a href="https://twitter.com/siscoe_/status/1356361434288902144?ref_src=twsrc%5Etfw">
              February 1, 2021
            </a>
          </blockquote>
          <br />
          {/* <br/>
        <div className="get-a-text">
          <h3>👇 Get a text the next time I ship something cool.</h3>
          <br/>
          <iframe id="chili-form" src="https://chilipepper.io/form/xhot-brown-pimentos-4e3b8b25-8571-44a3-a6ab-461d1cec06cd" scrolling="no">
          </iframe>
        </div> */}
        </div>
        <br />
        <br />
        <p>© me</p>
      </footer>
    </>
  );
}
