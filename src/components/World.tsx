import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react"
import Image from 'next/image'
import styles from './styles/World.module.css'
import { useHover } from "@uidotdev/usehooks";

function getRandomColor() {
  const colors = ["green", "blue", "purple", "red", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function World () {
  const [ref, hovering] = useHover();

  const backgroundColor = hovering
  ? `${getRandomColor()}`
  : ""


  return (
    <Dropdown backdrop="blur">
    <DropdownTrigger>
      <Button 
        variant="bordered"
        ref={ref}
        style={{ backgroundColor}}
        className={styles.button}
      >
        {hovering 
        ? <Image src="globe-filled.svg" width="25" height="25" alt="languages" /> 
        : <Image src="globe.svg" width="25" height="25" alt="languages" />}
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions">
      <DropdownItem key="deutsch" className={styles.item}>🇩🇪 Deutsch</DropdownItem>
      <DropdownItem key="english" className={styles.item}>🇬🇧 English</DropdownItem>
      <DropdownItem key="español" className={styles.item}>🇪🇸 Español</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);
}