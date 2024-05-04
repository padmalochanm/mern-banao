import React from "react";
import { Flex, Box, Input, Link, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel } from "@chakra-ui/react";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div style={{ position: "fixed", width: "100%", zIndex: "100", backgroundColor: "white" }}>
            <Flex as="header" align="center" justify="space-between" py={4} px={8}>
                <Box>
                    <strong>Company Name</strong>
                </Box>

                <Input
                    variant="filled"
                    placeholder="Search..."
                    borderRadius="full"
                    py={2}
                    px={4}
                    mr={4}
                    width={"400px"}
                />

                <Link onClick={onOpen}>Create Account</Link>

                <Modal isOpen={isOpen} onClose={onClose} size="xl">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Sign In</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* Sign-in form directly inside the modal */}
                            <form>
                                <FormControl mb={4}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" placeholder="Enter your email" />
                                </FormControl>
                                <FormControl mb={4}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" placeholder="Enter your password" />
                                </FormControl>
                                <Button colorScheme="blue" type="submit">Sign In</Button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>
            <hr />
        </div>
    );
};

export default Header;
