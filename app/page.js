import ObjectDetection from "@/components/ObjectDetection";


export default function Home() {
  return (
    <main className="flex min-h-screen p-8 flex-col items-center">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg: text-8xl tracking-tighter md:px-6 text-center">Theif Detection Alarm</h1>
      <ObjectDetection />
    </main>
  );
}
