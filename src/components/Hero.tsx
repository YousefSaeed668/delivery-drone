export function Hero() {
  return (
    <div className="relaive h-screen">
      <video
        src="/herovideo.mp4"
        autoPlay
        muted
        playsInline
        loop
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-8 z-4 left-1/2 -translate-x-1/2 max-w-[22.3rem] text-center">
        <h2 className="text-4xl text-white mb-4">
          Your Favorite Meals, Delivered by Air
        </h2>
        <p className="text-white/80">
          Satisfy your cravings with cutting-edge delivery technology
          that&apos;s both fast and reliable.
        </p>
      </div>
    </div>
  );
}
