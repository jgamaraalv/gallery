import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import ShotList from "../../components/ShotList";

const mockStore = createStore();

const INITIAL_STATE = {
  shots: {
    shots: [
      {
        animated: false,
        description: "\u003cp\u003eAn example image.\u003c/p\u003e",
        height: 3409,
        html_url: "https://dribbble.com/shots/6656070-Bowl-Cuisine-Delicious",
        id: 6656070,
        images: {
          hidpi:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656070/bowl-cuisine-delicious-1640773.jpg",
          normal:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656070/bowl-cuisine-delicious-1640773_1x.jpg",
          one_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656070/bowl-cuisine-delicious-1640773_1x.jpg",
          two_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656070/bowl-cuisine-delicious-1640773_2x.jpg",
          four_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656070/bowl-cuisine-delicious-1640773_4x.jpg",
          six_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656070/bowl-cuisine-delicious-1640773_6x.jpg",
          eight_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656070/bowl-cuisine-delicious-1640773_8x.jpg",
          teaser:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656070/bowl-cuisine-delicious-1640773_teaser.jpg"
        },
        low_profile: false,
        tags: ["bowl", "cuisine", "deliciouse"],
        title: "Bowl Cuisine Delicious",
        width: 4545,
        published_at: "2019-06-19T18:57:25Z",
        updated_at: "2019-06-19T18:57:25Z",
        attachments: [],
        projects: [],
        video: null
      },
      {
        animated: false,
        description: "\u003cp\u003eAn example image.\u003c/p\u003e",
        height: 4021,
        html_url:
          "https://dribbble.com/shots/6656056-Daylight-Fashion-Fashionable",
        id: 6656056,
        images: {
          hidpi:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656056/daylight-fashion-fashionable-2472264.jpg",
          normal:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656056/daylight-fashion-fashionable-2472264_1x.jpg",
          one_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656056/daylight-fashion-fashionable-2472264_1x.jpg",
          two_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656056/daylight-fashion-fashionable-2472264_2x.jpg",
          four_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656056/daylight-fashion-fashionable-2472264_4x.jpg",
          six_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656056/daylight-fashion-fashionable-2472264_6x.jpg",
          eight_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656056/daylight-fashion-fashionable-2472264_8x.jpg",
          teaser:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656056/daylight-fashion-fashionable-2472264_teaser.jpg"
        },
        low_profile: false,
        tags: ["daylight", "fashion", "fashionable"],
        title: "Daylight Fashion Fashionable",
        width: 5362,
        published_at: "2019-06-19T18:54:31Z",
        updated_at: "2019-06-19T18:54:31Z",
        attachments: [],
        projects: [],
        video: null
      },
      {
        animated: false,
        description: "\u003cp\u003eAn example image.\u003c/p\u003e",
        height: 2472,
        html_url: "https://dribbble.com/shots/6656052-Body-Floating-Man",
        id: 6656052,
        images: {
          hidpi:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656052/body-floating-man-2413643.jpg",
          normal:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656052/body-floating-man-2413643_1x.jpg",
          one_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656052/body-floating-man-2413643_1x.jpg",
          two_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656052/body-floating-man-2413643_2x.jpg",
          four_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656052/body-floating-man-2413643_4x.jpg",
          six_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656052/body-floating-man-2413643_6x.jpg",
          eight_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656052/body-floating-man-2413643_8x.jpg",
          teaser:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656052/body-floating-man-2413643_teaser.jpg"
        },
        low_profile: false,
        tags: ["body", "floating", "man"],
        title: "Body Floating Man",
        width: 3294,
        published_at: "2019-06-19T18:53:26Z",
        updated_at: "2019-06-19T18:53:26Z",
        attachments: [],
        projects: [],
        video: null
      },
      {
        animated: false,
        description: "\u003cp\u003eAn example image.\u003c/p\u003e",
        height: 2242,
        html_url:
          "https://dribbble.com/shots/6656046-Bird-S-Eye-View-Color-Exotic",
        id: 6656046,
        images: {
          hidpi:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656046/bird-s-eye-view-color-exotic-2449104.jpg",
          normal:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656046/bird-s-eye-view-color-exotic-2449104_1x.jpg",
          one_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656046/bird-s-eye-view-color-exotic-2449104_1x.jpg",
          two_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656046/bird-s-eye-view-color-exotic-2449104_2x.jpg",
          four_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656046/bird-s-eye-view-color-exotic-2449104_4x.jpg",
          six_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656046/bird-s-eye-view-color-exotic-2449104_6x.jpg",
          teaser:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656046/bird-s-eye-view-color-exotic-2449104_teaser.jpg"
        },
        low_profile: false,
        tags: ["bird", "color", "exotic", "eye"],
        title: "Bird S Eye View Color Exotic",
        width: 2990,
        published_at: "2019-06-19T18:52:41Z",
        updated_at: "2019-06-19T18:52:41Z",
        attachments: [],
        projects: [],
        video: null
      },
      {
        animated: false,
        description: "\u003cp\u003eAn example image.\u003c/p\u003e",
        height: 2825,
        html_url: "https://dribbble.com/shots/6656036-Adventure-Cold-Daylight",
        id: 6656036,
        images: {
          hidpi:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656036/adventure-cold-daylight-2397611.jpg",
          normal:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656036/adventure-cold-daylight-2397611_1x.jpg",
          one_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656036/adventure-cold-daylight-2397611_1x.jpg",
          two_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656036/adventure-cold-daylight-2397611_2x.jpg",
          four_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656036/adventure-cold-daylight-2397611_4x.jpg",
          six_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656036/adventure-cold-daylight-2397611_6x.jpg",
          eight_x:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656036/adventure-cold-daylight-2397611_8x.jpg",
          teaser:
            "https://cdn.dribbble.com/users/1872672/screenshots/6656036/adventure-cold-daylight-2397611_teaser.jpg"
        },
        low_profile: false,
        tags: ["adventure", "cold", "daylight"],
        title: "Adventure Cold Daylight",
        width: 3766,
        published_at: "2019-06-19T18:50:39Z",
        updated_at: "2019-06-19T18:50:39Z",
        attachments: [],
        projects: [],
        video: null
      }
    ],
    loading: false
  }
};

const store = mockStore(INITIAL_STATE);

it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <ShotList />
    </Provider>
  );

  expect(wrapper.find("li").length).toBe(5);
});
