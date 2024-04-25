'use client';
import { useRouter } from 'next/navigation';
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Ordering product');
    router.push('/')
    // router.push('/') adds a new history entry
    // router.replace('/') replaces the current history entry
    // router.back() goes back in history
    // router.forward() goes forward in history
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Order</button>
    </>
  );
}