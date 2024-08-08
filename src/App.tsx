import { useState, useEffect } from "react";

//import { initInitData } from "@telegram-apps/sdk";
import { initMiniApp, postEvent } from "@telegram-apps/sdk";

import { Tabbar, List, Section, Cell, Input } from "@telegram-apps/telegram-ui";
import "@telegram-apps/telegram-ui/dist/styles.css";

import Icons, { Icon } from "./componets/icon";
import lang from "./lang";

export default function App() {
  //const [count, setCount] = useState(0);
  const [page, setpage] = useState("1");
  const [miniApp] = initMiniApp();

  //const initData = initInitData();

  useEffect(() => {
    miniApp.ready();

    postEvent("web_app_expand");

    miniApp.setHeaderColor("secondary_bg_color");
  }, []);

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
        <Section header="Друзья">
          <Cell
            onClick={() => {
              console.log(123);
            }}
            interactiveAnimation={"opacity"}
          >
            Friends
          </Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
          <Cell interactiveAnimation={"opacity"}>Friends</Cell>
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
        <Section>
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
