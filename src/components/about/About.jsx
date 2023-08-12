import React from 'react'
import au from "../../media/about.jpeg"

const About = () => {
  return (
    <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={au}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-4 p-4">
          <p className="text-justify mt-4">
          Agriculture is the fundamental practice of cultivating plants, animals, and other organisms for a variety of purposes, including food, fiber, medicinal products, and more. This age-old practice is at the heart of sustaining and enhancing human life and has evolved over centuries to meet the needs of growing populations.

There are two primary forms of agriculture: subsistence and commercial. Subsistence agriculture involves growing crops and raising animals primarily to meet the needs of one's own family or community. In contrast, commercial agriculture centers around producing crops and animals for sale in the market, with profit as a primary goal.

Agricultural methods and techniques span a spectrum from traditional to modern. Traditional farming practices are often based on knowledge passed down through generations and rely on manual labor and simple tools. Modern farming, on the other hand, integrates advanced technologies like machinery, genetic engineering, and precision farming to maximize efficiency and productivity.

Sustainable agriculture is an increasingly important concept in the field. It prioritizes practices that maintain the health of the land, preserve the environment, and support local communities. This approach aims to minimize negative impacts while ensuring the long-term productivity of agricultural systems.
          </p>
        </div>
      </div>
  )
}

export default About
