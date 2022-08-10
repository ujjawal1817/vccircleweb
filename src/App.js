import "./App.css";
import "./Responsive.css";
import Navbar from "./Components/Navbar";
import Advertisement from "./Components/Advertisement";
import EditorSection from "./Components/EditorSection";
import SocialComp from "./Components/SocialComp";
import Carousel from "./Components/Carousel";
import VcPremium from "./Components/VcPremium";
import UpcomingEvents from "./Components/UpcomingEvents";
import VccTv from "./Components/VccTv";
import Signup from "./Components/Signup";
import MoreStories from "./Components/MoreStories";
import Footer from "./Components/Footer";
import SectionOne from "./Components/SectionOne";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Components/Loader";

function App() {
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/25b66855-89a3-45a5-8db6-85fc85041185")
      .then((response) => {
        setIsLoading(true);
        setData(response.data.section_list);
      });
  }, []);
  return (
    <>
    {IsLoading ? (
      <>
      <Navbar />
      
        
          

          {data.map((item) => {
            if (item.section_slug === "top-stories") {
              return (
                <>
                <Advertisement
            src="./Images/advertisement.png"
            pad={{ padding: "1rem 10rem" }}
            width="100%"
          />
                  <SectionOne item={item} />
                  <Advertisement
                    src="./Images/advertisement.png"
                    pad={{ padding: "1rem 10rem" }}
                    width="100%"
                  />
                </>
              );
            }
            if (item.section_slug === "editors-pick") {
              return (
                <>
                  <EditorSection item={item} />
                  <Signup />
                  <SocialComp />
                </>
              );
            }

            if (item.section_slug === "limited-partner") {
              return (
                <>
                  <Carousel item={item} />
                  <Advertisement
                    src="./Images/advertisement.png"
                    pad={{ padding: "1rem 10rem" }}
                    width="100%"
                  />
                </>
              );
            }

            if (item.section_slug === "vccircle-premium") {
              return (
                <>
                  <VcPremium item={item} />
                </>
              );
            }

            if (item.section_slug === "upcoming-events") {
              return (
                <>
                  <UpcomingEvents />
                </>
              );
            }
            if (item.section_slug === "founders") {
              return (
                <>
                  <Carousel item={item} />
                  <Advertisement
                    src="./Images/advertisement.png"
                    pad={{ padding: "1rem 10rem" }}
                    width="100%"
                  />
                </>
              );
            }
            if (item.section_slug === "most-popular") {
              return <EditorSection item={item} />;
            }
            if (item.section_slug === "vcc-tv") {
              return (
                <>
                  <VccTv item={item} />
                  <Advertisement
                    src="./Images/advertisement.png"
                    pad={{ padding: "1rem 10rem" }}
                    width="100%"
                  />
                </>
              );
            }
            if (item.section_slug === "tmt") {
              return <Carousel item={item} />;
            }
            if (item.section_slug === "financials") {
              return (
                <>
                  <Carousel item={item} />
                  <Advertisement
                    src="./Images/advertisement.png"
                    pad={{ padding: "1rem 10rem" }}
                    width="100%"
                  />
                </>
              );
            }

            if (item.section_slug === "more-stories") {
              return (
                <>
                  <MoreStories item={item} />
                </>
              );
            }

            if (item.section_slug === "mergers-acquisitions") {
              return (
                <>
                  <Carousel item={item} />
                </>
              );
            }
            return null;
          })}
       
      
      <Footer />
      </>
      ) : (
        <Loader />
       
      )}
    </>
  );
}

export default App;
