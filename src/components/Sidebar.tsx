import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";

import {  ButtonGroup } from '@chakra-ui/react'

interface Props {
  onClose: Function;
  isOpen: boolean;
  variant?: "drawer" | "sidebar";
}

const Sidebar = ({ isOpen, variant, onClose }: Props) => {
  return (
    <Drawer  isOpen={isOpen} placement="right" onClose={() => onClose}>
        <DrawerContent>
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
