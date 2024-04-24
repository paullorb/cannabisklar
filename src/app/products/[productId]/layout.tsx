export default function ProductDetailsLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h1>Product Features</h1>
    </div>
  );
}