import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineChecklist } from "react-icons/md";
import { RiTargetFill } from "react-icons/ri";
import {
  Box,
  CloseButton,
  Drawer,
  Flex,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";

interface AdminSidebarProps {
  isMobile: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const sidebarItems = [
  { label: "Dashboard", icon: <FaHome />, href: "/admin/dashboard" },
  { label: "Habits", icon: <MdOutlineChecklist />, href: "/admin/habits" },
];

function Brand() {
  return (
    <Flex align="center" gap="2" px="3" py="1">
      <Box as="span" fontSize="xl" lineHeight="1" color="black">
        <RiTargetFill />
      </Box>
      <Text
        fontFamily="var(--font-main)"
        fontSize="2xl"
        letterSpacing="wide"
        lineHeight="1"
      >
        HabitPal
      </Text>
    </Flex>
  );
}

function SidebarMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Stack gap="6" w="full">
      <Brand />
      <Stack gap="1" as="nav">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onNavigate}
            style={{ textDecoration: "none", display: "block" }}
          >
            {({ isActive }) => (
              <Flex
                align="center"
                gap="3"
                px="3"
                py="2.5"
                fontFamily="var(--font-ui)"
                fontSize="sm"
                fontWeight="medium"
                bg={isActive ? "black" : "transparent"}
                color={isActive ? "white" : "black"}
                _hover={{ bg: isActive ? "black" : "blackAlpha.100" }}
                transition="background 0.15s ease"
              >
                {item.icon}
                {item.label}
              </Flex>
            )}
          </NavLink>
        ))}
      </Stack>
    </Stack>
  );
}

const AdminSidebar = ({
  isMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}: AdminSidebarProps) => {
  return (
    <>
      <Box
        as="aside"
        display={isMobile ? "none" : "flex"}
        w="56"
        minH="100svh"
        px="4"
        py="6"
        bg="white"
        borderRightWidth="1px"
        borderColor="black"
        flexShrink={0}
      >
        <SidebarMenu />
      </Box>

      <Drawer.Root
        open={isSidebarOpen}
        onOpenChange={(e) => setIsSidebarOpen(e.open)}
        placement="start"
      >
        <Portal>
          <Drawer.Backdrop bg="blackAlpha.600" />
          <Drawer.Positioner>
            <Drawer.Content
              bg="white"
              maxW="56"
              borderRightWidth="1px"
              borderColor="black"
            >
              <Drawer.Body px="4" py="6">
                <SidebarMenu onNavigate={() => setIsSidebarOpen(false)} />
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" color="black" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

export default AdminSidebar;
