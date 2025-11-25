'use client';
import { ReactNode } from 'react';
import styles from './home-layout.module.css';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

