import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';


export default function Home() {
  return (
       <div style={{display: 'flex', justifyContent: 'center'}}>
      <Link href='/products'><button  style={{color: 'white', background: '#7501cd', borderRadius:'5px', border: 'none', padding: '20px', cursor:'pointer', fontSize: '16px'}}>Go to the Products</button></Link> 
    </div>
  );
}
