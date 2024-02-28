import React from "react";
import "./App.css";


function App() {
  return (
    <div className="App">
      <main>
        <div className="eliptop1 absolute"></div>

        {/* Navbar */}
        <div className="navbar flex items-center justify-center">
          <ul className="flex flex-row justify-around mt-10 mb-24">
            <li>Home</li>
            <li>About</li>
            <li>Speakers</li>
            <li>Contact</li>
            <li>
              <button className="btn">Get Ticket</button>
            </li>
          </ul>
          {/* Mobile menu toggle button */}
          <button className="mobile-menu">Menu</button>
          {/* Mobile menu */}

          <ul className="mobile-menu-items">
            <li>Home</li>
            <li>About</li>
            <li>Speakers</li>
            <li>Contact</li>
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
              <h4 className="mt-1">College of Engineering Kallooppara</h4>
            </div>
          </div>
        </section>

        {/* Animated text */}
        <div className="text-container mt-24">
          <span className="animated-text">
            National Conference ...{" "}
            <span className="scrool2">CYBER PHYSICAL SYSTEM . . </span>
            <span>April 18th -20th  2024 </span>
          </span>
        </div>

        {/* About section */}
        <section className="about flex flex-col justify-center items-center">
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

        {/* Conference Topics Section */}
        <section className="conference-topics mt-60 flex flex-col justify-center items-center">
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
                  d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2v2Zm0 8h8m-8 0H6a2 2 0 1 0 2 2v-2Zm8 0V8m0 8h2a2 2 0 1 1-2 2v-2Zm0-8h2a2 2 0 1 0-2-2v2Z"
                />
              </svg>
              ARTIFICIAL INTELLIGENCE AND COMPUTING
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
                  d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2v2Zm0 8h8m-8 0H6a2 2 0 1 0 2 2v-2Zm8 0V8m0 8h2a2 2 0 1 1-2 2v-2Zm0-8h2a2 2 0 1 0-2-2v2Z"
                />
              </svg>
              WIRELESS SENSOR TECHNOLOGY
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
                />
              </svg>
              CYBER SECURITY
            </div>
          </div>
        </section>

     {/* Ticket section */}

      <section className="ticket-section mt-60 flex flex-col justify-center items-center">
      <div className="elipabout absolute"></div>
      <h1>Tickets Now: </h1>
      
      <div className="h2-link">Go to Registration Link :<t/> <a className="link-color">click here</a> </div>
      <img className="upi-image" src="https://i.postimg.cc/wByrZ6nX/ieeecekallooppara-sbi-pdf.png" alt="For Payment ->" />
    </section>

    {/* Footer section */}

        <footer className="footer">
          <div className="container-footer">
            <div className="footer-content">
              <b>Reach Us</b>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.0962058777054!2d76.63926607477896!3d9.412958282861096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0624ce9af6f8b5%3A0x508c3c7d007ea20a!2sCollege%20Of%20Engineering%20Kalloopara%20Thiruvalla!5e0!3m2!1sen!2sin!4v1708963733671!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <p>College of Engineering Kallooppara</p>
              <p>Kadamankulam P.O</p>
              <p>Thiruvalla, Pathanamthitta</p>
              <p>Kerala, India</p>
            </div>
            <div className="footer-right-section">
              <b>Useful Links</b>
              <p>Registration Link</p>
              <p>IEEE SB CEK</p>
              <b>GET IN TOUCH</b>
            </div>
          </div>
          <hr />
          <p> Copyright &copy; 2024 - CodeHUB.Inc  </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
