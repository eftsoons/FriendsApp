import { useState, useEffect } from "react";

import { initInitData } from "@telegram-apps/sdk";

import {
  Progress,
  Tabbar,
  List,
  Section,
  Cell,
  Input,
} from "@telegram-apps/telegram-ui";
import "@telegram-apps/telegram-ui/dist/styles.css";

import Icons, { Icon } from "./componets/icon";
import lang from "./lang";

export default function App() {
  const [count, setCount] = useState(0);
  const [page, setpage] = useState("1");

  const initData = initInitData();

  useEffect(() => {}, []);

  const pagetab = [
    {
      id: "1",
      text: lang.friends["ru"],
      icon: "friends",
    },
    { id: "2", text: "Поиск друзей", icon: "friendssearch" },
    { id: "3", text: "Настройки", icon: "settings" },
  ];

  return (
    <List>
      {page == "1" ? (
        <Section footer="Тут типа друзья" header="Друзья">
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
          <Cell>Friends</Cell>
        </Section>
      ) : page == "2" ? (
        <Section footer="Тут типа поиск друзей" header="Поиск друзей">
          <Input
            header="Input"
            placeholder="I am usual input, just leave me alone"
          />
          <Cell>Chat Settings</Cell>
        </Section>
      ) : (
        <Section footer="Тут типа настройки" header="Настройки">
          <Cell>Settings</Cell>
        </Section>
      )}

      <Tabbar>
        {pagetab.map(({ id, text, icon }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={id == page}
            onClick={() => setpage(id)}
          >
            {Icons(icon as Icon)}
          </Tabbar.Item>
        ))}
      </Tabbar>
    </List>
  );
}
