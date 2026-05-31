import MenuClient from "./menu-client";
import { getMenuItems } from "../../services/menu.service";

export default async function MenuPage() {
  const menuItems = await getMenuItems();

  return <MenuClient menuItems={menuItems} />;
}