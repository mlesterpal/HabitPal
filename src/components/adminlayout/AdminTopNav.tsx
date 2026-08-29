import { Flex, Heading, Text } from "@chakra-ui/react";

const AdminTopNav = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={4}
      py={3}
      borderBottomWidth="1px"
      borderColor="border"
      bg="bg"
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Heading>Admin Top Nav</Heading>
      <Text>UserPal</Text>
    </Flex>
  );
};

export default AdminTopNav;
