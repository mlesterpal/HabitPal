import AdminSidebar from "../components/adminlayout/AdminSidebar";
import AdminTopNav from "../components/adminlayout/AdminTopNav";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const AdminLayout = () => {
  return (
    <Box>
      <Flex>
        <AdminSidebar />
        <Flex flex="1" direction="column" minW={0}>
          <AdminTopNav />
          <Box flex="1" background="blue.100">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AdminLayout;
