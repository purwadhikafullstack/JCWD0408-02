import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ImagePreviewProps {
  files: File[];
  setSelectedFiles: (files: File[]) => void;
}

const ImagePreviewRoom: React.FC<ImagePreviewProps> = ({
  files,
  setSelectedFiles,
}) => {
  const [previews, setPreviews] = useState<string[]>([]);

  const onRemove = (index: number) => {
    const newFile = files.filter((n, i) => i !== index);
    setSelectedFiles(newFile);
  };

  useEffect(() => {
    if (files.length > 0) {
      const previewUrls = files.map((file) => URL.createObjectURL(file));
      setPreviews(previewUrls);
    }
  }, [files]);

  return (
    <section>
      <div className="flex gap-2">
        {previews.map((src, index) => (
          <div key={index} className="relative">
            <Image
              key={index}
              src={src}
              alt={`preview-${index}`}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md object-cover"
            />
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="absolute right-1 top-1 rounded-full bg-black bg-opacity-60 p-[2px] text-xl text-white hover:bg-opacity-45"
            >
              <IoCloseOutline className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImagePreviewRoom;
