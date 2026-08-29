import { Box, Flex, Text } from "@chakra-ui/react";

interface AdminTopNavProps {
  setIsSidebarOpen: (open: boolean) => void;
  isMobile: boolean;
}

const AdminTopNav = ({ setIsSidebarOpen, isMobile }: AdminTopNavProps) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      h="14"
      px="4"
      bg="white"
      borderBottomWidth="1px"
      borderColor="black"
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <Flex align="center" gap="3">
        {isMobile && (
          <Box
            as="button"
            aria-label="Open menu"
            onClick={() => setIsSidebarOpen(true)}
            fontFamily="var(--font-ui)"
            fontSize="2xl"
            lineHeight="1"
            color="black"
            cursor="pointer"
            bg="transparent"
            border="none"
            p="0"
          >
            ≡
          </Box>
        )}
        <Text
          fontFamily="var(--font-ui)"
          fontSize="sm"
          fontWeight="medium"
          color="black"
        >
          Admin
        </Text>
      </Flex>

      <Flex
        align="center"
        justify="center"
        w="8"
        h="8"
        bg="black"
        color="white"
        fontFamily="var(--font-ui)"
        fontSize="xs"
        fontWeight="semibold"
        title="UserPal"
      >
        U
      </Flex>
    </Flex>
  );
};

export default AdminTopNav;
