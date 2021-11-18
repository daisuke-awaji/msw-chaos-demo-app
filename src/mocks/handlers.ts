// src/mocks/handlers.js
import { rest } from "msw";
import { createChaosResponse } from "msw-chaos-composition";

const chaosRes = createChaosResponse();

export const handlers = [
  rest.get("/entries", (req, res, ctx) => {
    return chaosRes(
      ctx.status(200),
      ctx.json([
        {
          title: "Effective AppSync 〜 Serverless Framework を使用した AppSync の実践的な開発方法とテスト戦略 〜",
          createdAt: "2021/11/16 15:59",
          image:
            "https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F163591%2F4211b642-0999-a38d-7b99-38b000ab69ee.gif?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=1ff698f415abd8a1c0a3cd1d49d78bfb",
        },
        {
          title: "Chaos Engineering on Frontend ~フロントエンドにカオス性を注入して信頼性を向上させよう~",
          createdAt: "2021/06/25 19:26",
          image:
            "https://camo.qiitausercontent.com/88f506f86b96fec6fbd707044463dca8a591d846/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3136333539312f37613137663163302d633833612d306233362d373765322d3931313364303565623163372e706e67",
        },
        {
          title: "GraphQL Mesh は何を解決するのか？ ~ Qiita API を GraphQL でラップして理解する GraphQL Mesh ~",
          createdAt: "2021/06/25 19:26",
          image:
            "https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F163591%2Fc72738fa-a7bc-9b9f-dd68-cbc29dec5af4.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=824be7815974fe0445748027b9971486",
        },
        {
          title: "AWS Amplify での Cognito アクセスは React Context.Provider を使って認証処理を Hooks 化しよう",
          createdAt: "2021/06/25 19:26",
          image:
            "https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F163591%2F933eeb20-489f-ce8c-d6e6-3214050a49ff.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=317850d46d49630406f7900a6848c2ad",
        },
        {
          title: "サーバレス時代の負荷テスト戦略 〜CircleCIで実現する継続的負荷テストとチューニングTips〜",
          createdAt: "2021/06/25 19:26",
          image:
            "https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F163591%2Fe1f2baf8-a0c2-1438-74fd-61df3e1b19d2.gif?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=b91c6751df71752ffb0ab71bf5f41ed4",
        },
        {
          title: "Node.js (TypeScript) におけるキャッシュの実装方法とその戦略",
          createdAt: "2021/06/25 19:26",
          image:
            "https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F163591%2Fc42bd2b4-fbf8-a9f5-6ab8-37df9f02da24.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=f7823fcb88791ff9190e40feb3559ae3",
        },
      ])
    );
  }),
];
