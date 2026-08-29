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
    <Box>
      <Flex>
        <AdminSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isMobile={isMobile}
        />
        <Flex flex="1" direction="column" minW={0}>
          <AdminTopNav
            setIsSidebarOpen={setIsSidebarOpen}
            isMobile={isMobile}
          />
          <Box flex="1" background="blue.100">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminLayout;
