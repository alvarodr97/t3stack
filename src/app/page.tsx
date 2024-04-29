import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/3d98ac1c-b8ff-4c1b-bc12-d74f2be95aeb-10zm6f.jpg",
  "https://utfs.io/f/5a318b7c-6180-4c5a-8738-30226df547a7-lwn5nx.jpg",
  "https://utfs.io/f/37905b6f-4b82-4323-a863-de3aa9b072d8-c80ahr.jpg",
  "https://utfs.io/f/2e9b3c8d-0baa-4056-b043-2050f015dcf0-78hwuk.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index +1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-x-4">
        {
          [...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
