function getRandomInt (count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout ({
  children,
}: {
  children: React.ReactNode;
}) {

  const random = getRandomInt(2);

  if(random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <div>
      {children}
      <h1>Features products</h1>
    </div>
  );
}