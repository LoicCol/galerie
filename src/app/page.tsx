const mockUrls = [
  "https://utfs.io/f/d63a20df-9e72-4f6e-aa35-9903fcdb5b28-e3rgkz.jpg",
  "https://utfs.io/f/3b648c1c-1e58-434f-9a10-f342a052b6ae-yd0xy2.PNG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
