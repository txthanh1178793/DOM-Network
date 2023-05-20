import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Html } from 'next/document'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className="is-ready body">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 40 40"
        display="none" width="0" height="0">
        <symbol id="icon-67ad41ecc66a1b1cd00d0d3b20c00017" viewBox="0 0 40 40">
          <path
            d="M34.1,19.9c0,0.3-0.1,0.3-0.1,0.4L21.3,33.1c-0.1,0.1-0.1,0.1-0.4,0.1c-0.3,0-0.3-0.1-0.4-0.1L19,31.6 c-0.1-0.1-0.1-0.1-0.1-0.4s0.1-0.3,0.1-0.4l9.2-9.2H5.8c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0c-0.1-0.1-0.1-0.2-0.1-0.4v-2.5 c0-0.2,0.1-0.4,0.1-0.5c0,0,0.1,0,0.2,0h22.4L19,9c-0.1-0.1-0.1-0.1-0.1-0.4c0-0.3,0.1-0.3,0.1-0.4l1.5-1.5c0.1-0.1,0.1-0.1,0.4-0.1 c0.3,0,0.3,0.1,0.4,0.1L34,19.5C34,19.6,34.1,19.6,34.1,19.9z">
          </path>
        </symbol>
        <symbol id="icon-8a75e9205b2d7697ad826d592ebf05f0" viewBox="0 0 40 40">
          <path
            d="M19.8,34.2c-0.3,0-0.3-0.1-0.4-0.1L6.6,21.4c-0.1-0.1-0.1-0.1-0.1-0.4c0-0.3,0.1-0.3,0.1-0.4l1.5-1.5 C8.2,19.1,8.2,19,8.5,19s0.3,0.1,0.4,0.1l9.2,9.2V5.9c0-0.1,0-0.2,0-0.2c0,0,0,0,0,0c0.1-0.1,0.2-0.1,0.4-0.1H21 c0.2,0,0.4,0.1,0.5,0.1c0,0,0,0.1,0,0.2v22.4l9.2-9.2c0.1-0.1,0.1-0.1,0.4-0.1c0.3,0,0.3,0.1,0.4,0.1l1.5,1.5 c0.1,0.1,0.1,0.1,0.1,0.4c0,0.3-0.1,0.3-0.1,0.4L20.2,34.1C20.1,34.1,20.1,34.2,19.8,34.2z">
          </path>
        </symbol>
        <symbol id="icon-0c4db87eff374f0f1ef47f8f043f0132" viewBox="0 0 40 40">
          <path
            d="M36.3,10.2c-1,1.3-2.1,2.5-3.4,3.5c0,0.2,0,0.4,0,1c0,1.7-0.2,3.6-0.9,5.3c-0.6,1.7-1.2,3.5-2.4,5.1 c-1.1,1.5-2.3,3.1-3.7,4.3c-1.4,1.2-3.3,2.3-5.3,3c-2.1,0.8-4.2,1.2-6.6,1.2c-3.6,0-7-1-10.2-3c0.4,0,1.1,0.1,1.5,0.1 c3.1,0,5.9-1,8.2-2.9c-1.4,0-2.7-0.4-3.8-1.3c-1.2-1-1.9-2-2.2-3.3c0.4,0.1,1,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-1.4-0.3-2.7-1.1-3.7-2.3s-1.4-2.6-1.4-4.2v-0.1c1,0.6,2,0.9,3,0.9c-1-0.6-1.5-1.3-2.2-2.4c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3,1-3.4 c1.5,2.1,3.6,3.6,6,4.9s4.9,2,7.6,2.1c-0.1-0.6-0.1-1.1-0.1-1.4c0-1.8,0.8-3.5,2-4.7c1.2-1.2,2.9-2,4.7-2c2,0,3.6,0.8,4.8,2.1 c1.4-0.3,2.9-0.9,4.2-1.5c-0.4,1.5-1.4,2.7-2.9,3.6C33.8,11.2,35.1,10.9,36.3,10.2L36.3,10.2z">
          </path>
        </symbol>
        <symbol id="icon-a8ac94bab98aae41181aaa5bee69fa75" viewBox="0 0 40 40">
          <path
            d="M23.6,5.1L23.6,5.1H9.2v29.7h5.9v-8.9h8.4c5.7,0,10.4-4.7,10.4-10.4S29.3,5.1,23.6,5.1L23.6,5.1z M23.6,20L23.6,20h-8.4 v-8.9h8.4c2.5,0,4.5,2,4.5,4.5S26,20,23.6,20z">
          </path>
        </symbol>
        <symbol id="icon-8c4b37645de3c276d895d87df51ba614" viewBox="0 0 40 40">
          <path
            d="M36,20.3c0,3.5-1,6.6-3.1,9.4c-2,2.8-4.7,4.7-7.9,5.8c-0.4,0.1-0.6,0-0.8-0.1c-0.2-0.2-0.3-0.4-0.3-0.6v-4.4 c0-1.3-0.4-2.3-1.1-3c0.8-0.1,1.5-0.2,2.1-0.4c0.6-0.2,1.3-0.4,2-0.8c0.7-0.4,1.2-0.8,1.7-1.4c0.5-0.5,0.8-1.3,1.1-2.2 s0.4-2,0.4-3.1c0-1.7-0.5-3.1-1.6-4.3c0.5-1.3,0.5-2.7-0.2-4.2c-0.4-0.1-1,0-1.7,0.2c-0.7,0.3-1.4,0.6-1.9,0.9L24,12.5 c-1.3-0.4-2.6-0.5-4-0.5s-2.7,0.2-4,0.5c-0.2-0.2-0.5-0.3-0.9-0.6c-0.4-0.2-0.9-0.5-1.7-0.8c-0.8-0.3-1.4-0.4-1.8-0.3 c-0.6,1.6-0.7,3-0.1,4.2c-1.1,1.2-1.6,2.6-1.6,4.3c0,1.2,0.1,2.2,0.4,3.1s0.6,1.6,1.1,2.2s1,1,1.7,1.4c0.7,0.4,1.3,0.6,2,0.8 c0.6,0.2,1.3,0.3,2.1,0.4c-0.6,0.5-0.9,1.2-1,2.1c-0.3,0.1-0.6,0.2-0.9,0.3c-0.3,0.1-0.7,0.1-1.2,0.1c-0.5,0-0.9-0.1-1.4-0.4 c-0.5-0.3-0.8-0.7-1.2-1.3c-0.3-0.4-0.6-0.8-1-1.1c-0.4-0.3-0.8-0.4-1-0.5L9,26.5c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.1-0.1,0.2 c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2l0.1,0.1c0.3,0.1,0.6,0.4,0.9,0.8s0.5,0.7,0.7,1.1l0.2,0.5c0.2,0.5,0.5,1,0.9,1.3 c0.4,0.3,0.9,0.5,1.4,0.6c0.5,0.1,1,0.1,1.4,0.1c0.5,0,0.9,0,1.2-0.1l0.5-0.1c0,0.5,0,1.1,0,1.9c0,0.7,0,1.1,0,1.1 c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.2-0.5,0.2-0.8,0.1c-3.2-1.1-5.8-3-7.9-5.8S4,23.8,4,20.3c0-2.9,0.7-5.6,2.1-8S9.5,7.8,12,6.4 s5.1-2.1,8-2.1s5.6,0.7,8,2.1s4.4,3.4,5.8,5.8S36,17.4,36,20.3L36,20.3z">
          </path>
        </symbol>
        <symbol id="icon-c3c8e1063e3b7f84f6b54712741de139" viewBox="0 0 40 40">
          <path
            d="M37.3,15.3v15.3c0,0.8-0.3,1.6-0.9,2.2c-0.6,0.6-1.4,0.9-2.2,0.9H5.8c-0.8,0-1.6-0.3-2.2-0.9s-0.9-1.4-0.9-2.2V15.3 c0.5,0.6,1.2,1.1,2,1.7c4.7,3.1,7.9,5.4,9.6,6.7c0.7,0.5,1.4,0.9,1.8,1.2c0.4,0.3,1,0.6,1.9,0.9c0.7,0.3,1.5,0.5,2.1,0.5l0,0 c0.6,0,1.4-0.2,2.1-0.5c0.7-0.3,1.4-0.6,1.9-0.9c0.4-0.3,1-0.7,1.8-1.2c2.2-1.6,5.4-3.8,9.6-6.7C36.1,16.5,36.7,15.9,37.3,15.3 L37.3,15.3z M37.3,9.6c0,1-0.3,2-0.9,2.9c-0.6,0.9-1.5,1.8-2.4,2.4c-4.9,3.3-7.9,5.4-9,6.2c-0.1,0.1-0.4,0.3-0.8,0.6 c-0.4,0.3-0.7,0.5-1,0.7c-0.3,0.2-0.6,0.4-1,0.6c-0.4,0.2-0.7,0.4-1.1,0.5c-0.4,0.1-0.6,0.2-0.9,0.2l0,0c-0.3,0-0.6-0.1-0.9-0.2 c-0.3-0.1-0.7-0.3-1.1-0.5c-0.4-0.2-0.7-0.4-1-0.6c-0.3-0.2-0.6-0.4-1-0.7c-0.4-0.3-0.7-0.5-0.8-0.6c-1.1-0.8-2.8-2-5.1-3.5 c-2.3-1.6-3.3-2.4-3.7-2.7c-0.8-0.5-1.6-1.2-2.3-2.2s-1-1.9-1-2.6c0-1,0.3-1.9,0.8-2.5c0.5-0.6,1.2-1,2.3-1h28.4 c0.8,0,1.6,0.3,2.2,0.9C37.1,8.1,37.3,8.8,37.3,9.6L37.3,9.6z">
          </path>
        </symbol>
      </svg>
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <div id="container06" className="style1 container default" >
              <div className="wrapper">
                <div className="inner">
                  <div id="image02" className="style1 image"><span className="frame"><img src="DOM.svg"
                    alt="DOM"></img></span></div>
                  <h1 id="text01" className="style1"><span className="name">DOM NETWORK</span></h1>
                  <p id="text02" className="style4">The Gate to DeFi on XDC Blockchain</p>
                  <ul id="buttons03" className="style1 buttons">
                    <li><a href="https://domain.ext/path" className="button n01"><svg>
                      {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
                    </svg><span className="label">Get started</span></a></li>
                    <li><a href="#more" className="button n02"><svg>
                      {/* <use xlink:href="#icon-8a75e9205b2d7697ad826d592ebf05f0"></use> */}
                    </svg><span className="label">Learn more</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="container02" className="style2 container columns">
              <div className="wrapper">
                <div className="inner">
                  <div>
                    <div id="image01" className="style2 image"><span className="frame"><img src="Oracle.svg"
                      alt=""></img></span></div>
                  </div>
                  <div>
                    <h2 id="text03" className="style2" >Decentralized Oracle
                      Network</h2>
                    <p id="text06" className="style4">Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra consequat.</p>
                    <ul id="buttons06" className="style1 buttons">
                      <li><a href="https://domain.ext/path" className="button n01"><svg>
                        {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
                      </svg><span className="label">Adipiscing</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="container04" className="style2 container columns">
              <div className="wrapper">
                <div className="inner" data-reorder="1,0">
                  <div>
                    <h2 id="text20" className="style2" >Prediction Market
                    </h2>
                    <p id="text21" className="style4">Etiam tristique libero eu nibh porttitor amet fermentum.
                      Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed
                      etiam consequat et lorem adipiscing.</p>
                    <ul id="buttons04" className="style1 buttons">
                      <li><a href="https://domain.ext/path" className="button n01"><svg>
                        {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
                      </svg><span className="label">Aliquam ante</span></a></li>
                    </ul>
                  </div>
                  <div>
                    <div id="image03" className="style2 image"><span className="frame"><img
                      src="Prediction Market.svg" alt=""></img></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div id="container07" className="style2 container columns">
              <div className="wrapper">
                <div className="inner">
                  <div>
                    <div id="image08" className="style2 image"><span className="frame"><img src="Lending.svg"
                      alt=""></img></span></div>
                  </div>
                  <div>
                    <h2 id="text11" className="style2" >Lending Protocol
                    </h2>
                    <p id="text14" className="style4">Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra consequat.</p>
                    <ul id="buttons01" className="style1 buttons">
                      <li><a href="https://domain.ext/path" className="button n01"><svg>
                        {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
                      </svg><span className="label">Adipiscing</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="container01" className="style3 container columns">
              <div className="wrapper">
                <div className="inner">
                  <div>
                    <div id="image05" className="style3 image"><span className="frame"><img
                      src="images/image05.svg?v=beacc3a5" alt=""></img></span></div>
                    <h2 id="text04" className="style3">Orci varius</h2>
                    <p id="text09" className="style4">Vehicula ultrices sed ultricies condimentum. Magna sed
                      etiam consequat, et adipiscing.</p>
                    <ul id="buttons05" className="style1 buttons">
                      <li><a href="https://domain.ext/path" className="button n01"><svg>
                        {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
                      </svg><span className="label">Interdum</span></a></li>
                    </ul>
                  </div>
                  <div>
                    <div id="image06" className="style3 image"><span className="frame"><img
                      src="images/image06.svg?v=beacc3a5" alt=""></img></span></div>
                    <h2 id="text12" className="style3" >Etiam metus</h2>
                    <p id="text66" className="style4">Sed etiam mollis egestas nam maximus erat id euismod
                      egestas. Pellentesque ac quam.</p>
                    <ul id="buttons07" className="style1 buttons">
                      <li><a href="https://domain.ext/path" className="button n01"><svg>
                        {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
                      </svg><span className="label">Veroeros</span></a></li>
                    </ul>
                  </div>
                  <div>
                    <div id="image07" className="style3 image"><span className="frame"><img
                      src="images/image07.svg?v=beacc3a5" alt=""></img></span></div>
                    <h2 id="text13" className="style3">Amet quam</h2>
                    <p id="text10" className="style4">Nisl amet convallis, et porttitor magna ullamcorper amet
                      mauris. Ut finibus nisi nec lacinia.</p>
                    <ul id="buttons09" className="style1 buttons">
                      <li><a href="https://domain.ext/path" className="button n01"><svg>
                        {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
                      </svg><span className="label">Consequat</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h2 id="text07" className="style2">Nunc phasellus</h2>
            <p id="text08" className="style4">Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus
              aenean ornare velit lacus, ac varius sed enim lorem ullamcorper dolore. ac varius enim lorem.</p>
            <ul id="buttons10" className="style1 buttons">
              <li><a href="https://domain.ext/path" className="button n01"><svg>
                {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
              </svg><span className="label">Malesuada</span></a></li>
            </ul>
            <div id="container05" className="style1 container default">
              <div className="wrapper">
                <div className="inner">
                  <h2 id="text22" className="style2" >Nulla bibendum dolor
                  </h2>
                  <p id="text23" className="style4">Auctor commodo interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
                  <ul id="buttons02" className="style1 buttons">
                    <li><a href="https://domain.ext/path" className="button n01"><svg>
                      {/* <use xlink:href="#icon-67ad41ecc66a1b1cd00d0d3b20c00017"></use> */}
                    </svg><span className="label">Get started</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <ul id="icons01" className="style1 icons">
              <li><a className="n01" href="https://domain.ext/path" aria-label="Twitter"><svg>
                <use xlinkHref="#icon-0c4db87eff374f0f1ef47f8f043f0132"></use>
              </svg><span className="label">Twitter</span></a></li>
              <li><a className="n02" href="https://domain.ext/path" aria-label="Product Hunt"><svg>
                <use xlinkHref="#icon-a8ac94bab98aae41181aaa5bee69fa75"></use>
              </svg><span className="label">Product Hunt</span></a></li>
              <li><a className="n03" href="https://domain.ext/path" aria-label="GitHub"><svg>
                <use xlinkHref="#icon-8c4b37645de3c276d895d87df51ba614"></use>
              </svg><span className="label">GitHub</span></a></li>
              <li><a className="n04" href="mailto:user@domain.ext" aria-label="Email"><svg>
                <use xlinkHref="#icon-c3c8e1063e3b7f84f6b54712741de139"></use>
              </svg><span className="label">Email</span></a></li>
            </ul>
            <p id="text05" className="style5">© Untitled. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div >
  )
}
