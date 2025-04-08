import React from "react";
import { Button, Container, useColorMode, useColorModeValue, Flex, Text, HStack, Box } from "@chakra-ui/react"; // Import useColorModeValue
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5"; 
import { LuSun } from "react-icons/lu";


const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("gray.100", "gray.900");

    return (
        <Container maxW="1140px" px={4} bg={bg}>
            <Flex
                h={16}
                alignItems="center"
                justifyContent="space-between"
                flexDirection={{ base: "column", sm: "row" }}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign="center"
                    bgGradient="linear(to-r, cyan.400, blue.500)"
                    bgClip="text"
                >
                    <Link to="/">Product Store 🛒</Link>
                </Text>
                <HStack spacing={4} alignItems={"center"}>
                    <Link to="/create">
                        <Button variant="ghost">
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode} variant="ghost">
                        <Box
                            p={2}
                            borderRadius="md"
                            border="2px solid"
                            borderColor="gray.400"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {colorMode === "light" ? (
                                <>
                                    <IoMoon size="20" /> 🌙
                                </>
                            ) : (
                                <>
                                    <LuSun size="20" /> ☀️
                                </>
                            )}
                        </Box>
                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default NavBar;
