import { Flex, Heading, Text, Button } from "@chakra-ui/react";

interface AdminTopNavProps {
  setIsSidebarOpen: (open: boolean) => void;
  isMobile: boolean;
}

const AdminTopNav = ({ setIsSidebarOpen, isMobile }: AdminTopNavProps) => {
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
      <Flex alignItems="center">
        <Text
          bg="none"
          color="black"
          fontSize="xl"
          font="semibold"
          display={isMobile ? "flex" : "none"}
          onClick={() => setIsSidebarOpen(true)}
          pr="3.5"
        >
          ≡
        </Text>
        <Heading>Admin Top Nav</Heading>
      </Flex>
      <Text>UserPal</Text>
    </Flex>
  );
};

export default AdminTopNav;
