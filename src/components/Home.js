import React, { useContext, useState, useEffect } from "react";
import { getHealthCheck } from "../api/api";
import Box from "@material-ui/core/Box";

const Home = () => {
  //After mount
  const [health, setHealth] = useState({});
  useEffect(() => {
    getHealthCheck().then((response) => {
      console.log("response = ", response);
      setHealth(response.data)
    });
  }, []);

  return <Box pt={0}>
    <p>Welcome home, testing my pipeline with aws. With Qooch and Kid</p>
    <p>Health check of the api ...: {health ? health.message : null}</p>
  </Box>;
};

export default Home;
