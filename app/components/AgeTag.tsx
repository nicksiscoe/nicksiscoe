"use client";

const BIRTHDAY = new Date(1998, 9, 15);

function getAge(now: Date): number {
  let age = now.getFullYear() - BIRTHDAY.getFullYear();
  const monthDiff = now.getMonth() - BIRTHDAY.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < BIRTHDAY.getDate())) {
    age -= 1;
  }
  return age;
}

export default function AgeTag() {
  return (
    <div className="tag" suppressHydrationWarning>
      💾 {getAge(new Date())} y/o
    </div>
  );
}
