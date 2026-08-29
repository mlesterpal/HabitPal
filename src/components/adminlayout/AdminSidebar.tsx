import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiTargetFill } from "react-icons/ri";
import { Box, Flex } from "@chakra-ui/react";

const AdminSidebar = () => {
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
  return (
    <Box
      borderRight="0.5px solid black"
      maxWidth="fit-content"
      padding="2"
      minH="svh"
    >
      {sidebarItems.map((item) => (
        <NavLink key={item.label} to={item.href}>
          <Flex alignItems="center">
            {item.icon}
            {item.label}
          </Flex>
        </NavLink>
      ))}
    </Box>
  );
};

export default AdminSidebar;
