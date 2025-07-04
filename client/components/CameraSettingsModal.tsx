import { X } from "lucide-react";

interface CameraSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  cameraName: string;
}

export default function CameraSettingsModal({
  isOpen,
  onClose,
  cameraName,
}: CameraSettingsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-black bg-opacity-50 rounded-[29px] p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close settings"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white text-sm font-medium">
            Setting for {cameraName}
          </h2>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Camera name and IP Address row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Camera name
              </label>
              <input
                type="text"
                defaultValue={cameraName}
                disabled
                className="w-full h-10 px-3 bg-gray-300 text-gray-500 rounded-lg border border-gray-400 text-sm font-bold"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                IP Address / Host name
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-3 bg-gray-300 text-gray-500 rounded-lg border border-gray-400 text-sm"
              />
            </div>
          </div>

          {/* Username and Password row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-3 bg-gray-300 text-gray-500 rounded-lg border border-gray-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder=""
                className="w-full h-10 px-3 bg-gray-300 text-gray-500 rounded-lg border border-gray-400 text-sm"
              />
            </div>
          </div>

          {/* RSTP/ONVIF and Port row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                RSTP / ONVIF
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-3 bg-gray-300 text-gray-500 rounded-lg border border-gray-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Port
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-3 bg-gray-300 text-gray-500 rounded-lg border border-gray-400 text-sm"
              />
            </div>
          </div>

          {/* File Path */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              File Path
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full h-10 px-3 bg-gray-300 text-gray-500 rounded-lg border border-gray-400 text-sm"
            />
          </div>
        </div>

        {/* Action buttons could be added here */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white text-sm hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
