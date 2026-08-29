import AdminSidebar from "../components/adminlayout/AdminSidebar";
import AdminTopNav from "../components/adminlayout/AdminTopNav";
import { Outlet } from "react-router-dom";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const AdminLayout = () => {
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (!isMobile) {
      setIsSidebarOpen(false);
    }
  }, [isMobile]);
  return (
    <Box minH="100svh" bg="white" color="black">
      <Flex minH="100svh">
        <AdminSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isMobile={isMobile}
        />
        <Flex flex="1" direction="column" minW={0} bg="white">
          <AdminTopNav
            setIsSidebarOpen={setIsSidebarOpen}
            isMobile={isMobile}
          />
          <Box flex="1" minW={0} px="6" py="6" overflow="auto" fontFamily="var(--font-ui)">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminLayout;
