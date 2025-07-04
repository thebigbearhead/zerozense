import { Camera, Video, Download, VolumeX, Settings } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-app-background overflow-hidden max-w-lg mx-auto relative">
      {/* Header */}
      <header className="bg-[#1F233B] px-6 py-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <Camera className="w-6 h-6 text-[#1F233B]" />
        </div>
        <h1 className="text-white text-2xl font-black tracking-wide">
          ZeroZense
        </h1>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 space-y-6">
        {/* Camera Card 1 - Tapo C210 */}
        <div className="bg-app-card rounded-[49px] p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-sm font-semibold">Tapo C210</h2>
            <Settings className="w-6 h-6 text-[#8FBFFA]" />
          </div>

          {/* Live View Area */}
          <div className="bg-app-view rounded-[30px] h-52 mb-6 relative">
            {/* Placeholder for video feed */}
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
        <div className="bg-app-card rounded-[49px] p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-sm font-semibold">Tapo C211</h2>
            <Settings className="w-6 h-6 text-[#8FBFFA]" />
          </div>

          {/* Live View Area */}
          <div className="bg-app-view rounded-[30px] h-52 mb-6 relative">
            {/* Placeholder for video feed */}
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
      <footer className="absolute bottom-0 left-0 right-0 px-6 pb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-white text-xs max-w-24">
            Their business
            <br />
            is your business.
          </div>
          <div className="flex gap-4">
            <button className="w-14 h-14 bg-app-card rounded-[22px] flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <Download className="w-7 h-7 text-white" />
            </button>
            <button className="w-14 h-14 bg-app-card rounded-[22px] flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <Video className="w-7 h-7 text-white" />
            </button>
            <button className="w-14 h-14 bg-app-card rounded-[22px] flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <Camera className="w-7 h-7 text-white" />
            </button>
            <button className="w-14 h-14 bg-app-card rounded-[22px] flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <VolumeX className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
