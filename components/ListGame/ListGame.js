import Image from "next/image";

export default function ListGame() {
  return (
    <section className="pt-20">
      <div className="container mx-auto">
        <h2 className="text-8xl font-bold font-body text-center">List Game</h2>
        <div className="flex w-9/12 mx-auto mt-16">
          <div className="w-4/12">
            <Image
              className="cursor-pointer"
              src="/images/game1.png"
              alt="game1"
              width={294}
              height={217}
            />
          </div>
          <div className="w-4/12">
            <Image
              className="cursor-pointer"
              src="/images/game2.png"
              alt="game2"
              width={294}
              height={217}
            />
          </div>
          <div className="w-4/12">
            <Image
              className="cursor-pointer"
              src="/images/game3.png"
              alt="game3"
              width={294}
              height={217}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
