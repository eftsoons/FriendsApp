import { useState, useEffect } from "react";

import axios from "axios";

//import { initInitData } from "@telegram-apps/sdk";
import {
  initMiniApp,
  postEvent,
  initUtils,
  initInitData,
} from "@telegram-apps/sdk";

import {
  Tabbar,
  List,
  Section,
  Cell,
  Input,
  Placeholder,
  Button,
} from "@telegram-apps/telegram-ui";
import "@telegram-apps/telegram-ui/dist/styles.css";

import Icons, { Icon } from "./componets/icon";
import lang from "./lang";

// @ts-expect-error
const telegram = window.Telegram.WebApp;

export default function App() {
  //const [count, setCount] = useState(0);
  const [page, setpage] = useState("1");
  const [userfriends] = useState([]);

  const [miniApp] = initMiniApp();

  const initData = initInitData() as any;

  const utils = initUtils();

  //const [swipeBehavior] = initSwipeBehavior();

  //const initData = initInitData();

  useEffect(() => {
    miniApp.ready();

    postEvent("web_app_expand");

    console.log("test");

    axios.post("http://localhost:80", {
      initData: initData.initData,
    });

    //swipeBehavior.disableVerticalSwipe();

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
        userfriends.length > 0 ? (
          <Section header="Друзья">
            {userfriends.map(() => (
              <Cell interactiveAnimation={"opacity"}>Friends</Cell>
            ))}
          </Section>
        ) : (
          <Placeholder
            action={
              <Button onClick={() => setpage("2")} size="l" stretched>
                Поиск друзей
              </Button>
            }
            description="Для исправления такой плачевной ситуации перейдите в раздел поиска друзей"
            header="У вас нет друзей!"
          >
            <img alt="Telegram sticker" src="https://xelene.me/telegram.gif" />
          </Placeholder>
        )
      ) : page == "2" ? (
        <Section footer="Тут типа поиск друзей" header="Поиск друзей">
          <Input
            onChange={(e) => {
              console.log(e.target.value);
            }}
            placeholder="Поиск друзей"
          />
          <Cell
            onClick={() => {
              utils.openTelegramLink(
                "/FriendsAppsBot?startattach=send-assetCurrency__&choose=users"
              );
            }}
          >
            Chat Settings
          </Cell>
          <Button href="https://t.me/share/url?url=t.me/botname/app?startapp=something&text=something">
            asd
          </Button>
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
