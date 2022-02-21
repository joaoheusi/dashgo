import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxW={360}
          bg={"gray.800"}
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="password">E-mail</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{ bgColor: "gray.900" }}
                size="lg"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                bgColor="gray.900"
                variant="filled"
                focusBorderColor="pink.500"
                _hover={{ bgColor: "gray.900" }}
                size="lg"
              ></Input>
            </FormControl>
            <Button type="submit" mt="6" size="lg" colorScheme="pink">
              {" "}
              Entrar{" "}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
