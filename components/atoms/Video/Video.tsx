"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

type VideoPlayerProps = React.HTMLAttributes<HTMLDivElement> & {
  url: string
  thumbnail?: string
  alt?: string
}

export default function VideoPlayer({
  url,
  thumbnail,
  alt = "Video thumbnail",
  className,
  ...props
}: VideoPlayerProps) {

  const [open, setOpen] = useState(false)

  // Extract YouTube ID from link
  const videoId = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^?&]+)/
  )?.[1]

  const thumbnailUrl =
    thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <>
      {/* Thumbnail Section */}
      <div
        className={cn(
          "relative w-full  rounded-xl overflow-hidden shadow-md cursor-pointer group",
          className
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <Image
          width={615}
          height={489}
          src={thumbnailUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />

        {/* Play button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-brand-primary/90 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal Background */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-xl w-[90%] max-w-[800px] overflow-hidden shadow-xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <iframe
              className="w-full h-[450px]"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Animate modal pop-in */}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}
