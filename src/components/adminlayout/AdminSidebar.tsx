import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiTargetFill } from "react-icons/ri";
import {
  Box,
  Flex,
  Stack,
  Button,
  CloseButton,
  Drawer,
  Portal,
} from "@chakra-ui/react";

interface AdminSidebarProps {
  isMobile: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const AdminSidebar = ({
  isMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}: AdminSidebarProps) => {
  const sidebarItems = [
    {
      label: "Dashboard",
      icon: <FaHome />,
      href: "/admin/dashboard",
    },
    {
      label: "Habits",
      icon: <RiTargetFill />,
      href: "/admin/habits",
    },
  ];

  function SidebarMenu() {
    return (
      <Stack>
        {sidebarItems.map((item) => (
          <NavLink to={item.href}>
            <Flex>
              {item.icon}
              {item.label}
            </Flex>
          </NavLink>
        ))}
      </Stack>
    );
  }

  return (
    <Box
      borderRight="0.5px solid black"
      maxWidth="fit-content"
      padding="2"
      minH="svh"
      display={isMobile ? "none" : "flex"}
    >
      <SidebarMenu />
      <Drawer.Root
        open={isSidebarOpen}
        onOpenChange={(e) => setIsSidebarOpen(e.open)}
        placement="start"
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default AdminSidebar;
