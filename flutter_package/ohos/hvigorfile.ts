import { harTasks } from "@ohos/hvigor-ohos-plugin";
import { cargokitHvigorPlugin } from "../cargokit/hvigor/index";
import { resolve } from "path";

export default {
  system: harTasks /* Built-in plugin of Hvigor. It cannot be modified. */,
  plugins: [
    cargokitHvigorPlugin(
      "/Users/gavin/Workspace/ohos/rinf/flutter_package/example/native/hub"
    ),
  ] /* Custom plugin to extend the functionality of Hvigor. */,
};
