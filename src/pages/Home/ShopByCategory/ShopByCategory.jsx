import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCategory from "./ToyCategory";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Monster Truck");

  useEffect(() => {
    fetch(`https://wonder-toys-server.vercel.app/toysCategory/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto px-4 pt-6 md:pb-12">
      <h1
        className="text-center text-4xl md:text-5xl font-bold pb-3"
        data-aos="fade-up"
      >
        <span className="title-text">Shop By Category</span>
      </h1>
      <Tabs className="my-20 font-semibold">
        <TabList data-aos="fade-up">
          <Tab onClick={() => handleTabClick("Monster Truck")}>
            Monster Truck
          </Tab>
          <Tab onClick={() => handleTabClick("Regular Car")}>Regular Car</Tab>
          <Tab onClick={() => handleTabClick("Ambulance Car")}>
            Ambulance Car
          </Tab>
          <Tab onClick={() => handleTabClick("Police Car")}>Police Car</Tab>
        </TabList>
        <TabPanel>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10"
            data-aos="fade-up"
          >
            {toys?.map((toy) => (
              <ToyCategory key={toy._id} toy={toy} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10"
            data-aos="fade-up"
          >
            {toys?.map((toy) => (
              <ToyCategory key={toy._id} toy={toy} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10"
            data-aos="fade-up"
          >
            {toys?.map((toy) => (
              <ToyCategory key={toy._id} toy={toy} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10"
            data-aos="fade-up"
          >
            {toys?.map((toy) => (
              <ToyCategory key={toy._id} toy={toy} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
