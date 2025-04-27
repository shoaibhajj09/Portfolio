import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReactNode, useState } from "react";

interface Itabs {
  name: string;
  url: string;
  favicon: string;
  showingUrlAndTabs?: boolean;
}
interface IProp {
  onClose: (val: boolean) => void;
  tabs?: Itabs[];
  children?: ReactNode;
}

export default function CustomBrowser({ onClose, tabs, children }: IProp) {
  const [activeTab, setActiveTab] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0  z-50 backdrop-blur-lg bg-black/50 flex items-center justify-center`}
    >
      <div
        className={`bg-[#1e1e2f] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col ${
          isMaximized
            ? "w-[95vw]  h-[90vh]"
            : `w-[600px]  md:w-[900px] ${
                tabs ? " h-[500px]  md:h-[600px]" : ""
              }`
        } mx-3`}
      >
        <div className="flex items-center justify-between px-4 py-2 bg-[#151520]">
          <div className="flex items-center gap-2">
            <button
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:brightness-90"
              onClick={() => {
                setIsOpen(false);

                onClose(false);
              }}
              title="Close"
            />
            <button
              className="w-3 h-3 rounded-full bg-yellow-400 hover:brightness-90"
              //   onClick={() => alert("Minimize not implemented")}
              title="Minimize"
            />
            <button
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:brightness-90"
              onClick={() => setIsMaximized((prev) => !prev)}
              title="Maximize"
            />
          </div>

          {/* Address bar (disabled input) */}
          {tabs && tabs[0].showingUrlAndTabs && (
            <input
              type="text"
              readOnly
              value={tabs[activeTab].url}
              className="flex-1 ml-4 px-4 py-1 bg-[#27293d] text-sm text-gray-300 rounded-md border border-[#3a3b4d] outline-none overflow-clip text-ellipsis "
            />
          )}

          {/* Just some spacing */}
          <div className="w-12" />
        </div>

        {/* Tabs */}
        {tabs && tabs[0].showingUrlAndTabs && (
          <div className="flex overflow-x-scroll rounded-2xl border-b border-[#3a3b4d] text-gray-300 text-sm font-medium">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 md:py-2 py-1 flex items-center gap-2 hover:bg-[#35364a] cursor-pointer transitionflex-1 ${
                  activeTab === idx ? "bg-[#35364a] " : ""
                }`}
              >
                <Image
                  src={tab.favicon}
                  alt="Next"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <p className=" text-nowrap  overflow-hidden text-ellipsis ">
                  {tab.name}
                </p>
              </button>
            ))}
          </div>
        )}

        {/* iFrame */}
        {tabs && (
          <iframe
            src={tabs[activeTab]?.url}
            className="flex-1 border-0 w-full "
          />
        )}

        {tabs && !tabs[0].showingUrlAndTabs && (
          <Button className="bg-cyan-600 hover:bg-cyan-700 hover:scale-105 cursor-pointer ">
            <a href="/resume.pdf" download="Shoaib Hajj.pdf">
              Downolad
            </a>
          </Button>
        )}
        <div className="overflow-y-auto ">{children}</div>
      </div>
    </div>
  );
}
