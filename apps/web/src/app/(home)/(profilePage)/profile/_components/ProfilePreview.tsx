"use client";

import Image from "next/image";
import React from "react";

interface ProfileProps {
  image: File | null;
}

const ProfilePreview: React.FC<ProfileProps> = ({ image }) => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setImageUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setImageUrl(null);
    }
  }, [image]);
  if (!imageUrl) return null;

  return (
    <div>
      <Image
        src={imageUrl}
        alt="Profile Preview"
        width={100}
        height={100}
        className="h-28 w-28 rounded-full object-cover"
      />
    </div>
  );
};

export default ProfilePreview;
