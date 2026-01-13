import { memo } from "react";
import AppIcon from "../app-global-icon/app-global-icon";

const Loader = () => {
  return (
    <div
      className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white animate-spin relative flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #3ADEE6 0%, #21888F 100%)",
      }}
    >
      <AppIcon width={120} height={132} className="drop-shadow-lg" />
    </div>
  );
};

export default memo(Loader);
