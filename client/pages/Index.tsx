import { Camera, Video, Download, VolumeX, Settings } from "lucide-react";

export default function Index() {
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
      <main className="px-3 py-4 sm:px-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Camera Card 1 - Tapo C210 */}
        <div className="bg-app-card rounded-[35px] sm:rounded-[49px] p-5 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-white text-sm font-semibold">Tapo C210</h2>
            <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#8FBFFA]" />
          </div>

          {/* Live View Area */}
          <div className="bg-app-view rounded-[20px] sm:rounded-[30px] h-40 sm:h-52 mb-4 sm:mb-6 relative flex items-center justify-center">
            <div className="text-gray-600 text-center">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 opacity-30" />
              <p className="text-xs opacity-50">Camera Feed</p>
            </div>
          </div>

          {/* Status Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-app-live"></div>
              <span className="text-app-live text-xs sm:text-sm font-semibold">
                LIVE
              </span>
            </div>
            <span className="text-app-ip text-xs sm:text-sm font-medium">
              192.168.1.198
            </span>
          </div>
        </div>

        {/* Camera Card 2 - Tapo C211 */}
        <div className="bg-app-card rounded-[35px] sm:rounded-[49px] p-5 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-white text-sm font-semibold">Tapo C211</h2>
            <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#8FBFFA]" />
          </div>

          {/* Live View Area */}
          <div className="bg-app-view rounded-[20px] sm:rounded-[30px] h-40 sm:h-52 mb-4 sm:mb-6 relative flex items-center justify-center">
            <div className="text-gray-600 text-center">
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 opacity-30" />
              <p className="text-xs opacity-50">Camera Feed</p>
            </div>
          </div>

          {/* Status Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-app-live"></div>
              <span className="text-app-live text-xs sm:text-sm font-semibold">
                LIVE
              </span>
            </div>
            <span className="text-app-ip text-xs sm:text-sm font-medium">
              192.168.1.197
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
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
    </div>
  );
}
