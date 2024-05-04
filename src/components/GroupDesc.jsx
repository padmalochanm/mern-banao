import React from "react";
import { Tabs, TabList, Tab, Image, Button } from "@chakra-ui/react";

const GroupDesc = () => {
  return (
    <div>
      <Image
        w="100vw"
        h="40vw"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />
      <hr/>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "2vw", marginRight: "2vw", marginTop: "0.75vw"}}>
        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
        </Tabs>
        <Button colorScheme="teal" size="sm">
          Join group
        </Button>
      </div>
      <hr/>
      <br/>
    </div>
  );
};

export default GroupDesc;
