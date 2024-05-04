import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ExternalLinkIcon } from "@chakra-ui/icons"; // Import the share and eye icons

const CardComponent = () => {
  // Example view count, you can replace this with actual data
  const viewCount = 1000;

  return (
    <>
      <Card variant={"outline"} w="50vw">
        <CardHeader>
          <Image
            objectFit="cover"
            w="100%"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
        </CardHeader>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
        </CardBody>

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="xs">Segun Adebayo</Heading>
              </Box>
            </Flex>
            
          </Flex>
          <Flex align="right">
              <Box as="span" fontSize="sm" color="gray.600" ml={2}>
                {viewCount}
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="View count"
                  icon={<ViewIcon />} // Eye icon
                  ml={1}
                />
                <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<ExternalLinkIcon />} // Share icon
              />
              </Box>
            </Flex>
        </CardFooter>
      </Card>
      <br />
    </>
  );
};

export default CardComponent;
