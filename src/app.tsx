import { useEffect, useState } from "preact/hooks";
import { defaultOptions, IAppProps } from "./types";
import { makeStyle } from "./style";
import { api, defineUpdate } from "@notionpet/sdk";

export function App({ options, data = {} }: IAppProps) {
  const [option, setOption] = useState(options || defaultOptions);
  const [visitorCount, setVisitorCount] = useState(data.visitorCount || 0);
  const { userName, visitor } = makeStyle(option);
  /**
   * 当数据更新时更新状态
   */
  defineUpdate(({ options, data }) => {
    setOption(options)
  });

  useEffect(() => {
    setVisitorCount(visitorCount + 1);
    api.update({ visitorCount: visitorCount + 1 });
  }, []);

  return (
    <div>
      👏 欢迎来到 <span style={userName}>{option.userName}</span>{" "}
      的小屋，你是本小屋第 <span style={visitor}>{visitorCount}</span> 位访客!
    </div>
  );
}
