import React, { useState } from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaSprayCan } from "react-icons/fa";

const Index = () => {
  const [isSprayActive, setIsSprayActive] = useState(false);

  const handleSprayClick = () => {
    setIsSprayActive(true);
    setTimeout(() => {
      setIsSprayActive(false);
    }, 500);
  };

  return (
    <Box textAlign="center" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        Water Bottle with Spray Button
      </Heading>
      <Stack direction="column" align="center" spacing={8}>
        <Box position="relative">
          <Image src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZXxlbnwwfHx8fDE3MTA2NzA2MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Water Bottle" width={200} />
          {isSprayActive && <Box position="absolute" top={0} left={0} right={0} bottom={0} background="rgba(0, 0, 255, 0.2)" pointerEvents="none" />}
        </Box>
        <Button leftIcon={<FaSprayCan />} colorScheme="blue" size="lg" onClick={handleSprayClick}>
          Spray
        </Button>
        <Text fontSize="xl">Click the button to spray water from the bottle!</Text>
      </Stack>
    </Box>
  );
};

export default Index;
