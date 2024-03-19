import React from "react";
import "./App.css";
import { Link } from "react-scroll";
import image from "./Assets/images/ieeecekallooppara.png";
import vipin from "./Assets/vipin.jpg";
import geetha from "./Assets/geetha.png";
import andrew from "./Assets/andrew.png";
import rethik from "./Assets/BlackCoat.png";
import Logo from "./Assets/IHRD Logo White.png";
import Inocall from "./Assets/ion_call.png";
import Social from "./Assets/social media.png";
import CostInfo from "./Assets/leftcontent.png";

function App() {
  return (
    <div className="App">
      <main>
        <div className="eliptop1 absolute"></div>

        {/* Navbar */}
        <div className="navbar flex items-center justify-center">
          <ul className="flex flex-row justify-around mt-10 mb-24">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Speakers"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="Topics"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Topics
              </Link>
            </li>
            <li>
              <button className="btn">
                <Link
                  to="Register"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Register Now
                </Link>
              </button>
            </li>
          </ul>
          {/* Mobile menu toggle button */}
          <button className="mobile-menu">Menu</button>
          {/* Mobile menu */}

          <ul className="mobile-menu-items">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Speakers"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="Topics"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Topics
              </Link>
            </li>
            <li>
              <button className="btn">
                <Link
                  to="Register"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Register Now
                </Link>
              </button>
            </li>
          </ul>
        </div>

        {/* Section one landing page */}
        <section className="s1_landing flex justify-center align-middle flex-col mt-32">
          <h2>NATIONAL CONFERENCE</h2>
          <h1>CYBER PHYSICAL SYSTEMS</h1>
          <p>April 18th-20th 2024</p>
          <div className="flex justify-center text-center m-5">
            <div className="college_name flex justify-center">
              <img
                src={require("./Assets/images/location.png")}
                alt=""
                className="location_img"
              />
              <h4 className="mt-1 font-medium">College of Engineering Kallooppara</h4>
            </div>
          </div>
        </section>

        {/* Animated text */}
        <div className="text-container mt-24">
          <span className="animated-text">
            National Conference ...{" "}
            <span className="scrool2">CYBER PHYSICAL SYSTEM . . </span>
            <span>April 18th -20th 2024 </span>
          </span>
        </div>

        {/* About section */}
        <section
          className="about flex flex-col justify-center items-center"
          id="About"
        >
          <div className="elipabout absolute"></div>
          <h1>About</h1>
          <p className="w-2/3">
            Cyber-physical security is vital in our interconnected world, where
            digital systems merge with physical infrastructure. As technology
            becomes more ingrained in daily life, vulnerabilities in these
            systems emerge. A comprehensive strategy is needed, combining cyber
            security measures with physical security protocols. Strong defenses
            against cyber threats and resilient physical components are
            essential for infrastructure protection and data security. The rise
            of technologies like the Internet of Things (IoT) and smart devices
            intensifies the importance of cyber-physical security. While
            offering convenience, they also broaden the attack surface for
            malicious actors. Protecting critical infrastructure, from power
            grids to healthcare facilities, demands continuous vigilance and
            adaptive security measures. Establishing global standards,
            conducting regular risk assessments, and fostering cybersecurity
            awareness are pivotal. Integrating artificial intelligence and
            machine learning enhances threat detection and response capabilities
            in real time. Understanding that data breaches transcend the digital
            realm is crucial. Their potential impact on public safety, economic
            stability, and national security underscores the significance of
            robust cyber-physical security measures.
          </p>
        </section>

        {/* About-section */}

        <section className="container-map  flex flex-col justify-center items-center">
          <h1>Venue</h1>

          <div className="map">
            <iframe
              id="myIframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.096266149546!2d76.63926607502357!3d9.412952990664506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0624ce9af6f8b5%3A0x508c3c7d007ea20a!2sCollege%20Of%20Engineering%20Kalloopara%20Thiruvalla!5e0!3m2!1sen!2sin!4v1710350821293!5m2!1sen!2sin"
              width={500}
              height={450}
              style={{ border: 3 }}
              allowFullScreen
              loading="lazy"
              title="Conference Location"
            ></iframe>
            <div className="location">
              {" "}
              College of Engineering Kallooppara
              <br />
              Kadamankulam P.O
              <br />
              Thiruvalla, Pathanamthitta
              <br />
              Kerala, India
            </div>
          </div>
        </section>
        {/*speakers-section*/}

        <section
          className="conference-topics mt-60 flex flex-col justify-center items-center"
          id="Speakers"
        >
          <h1 className="conference-heading">SPEAKERS</h1>
          <div className="speakers-cards ">
            <div class="card">
              <img class="card-image" src={geetha} />
              <div class="category">Dr. GEETHA S</div>
              <div class="heading">
                {" "}
                Professor and Associate Dean (Research), VIT Chennai.
              </div>
            </div>

            <div class="card">
              <img class="card-image" src={rethik} />
              <div class="category">Dr. RAGESH G K</div>
              <div class="heading">
                {" "}
                Associate Professor, Indian Institute of Information Technology
                Kottayam.
              </div>
            </div>

            <div class="card">
              <img class="card-image" src={andrew} />
              <div class="category"> Dr. DITTIN ANDREWS </div>
              <div class="heading">
                {" "}
                Joint Director, Cyber Security, CDAC, Kerala.
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={vipin} />
              <div class="category"> Mr. VIPIN GEORGE </div>
              <div class="heading"> Faculty Kerala Police Academy.</div>
            </div>
          </div>
        </section>
        {/* Conference Topics Section */}
        <section
          className="conference-topics mt-60 flex flex-col justify-center items-center"
          id="Topics"
        >
          <h1 className="conference-heading">CONFERENCE TOPICS</h1>
          <div className="boxes-container">
            <div className="box">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g fill="#fcfcfc">
                    {" "}
                    <path d="M8 0a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1A.75.75 0 018 0zM13.28 2.22a.75.75 0 010 1.06l-.707.707a.75.75 0 11-1.06-1.06l.707-.707a.75.75 0 011.06 0zM2.72 3.28a.75.75 0 011.06-1.06l.707.707a.75.75 0 01-1.06 1.06L2.72 3.28zM15.5 7.5a.75.75 0 01-.75.75h-1a.75.75 0 010-1.5h1a.75.75 0 01.75.75zM2.25 8.25a.75.75 0 000-1.5h-1a.75.75 0 000 1.5h1zM6.25 15.25A.75.75 0 017 14.5h2A.75.75 0 019 16H7a.75.75 0 01-.75-.75z"></path>{" "}
                    <path
                      fill-rule="evenodd"
                      d="M8 3.5A4.5 4.5 0 003.5 8c0 1.53.926 2.465 1.718 3.264l.2.203c.05.05.081.124.081.208.001 1.008.818 1.825 1.826 1.825H8.69c1 0 1.811-.81 1.811-1.81 0-.083.033-.159.088-.213l.067-.066C11.492 10.592 12.5 9.605 12.5 8A4.5 4.5 0 008 3.5zM5 8a3 3 0 016 0c0 .928-.54 1.502-1.462 2.406-.347.34-.538.803-.538 1.283a.31.31 0 01-.31.311H7.324A.326.326 0 017 11.674c0-.461-.175-.914-.507-1.255l-.115-.117C5.49 9.397 5 8.894 5 8z"
                      clip-rule="evenodd"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              INTERNET OF THINGS
            </div>
            <div className="box">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.0175 19C10.6601 19 10.3552 18.7347 10.297 18.373C10.2434 18.0804 10.038 17.8413 9.76171 17.75C9.53658 17.6707 9.31645 17.5772 9.10261 17.47C8.84815 17.3365 8.54289 17.3565 8.30701 17.522C8.02156 17.7325 7.62943 17.6999 7.38076 17.445L6.41356 16.453C6.15326 16.186 6.11944 15.7651 6.33361 15.458C6.49878 15.2105 6.52257 14.8914 6.39601 14.621C6.31262 14.4332 6.23906 14.2409 6.17566 14.045C6.08485 13.7363 5.8342 13.5051 5.52533 13.445C5.15287 13.384 4.8779 13.0559 4.87501 12.669V11.428C4.87303 10.9821 5.18705 10.6007 5.61601 10.528C5.94143 10.4645 6.21316 10.2359 6.33751 9.921C6.37456 9.83233 6.41356 9.74433 6.45451 9.657C6.61989 9.33044 6.59705 8.93711 6.39503 8.633C6.1424 8.27288 6.18119 7.77809 6.48668 7.464L7.19746 6.735C7.54802 6.37532 8.1009 6.32877 8.50396 6.625L8.52638 6.641C8.82735 6.84876 9.21033 6.88639 9.54428 6.741C9.90155 6.60911 10.1649 6.29424 10.2375 5.912L10.2473 5.878C10.3275 5.37197 10.7536 5.00021 11.2535 5H12.1115C12.6248 4.99976 13.0629 5.38057 13.1469 5.9L13.1625 5.97C13.2314 6.33617 13.4811 6.63922 13.8216 6.77C14.1498 6.91447 14.5272 6.87674 14.822 6.67L14.8707 6.634C15.2842 6.32834 15.8528 6.37535 16.2133 6.745L16.8675 7.417C17.1954 7.75516 17.2366 8.28693 16.965 8.674C16.7522 8.99752 16.7251 9.41325 16.8938 9.763L16.9358 9.863C17.0724 10.2045 17.3681 10.452 17.7216 10.521C18.1837 10.5983 18.5235 11.0069 18.525 11.487V12.6C18.5249 13.0234 18.2263 13.3846 17.8191 13.454C17.4842 13.5199 17.2114 13.7686 17.1083 14.102C17.0628 14.2353 17.0121 14.3687 16.9562 14.502C16.8261 14.795 16.855 15.1364 17.0323 15.402C17.2662 15.7358 17.2299 16.1943 16.9465 16.485L16.0388 17.417C15.7792 17.6832 15.3698 17.7175 15.0716 17.498C14.8226 17.3235 14.5001 17.3043 14.2331 17.448C14.0428 17.5447 13.8475 17.6305 13.6481 17.705C13.3692 17.8037 13.1636 18.0485 13.1099 18.346C13.053 18.7203 12.7401 18.9972 12.3708 19H11.0175Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9747 12C13.9747 13.2885 12.9563 14.333 11.7 14.333C10.4437 14.333 9.42533 13.2885 9.42533 12C9.42533 10.7115 10.4437 9.66699 11.7 9.66699C12.9563 9.66699 13.9747 10.7115 13.9747 12Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              CYBER PHYSICAL SYSTEM
            </div>
            <div className="box">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18.5A2.5 2.5 0 0 1 7.5 20h0a2.5 2.5 0 0 1-2.4-3.2 3 3 0 0 1-.8-5.2 2.5 2.5 0 0 1 .9-3.2A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 5 .5m0 13v-13m0 13a2.5 2.5 0 0 0 4.5 1.5h0a2.5 2.5 0 0 0 2.4-3.2 3 3 0 0 0 .9-5.2 2.5 2.5 0 0 0-1-3.2A2.5 2.5 0 0 0 17 5a2.5 2.5 0 0 0-5 .5m-8 5a2.5 2.5 0 0 1 3.5-2.3m-.3 8.6a3 3 0 0 1-3-5.2M20 10.5a2.5 2.5 0 0 0-3.5-2.3m.3 8.6a3 3 0 0 0 3-5.2"
                />
              </svg>
              MACHINE LEARNING
            </div>
            <div className="box">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 7.2c4.4 0 8-1.2 8-2.6C20 3.2 16.4 2 12 2S4 3.2 4 4.6C4 6 7.6 7.2 12 7.2ZM12 22c5 0 8-1.7 8-2.6V15h-.2a7.8 7.8 0 0 1-1.3.7l-.2.1c-2 .7-4.2 1-6.3 1a19 19 0 0 1-6.3-1h-.2a10.1 10.1 0 0 1-1.3-.7L4 15v4.4c0 1 3 2.6 8 2.6Zm7-14c-.1.2-.3.2-.5.3l-.2.1c-2 .7-4.2 1-6.3 1a19 19 0 0 1-6.3-1h-.2a10.2 10.2 0 0 1-1.3-.7L4 7.6V12c0 1 3 2.6 8 2.6s8-1.7 8-2.6V7.6h-.2a7.8 7.8 0 0 1-.7.5Z" />
              </svg>
              BIG DATA
            </div>
            <div className="box">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.25 37.4999H37.5V43.7499H31.25V37.4999ZM56.25 37.4999H62.5V43.7499H56.25V37.4999ZM79.1504 68.7499C80.2897 68.7499 81.3639 68.9615 82.373 69.3847C83.3822 69.8079 84.2611 70.4101 85.0098 71.1913C85.7585 71.9726 86.3607 72.8678 86.8164 73.8769C87.2721 74.886 87.5 75.9602 87.5 77.0995V99.9999H81.25V77.0995C81.25 76.5136 81.0547 76.0253 80.6641 75.6347C80.2734 75.2441 79.7689 75.0325 79.1504 74.9999H14.5996C14.0137 74.9999 13.5254 75.1952 13.1348 75.5859C12.7441 75.9765 12.5326 76.481 12.5 77.0995V99.9999H6.25V77.0995C6.25 75.9602 6.46159 74.886 6.88477 73.8769C7.30794 72.8678 7.91016 71.9889 8.69141 71.2402C9.47266 70.4915 10.3516 69.8892 11.3281 69.4335C12.3047 68.9778 13.3952 68.7499 14.5996 68.7499H31.25V62.4999H27.0996C25.9603 62.4999 24.8861 62.2883 23.877 61.8652C22.8678 61.442 21.9727 60.8398 21.1914 60.0585C20.4102 59.2773 19.8242 58.3984 19.4336 57.4218C19.043 56.4452 18.8151 55.3547 18.75 54.1503V49.9999H12.5V37.4999H18.75V33.3495C18.75 32.2102 18.9616 31.136 19.3848 30.1269C19.8079 29.1178 20.4102 28.2389 21.1914 27.4902C21.9727 26.7415 22.8516 26.1392 23.8281 25.6835C24.8047 25.2278 25.8952 24.9999 27.0996 24.9999H43.75V14.7948C42.806 14.2415 42.0573 13.4765 41.5039 12.4999C40.9505 11.5234 40.6576 10.4817 40.625 9.37492C40.625 8.49601 40.7878 7.68221 41.1133 6.93351C41.4388 6.18481 41.8783 5.53377 42.4316 4.98039C42.985 4.427 43.6523 3.97127 44.4336 3.6132C45.2148 3.25513 46.0286 3.09237 46.875 3.12492C47.7539 3.12492 48.5677 3.28768 49.3164 3.6132C50.0651 3.93872 50.7161 4.37817 51.2695 4.93156C51.8229 5.48494 52.2786 6.15226 52.6367 6.93351C52.9948 7.71476 53.1576 8.52856 53.125 9.37492C53.125 10.4817 52.8483 11.5234 52.2949 12.4999C51.7415 13.4765 50.9766 14.2415 50 14.7948V24.9999H66.6504C67.7897 24.9999 68.8639 25.2115 69.873 25.6347C70.8822 26.0579 71.7611 26.6601 72.5098 27.4413C73.2585 28.2226 73.8607 29.1178 74.3164 30.1269C74.7721 31.136 75 32.2102 75 33.3495V37.4999H81.25V49.9999H75V54.1503C75 55.2896 74.7884 56.3639 74.3652 57.373C73.9421 58.3821 73.3398 59.2773 72.5586 60.0585C71.7773 60.8398 70.8822 61.4257 69.873 61.8163C68.8639 62.207 67.7897 62.4348 66.6504 62.4999H62.5V68.7499H79.1504ZM25 54.1503C25 54.7362 25.1953 55.2245 25.5859 55.6152C25.9766 56.0058 26.4811 56.2174 27.0996 56.2499H66.6504C67.2363 56.2499 67.7246 56.0546 68.1152 55.664C68.5059 55.2734 68.7174 54.7688 68.75 54.1503V33.3495C68.75 32.7636 68.5547 32.2753 68.1641 31.8847C67.7734 31.4941 67.2689 31.2825 66.6504 31.2499H27.0996C26.5137 31.2499 26.0254 31.4452 25.6348 31.8359C25.2441 32.2265 25.0326 32.731 25 33.3495V54.1503ZM37.5 68.7499H56.25V62.4999H37.5V68.7499Z"
                  fill="white"
                />
              </svg>
              ARTIFICIAL INTELLIGENCE
            </div>

            <div className="box">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M37.5 37.5V62.5H62.5V37.5H37.5Z" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.9375 6.25C34.6943 6.25 33.502 6.74386 32.6229 7.62294C31.7439 8.50201 31.25 9.6943 31.25 10.9375V18.75C27.9348 18.75 24.7554 20.067 22.4112 22.4112C20.067 24.7554 18.75 27.9348 18.75 31.25H10.9375C9.6943 31.25 8.50201 31.7439 7.62294 32.6229C6.74386 33.502 6.25 34.6943 6.25 35.9375C6.25 37.1807 6.74386 38.373 7.62294 39.2521C8.50201 40.1311 9.6943 40.625 10.9375 40.625H18.75V45.3125H10.9375C9.6943 45.3125 8.50201 45.8064 7.62294 46.6854C6.74386 47.5645 6.25 48.7568 6.25 50C6.25 51.2432 6.74386 52.4355 7.62294 53.3146C8.50201 54.1936 9.6943 54.6875 10.9375 54.6875H18.75V59.375H10.9375C9.6943 59.375 8.50201 59.8689 7.62294 60.7479C6.74386 61.627 6.25 62.8193 6.25 64.0625C6.25 65.3057 6.74386 66.498 7.62294 67.3771C8.50201 68.2561 9.6943 68.75 10.9375 68.75H18.75C18.75 72.0652 20.067 75.2446 22.4112 77.5888C24.7554 79.933 27.9348 81.25 31.25 81.25V89.0625C31.25 90.3057 31.7439 91.498 32.6229 92.3771C33.502 93.2561 34.6943 93.75 35.9375 93.75C37.1807 93.75 38.373 93.2561 39.2521 92.3771C40.1311 91.498 40.625 90.3057 40.625 89.0625V81.25H45.3125V89.0625C45.3125 90.3057 45.8064 91.498 46.6854 92.3771C47.5645 93.2561 48.7568 93.75 50 93.75C51.2432 93.75 52.4355 93.2561 53.3146 92.3771C54.1936 91.498 54.6875 90.3057 54.6875 89.0625V81.25H59.375V89.0625C59.375 90.3057 59.8689 91.498 60.7479 92.3771C61.627 93.2561 62.8193 93.75 64.0625 93.75C65.3057 93.75 66.498 93.2561 67.3771 92.3771C68.2561 91.498 68.75 90.3057 68.75 89.0625V81.25C72.0652 81.25 75.2446 79.933 77.5888 77.5888C79.933 75.2446 81.25 72.0652 81.25 68.75H89.0625C90.3057 68.75 91.498 68.2561 92.3771 67.3771C93.2561 66.498 93.75 65.3057 93.75 64.0625C93.75 62.8193 93.2561 61.627 92.3771 60.7479C91.498 59.8689 90.3057 59.375 89.0625 59.375H81.25V54.6875H89.0625C90.3057 54.6875 91.498 54.1936 92.3771 53.3146C93.2561 52.4355 93.75 51.2432 93.75 50C93.75 48.7568 93.2561 47.5645 92.3771 46.6854C91.498 45.8064 90.3057 45.3125 89.0625 45.3125H81.25V40.625H89.0625C90.3057 40.625 91.498 40.1311 92.3771 39.2521C93.2561 38.373 93.75 37.1807 93.75 35.9375C93.75 34.6943 93.2561 33.502 92.3771 32.6229C91.498 31.7439 90.3057 31.25 89.0625 31.25H81.25C81.25 27.9348 79.933 24.7554 77.5888 22.4112C75.2446 20.067 72.0652 18.75 68.75 18.75V10.9375C68.75 9.6943 68.2561 8.50201 67.3771 7.62294C66.498 6.74386 65.3057 6.25 64.0625 6.25C62.8193 6.25 61.627 6.74386 60.7479 7.62294C59.8689 8.50201 59.375 9.6943 59.375 10.9375V18.75H54.6875V10.9375C54.6875 9.6943 54.1936 8.50201 53.3146 7.62294C52.4355 6.74386 51.2432 6.25 50 6.25C48.7568 6.25 47.5645 6.74386 46.6854 7.62294C45.8064 8.50201 45.3125 9.6943 45.3125 10.9375V18.75H40.625V10.9375C40.625 9.6943 40.1311 8.50201 39.2521 7.62294C38.373 6.74386 37.1807 6.25 35.9375 6.25ZM68.75 28.125C69.5788 28.125 70.3737 28.4542 70.9597 29.0403C71.5458 29.6263 71.875 30.4212 71.875 31.25V68.75C71.875 69.5788 71.5458 70.3737 70.9597 70.9597C70.3737 71.5458 69.5788 71.875 68.75 71.875H31.25C30.4212 71.875 29.6263 71.5458 29.0403 70.9597C28.4542 70.3737 28.125 69.5788 28.125 68.75V31.25C28.125 30.4212 28.4542 29.6263 29.0403 29.0403C29.6263 28.4542 30.4212 28.125 31.25 28.125H68.75Z"
                  fill="white"
                />
              </svg>
              WIRELESS SENSOR 
            </div>
            <div className="box">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.0001 91.6666C40.3473 89.236 32.3779 83.6971 26.0918 75.0499C19.8056 66.4027 16.664 56.8027 16.6667 46.2499V20.8333L50.0001 8.33325L83.3334 20.8333V46.2499C83.3334 56.8055 80.1917 66.4069 73.9084 75.0541C67.6251 83.7013 59.6556 89.2388 50.0001 91.6666ZM50.0001 82.9166C56.7362 80.8333 62.3612 76.718 66.8751 70.5708C71.389 64.4235 74.0279 57.5666 74.7917 49.9999H50.0001V17.1874L25.0001 26.5624V48.1249C25.0001 48.611 25.0695 49.236 25.2084 49.9999H50.0001V82.9166Z"
                  fill="white"
                />
              </svg>
              CYBER SECURITY
            </div>
          </div>
        </section>

        {/* Ticket section */}

        <section
          className="ticket-section mt-60 flex flex-col justify-center items-center"
          id="Register"
        >
          <div className="elipabout absolute"></div>
        <div className="register-heads">
          <h1>Register Now: </h1>
          <div className="h2-link">
            Go to Registration Link :<t />{" "}
            <a
              className="link-color"
              href="https://docs.google.com/forms/d/e/1FAIpQLScSehlYCjsUGeilNDN6h0FdMAp2tvM1eApYbTeFYG1nF2yx2w/viewform"
            >
              click here
            </a>
          </div></div>
          <div className="register-imgs">

          <img className="upi-image" src={image} alt="For Payment ->" />
          <div className="left-text">
            <img src={CostInfo} alt="" className="costinfo" />
          </div></div>
          
        
        </section>
        <div className="text-container-reg mt-24">
          <span className="animated-text">
            Register Date Extended...{" "}
            <span className="scrool2"> 30 March 2024  . </span>
          </span></div>
        <footer className="footer">
          <div className="container-footer">
            <div className="footer-content">
              <div className="left-side">
                <img src={Logo} alt="Icon" className="icon" />
              </div>

              <p>College of Engineering Kallooppara</p>
              <p>Kadamankulam P.O</p>
              <p>Thiruvalla, Pathanamthitta</p>
              <p>Kerala, India</p>
            </div>
            <div className="right-side">
              <div className=" text-red-800 contact-head ">Contact Us</div>
              <div className="contact-infos">
                <img src={Inocall} alt="Icon" className="icon-call" />
                <div className="contact-data">
                  <p>Dr. Renu George: +91 9747401150</p>
                  <p>Dr. Lekha R Nair: +91 9496570592</p>
                  <p>Prof. Leena Thomas: +91 9400428880</p>
                </div>
              </div>
            </div>
          </div>
          <div class="social">
            <img src={Social} alt="Icon" class="icon" />
          </div>
          <hr />
          <p>&copy; 2024 | Designed and developed by CEK Web Team</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
