"use client";

import Image from "next/image";
import React from "react";

interface ProfileProps {
  thumbnail: File | string | null; // Gunakan 'string' bukan 'String'
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const ThumbnailPreview: React.FC<ProfileProps> = ({
  thumbnail,
  setFieldValue,
}) => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof thumbnail === "string") {
      // Jika thumbnail adalah string (URL dari backend)
      setImageUrl(thumbnail);
    } else if (thumbnail instanceof File) {
      // Jika thumbnail adalah File yang diunggah oleh user
      const objectUrl = URL.createObjectURL(thumbnail);
      setImageUrl(objectUrl);

      // Clean up URL object setelah tidak digunakan lagi
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setImageUrl(null);
    }
  }, [thumbnail]);

  if (!imageUrl) return null;

  return (
    <div>
      <Image
        src={imageUrl}
        alt="Profile Preview"
        width={400}
        height={400}
        className="h-[300px] w-full rounded-md object-cover"
      />
    </div>
  );
};

export default ThumbnailPreview;
