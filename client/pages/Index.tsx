import { Camera, Video, Download, VolumeX, Settings } from "lucide-react";
import { useState } from "react";
import CameraSettingsModal from "../components/CameraSettingsModal";

export default function Index() {
  const [settingsModal, setSettingsModal] = useState<{
    isOpen: boolean;
    cameraName: string;
  }>({
    isOpen: false,
    cameraName: "",
  });

  const openSettings = (cameraName: string) => {
    setSettingsModal({ isOpen: true, cameraName });
  };

  const closeSettings = () => {
    setSettingsModal({ isOpen: false, cameraName: "" });
  };
  return (
    <div className="min-h-screen bg-app-background overflow-hidden max-w-md mx-auto relative md:max-w-lg lg:max-w-xl">
      {/* Header */}
      <header className="bg-[#1F233B] px-4 py-6 sm:px-6 flex items-center gap-3 sm:gap-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center">
          <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F233B]" />
        </div>
        <h1 className="text-white text-xl sm:text-2xl font-black tracking-wide">
          ZeroZense
        </h1>
      </header>

      {/* Main Content */}
      <main
        className="space-y-3"
        style={{
          backgroundColor: "rgba(152, 79, 116, 1)",
          marginBottom: "66px",
          padding: "12px 16px 46px",
        }}
      >
        {/* Camera Card 1 - Tapo C210 */}
        <div
          className="bg-app-card relative overflow-hidden"
          style={{ borderRadius: "20px", padding: "20px 32px" }}
        >
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: "10px" }}
          >
            <h2 className="text-white text-sm font-semibold">Tapo C210</h2>
            <button
              onClick={() => openSettings("Tapo C210")}
              className="p-1 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              aria-label="Camera settings"
            >
              <Settings className="w-6 h-6 text-[#8FBFFA]" />
            </button>
          </div>

          {/* Live View Area */}
          <div
            className="bg-app-view relative flex items-center justify-center overflow-hidden"
            style={{
              borderRadius: "17px",
              height: "280px",
              marginBottom: "7px",
            }}
          >
            <div className="text-gray-600 text-center">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 opacity-30" />
              <p className="text-xs opacity-50">Camera Feed</p>
            </div>
          </div>

          {/* Status Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-app-live"></div>
              <span className="text-app-live text-sm font-semibold">LIVE</span>
            </div>
            <span className="text-app-ip text-sm font-medium">
              192.168.1.198
            </span>
          </div>
        </div>

        {/* Camera Card 2 - Tapo C211 */}
        <div
          className="bg-app-card relative overflow-hidden"
          style={{
            borderRadius: "20px",
            padding: "20px 32px",
            marginTop: "12px",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: "10px" }}
          >
            <h2 className="text-white text-sm font-semibold">Tapo C211</h2>
            <button
              onClick={() => openSettings("Tapo C211")}
              className="p-1 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
              aria-label="Camera settings"
            >
              <Settings className="w-6 h-6 text-[#8FBFFA]" />
            </button>
          </div>

          {/* Live View Area */}
          <div
            className="bg-app-view relative flex items-center justify-center"
            style={{
              borderRadius: "17px",
              height: "280px",
              marginBottom: "7px",
            }}
          >
            <div className="text-gray-600 text-center">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 opacity-30" />
              <p className="text-xs opacity-50">Camera Feed</p>
            </div>
          </div>

          {/* Status Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-app-live"></div>
              <span className="text-app-live text-sm font-semibold">LIVE</span>
            </div>
            <span className="text-app-ip text-sm font-medium">
              192.168.1.197
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="absolute left-0 right-0 mb-auto"
        style={{
          backgroundColor: "rgb(31, 35, 59)",
          bottom: "1px",
          padding: "0 24px 0 12px",
        }}
      >
        <div
          className="flex justify-between items-center"
          style={{ margin: "20px auto auto", padding: "0 0 20px 20px" }}
        >
          <div className="text-white text-xs max-w-20 sm:max-w-24 leading-tight">
            Their business
            <br />
            is your business.
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button
              className="w-12 h-12 sm:w-14 sm:h-14 bg-app-card rounded-[18px] sm:rounded-[22px] flex items-center justify-center hover:bg-opacity-80 transition-colors"
              aria-label="Download recordings"
            >
              <Download className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </button>
            <button
              className="w-12 h-12 sm:w-14 sm:h-14 bg-app-card rounded-[18px] sm:rounded-[22px] flex items-center justify-center hover:bg-opacity-80 transition-colors"
              aria-label="Video controls"
            >
              <Video className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </button>
            <button
              className="w-12 h-12 sm:w-14 sm:h-14 bg-app-card rounded-[18px] sm:rounded-[22px] flex items-center justify-center hover:bg-opacity-80 transition-colors"
              aria-label="Camera settings"
            >
              <Camera className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </button>
            <button
              className="w-12 h-12 sm:w-14 sm:h-14 bg-app-card rounded-[18px] sm:rounded-[22px] flex items-center justify-center hover:bg-opacity-80 transition-colors"
              aria-label="Mute audio"
            >
              <VolumeX className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </button>
          </div>
        </div>
      </footer>

      {/* Camera Settings Modal */}
      <CameraSettingsModal
        isOpen={settingsModal.isOpen}
        onClose={closeSettings}
        cameraName={settingsModal.cameraName}
      />
    </div>
  );
}
