'use client';
import Clock from "../components/clock/clock";
import useTime from "../hooks/useTime";
import HomeLayout from "../components/home/home-layout";

export default function Home() {
  const time = useTime();
  return (
    <HomeLayout>
      <Clock time={time} />
      <Clock time={time} />
      <Clock time={time} />
      <Clock time={time} />
    </HomeLayout>
  );
}
