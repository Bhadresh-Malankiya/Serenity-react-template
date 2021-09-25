import React, { Component } from 'react'
import PinkCard from './PinkCard'

const cards = [{
  title: "Search Therapists",
  desc: "Professionally trained experts committed to helping you feel happier"
},
{
  title: "select Mode of Therapy",
  desc: "Whatever works for you works for us – video, voice or chat"
},
{
  title: "Start Therapy",
  desc: "Get help with anything that keeps to up at night –  anytime, anywhere, any device"
}]

export default class HeroSection2 extends Component {

  render() {
    return (
      <div>
        <div className="bg-cover min-h-screen pt-16 border-t-4 border-b-4 border-pink-500">
          <div className="text-base text-center pb-7 block font-extrabold md:text-3xl pt-7 md:text-center title-font mb-4 text-pink-500">
            <h2 >How to Start Therapy?</h2>
          </div>
          <div>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg  text-center ">
            Just a simple 3-step process. We love to make your life easier. Take the first step and talk to an expert now! 
            </p>
          </div>
          <div className="grid sm:grid-cols-3 h-auto text-center lg:p-4 lg:gap-4 " style={{backgroundImage:`url(${require('../images/HeroSection2.png').default})`}}>
            <PinkCard imageLink = {require("../images/search.png").default} title = {cards[0].title} desc = {cards[0].desc} />
            <PinkCard imageLink = {require("../images/select.png").default} title = {cards[1].title} desc = {cards[1].desc}/>
            <PinkCard imageLink = {require("../images/start.png").default} title = {cards[2].title} desc = {cards[2].desc}/>
          </div>
        </div>
      </div>
    )
  }
}
